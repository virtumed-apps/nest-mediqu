import { Injectable } from '@nestjs/common';
import { schedule } from 'node-cron';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { Role } from '@prisma/client';
import { User } from 'src/entities/user.entities';
import { CreateUserSwagger } from '../swagger/create-user.dto';
import { UpdateUserSwagger } from '../swagger/update-user.dto';
import * as bcrypt from 'bcrypt';
import IUserRepository from './IUserRepository';
import { SecurityService } from 'src/app/security/service/security.service';

@Injectable()
export class UserRepository implements IUserRepository {
  private userSelect = {
    id: true,
    name: true,
    email: true,
    password: false,
    accountLocked: false,
    failedLoginAttempts: false,
    avatar_url: true,
    role: true,
    refreshToken: true,
    active: true,
    first_time: true,
    userInfoId: false,
    oldPasswordsId: false,
    createdAt: false,
    updatedAt: false,
  };
  constructor(
    private readonly prisma: PrismaService,
    private readonly securityService: SecurityService,
  ) {}

  async createUser(data: CreateUserSwagger): Promise<User> {
    const hashPassword = await bcrypt.hash(data.password, 10);

    const user = await this.prisma.user.create({
      data: {
        name: data.name,
        avatar_url: data.avatar_url,
        email: data.email,
        refreshToken: '',
        role: Role.user,
        password: hashPassword,
        active: true,
        first_time: true,
      },
      select: this.userSelect,
    });

    const tokens = await this.securityService.getTokens(user.id, user.name);

    const addRefresh = await this.securityService.updateRefreshToken(
      user.id,
      tokens.refreshToken,
    );

    return addRefresh;
  }

  async findEmailUser(email: string): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      console.log(`${email} does not exist`);
    }

    return user;
  }

  async findAllUser(): Promise<User[]> {
    const users = await this.prisma.user.findMany({
      select: this.userSelect,
    });

    return users;
  }

  async findOneUser(id: string): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: { id },
      select: this.userSelect,
    });
    return user;
  }

  async logout(id: string) {
    return this.prisma.user.update({
      where: { id },
      data: { refreshToken: null },
    });
  }

  async updateUser(id: string, data: UpdateUserSwagger): Promise<User> {
    const update = await this.prisma.user.update({
      where: { id },
      data,
      select: this.userSelect,
    });

    return update;
  }

  async startDeleteJob(isActive: boolean, id: string): Promise<void> {
    if (isActive) {
      const job = schedule('0 0 * * *', async () => {
        // Execute deletion after 30 days
        await this.prisma.user.delete({
          where: {
            id,
          },
        });
      });

      // Start the scheduled task
      job.start();
    }
  }

  async startScoreDelete(isActive: boolean, id: string): Promise<void> {
    if (isActive) {
      this.startDeleteJob(isActive, id);

      await this.prisma.user.update({
        where: {
          id,
        },
        data: {
          active: false,
        },
      });
    }
  }
}
