import { JwtService } from '@nestjs/jwt';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { LoginResponseSwagger } from '../swagger/login-user.dto';
import { LoginSwagger } from '../swagger/login.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class SecurityService {
  private userSelect = {
    id: true,
    name: true,
    email: true,
    password: true,
    active: true,
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

    delete user.password;
    delete user.accountLocked;
    delete user.failedLoginAttempts;

    return {
      token: this.jwtService.sign({ email }),
      user,
    };
  }
}
