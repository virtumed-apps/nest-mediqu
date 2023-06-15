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

    // Procura e checa se o user existe, usando o email
    const user = await this.prisma.user.findUnique({
      where: { email },
      select: this.userSelect, // Aplica a seleção de campos
    });

    if (!user) {
      throw new UnauthorizedException('Usuário e/ou senha inválidos!');
    }
    // Valida se a senha informada é correta
    const isHashValid = await bcrypt.compare(password, user.password);

    if (!isHashValid) {
      throw new UnauthorizedException('Usuário e/ou senha inválidos!');
    }

    delete user.password;

    return {
      token: this.jwtService.sign({ email }),
      user,
    };
  }
}
