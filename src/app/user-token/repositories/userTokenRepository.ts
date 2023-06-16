import { Injectable } from '@nestjs/common';
import IUserTokenRepository from './IUserTokenRepository';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { UserToken } from 'src/entities/user-token.entities';
import { User } from 'src/entities/user.entities';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserTokenRepository implements IUserTokenRepository {
  constructor(private readonly prisma: PrismaService) {}

  public async findUserById(id: string): Promise<User | undefined> {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });

    return user;
  }

  public async findUserByEmail(email: string): Promise<User | undefined> {
    const user = await this.prisma.user.findUnique({
      where: { email },
    });

    return user;
  }

  public async findByToken(
    token: string,
  ): Promise<UserToken | undefined | null> {
    const userToken = await this.prisma.userToken.findFirst({
      where: { token },
    });

    return userToken;
  }

  public async generate(user_id: string): Promise<UserToken> {
    const userToken = await this.prisma.userToken.create({
      data: {
        user_id,
      },
    });

    return userToken;
  }

  public async updateUser(
    id: string,
    password: string,
    data: Partial<User>,
  ): Promise<User> {
    const user = await this.prisma.user.update({
      where: { id },
      data: { ...data, password },
    });

    return user;
  }

  public async isPasswordUsedBefore(
    user_id: string,
    password: string,
  ): Promise<boolean> {
    const user = await this.prisma.user.findUnique({
      where: { id: user_id },
      include: { oldPasswords: true },
    });

    if (!user) {
      throw new Error('User not found.');
    }

    const oldPasswords = user.oldPasswords?.old_passwords || [];

    // Verificar se a nova senha é igual a alguma senha antiga
    const isPasswordUsedBefore = oldPasswords.some((oldPassword) =>
      bcrypt.compareSync(password, oldPassword),
    );

    return isPasswordUsedBefore;
  }

  public async addOldPassword(
    user_id: string,
    password: string,
  ): Promise<void> {
    const existingRecord = await this.prisma.oldPasswords.findUnique({
      where: {
        id: user_id,
      },
    });

    if (existingRecord) {
      // Atualiza o registro existente
      await this.prisma.oldPasswords.update({
        where: {
          id: user_id,
        },
        data: {
          old_passwords: {
            push: password,
          },
        },
      });
    } else {
      // Cria um novo registro
      await this.prisma.oldPasswords.create({
        data: {
          id: user_id,
          old_passwords: [password],
        },
      });
    }
  }
}
