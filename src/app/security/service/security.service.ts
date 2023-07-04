import { JwtService } from '@nestjs/jwt';
import {
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { LoginResponseSwagger } from '../swagger/login-user.dto';
import { LoginSwagger } from '../swagger/login.dto';
import * as bcrypt from 'bcrypt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class SecurityService {
  private userSelect = {
    id: true,
    name: true,
    email: true,
    password: true,
    active: true,
    refreshToken: true,
    accountLocked: true,
    failedLoginAttempts: true,
    avatar_url: true,
    role: true,
    first_time: true,
    userInfoId: false,
    oldPasswordsId: false,
    createdAt: false,
    updatedAt: false,
  };
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async login(loginDto: LoginSwagger): Promise<LoginResponseSwagger> {
    const { email, password } = loginDto;

    // Procura e checa se o usuário existe usando o email
    const user = await this.prisma.user.findUnique({
      where: { email },
      select: this.userSelect,
    });

    if (!user) {
      throw new UnauthorizedException('Usuário e/ou senha inválidos!');
    }

    // Verifica se a conta do usuário está bloqueada
    if (user.accountLocked) {
      throw new UnauthorizedException(
        'Sua conta está bloqueada. Entre em contato com o administrador.',
      );
    }

    // Valida se a senha informada é correta
    const isHashValid = await bcrypt.compare(password, user.password);

    if (!isHashValid) {
      // Incrementa o número de tentativas de login malsucedidas
      const failedLoginAttempts = user.failedLoginAttempts || 0;
      const maxLoginAttempts = 5;

      if (failedLoginAttempts >= maxLoginAttempts - 1) {
        // Se o usuário atingir o limite máximo de tentativas, bloqueia a conta
        await this.prisma.user.update({
          where: { id: user.id },
          data: { accountLocked: true },
        });

        throw new UnauthorizedException(
          'Sua conta foi bloqueada. Entre em contato com o administrador.',
        );
      } else {
        // Incrementa o número de tentativas de login malsucedidas e salva no banco de dados
        await this.prisma.user.update({
          where: { id: user.id },
          data: { failedLoginAttempts: failedLoginAttempts + 1 },
        });
      }

      throw new UnauthorizedException('Usuário e/ou senha inválidos!');
    }

    // Login bem-sucedido, redefine o número de tentativas de login malsucedidas para 0
    await this.prisma.user.update({
      where: { id: user.id },
      data: { failedLoginAttempts: 0 },
    });

    const token = await this.getTokens(user.id, user.email);

    await this.updateRefreshToken(user.id, token.refreshToken);

    delete user.password;
    delete user.accountLocked;
    delete user.failedLoginAttempts;

    return {
      user,
      token,
    };
  }

  async logout(id: string) {
    return this.prisma.user.update({
      where: { id },
      data: { refreshToken: null },
    });
  }

  async refreshTokens(id: string, refreshToken: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        id,
      },
    });

    if (!user || !user.refreshToken) {
      throw new ForbiddenException('Access Denied');
    }

    const refreshTokenMatches = await bcrypt.compare(
      refreshToken,
      user.refreshToken,
    );

    if (!refreshTokenMatches) {
      throw new ForbiddenException('Access Denied');
    }

    const tokens = await this.getTokens(user.id, user.email);

    await this.updateRefreshToken(user.id, tokens.refreshToken);

    return tokens;
  }

  async updateRefreshToken(id: string, refreshToken: string) {
    const hashedRefreshToken = await bcrypt.hash(refreshToken, 10);

    return this.prisma.user.update({
      where: { id },
      data: { refreshToken: hashedRefreshToken },
    });
  }

  async getTokens(id: string, email: string) {
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(
        {
          id,
          email,
        },
        {
          secret: this.configService.get<string>('JWT_SECRET'),
          expiresIn: '15m',
        },
      ),
      this.jwtService.signAsync(
        {
          id,
          email,
        },
        {
          secret: this.configService.get<string>('JWT_REFRESH_SECRET'),
          expiresIn: '7d',
        },
      ),
    ]);

    return {
      accessToken,
      refreshToken,
    };
  }
}
