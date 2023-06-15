import { Injectable } from '@nestjs/common';
import IUserTokenRepository from './IUserTokenRepository';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { UserToken } from 'src/entities/user-token.entities';
import { User } from 'src/entities/user.entities';

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

  public async updateUser(id: string, password: string): Promise<User> {
    const user = await this.prisma.user.update({
      where: {
        id,
      },
      data: {
        password,
      },
    });

    return user;
  }
}
