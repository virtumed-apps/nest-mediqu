import { BadRequestException, Injectable } from '@nestjs/common';
import { schedule } from 'node-cron';
import { PrismaService } from 'src/database/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { Role } from '@prisma/client';
import { User } from 'src/entities/user.entities';
import { CreateUserSwagger } from '../swagger/create-user.dto';
import { UpdateUserSwagger } from '../swagger/update-user.dto';

@Injectable()
export class UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async createUser({
    name,
    avatar_url,
    email,
    password,
  }: CreateUserSwagger): Promise<User> {
    const hashPassword = await bcrypt.hash(password, 10);

    const user = await this.prisma.user.create({
      data: {
        name,
        avatar_url,
        email,
        role: Role.user,
        password: hashPassword,
        active: true,
        first_time: true,
      },
    });

    return user;
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

  async createDoctor(data: CreateUserSwagger): Promise<User> {
    if (data.password !== data.confirmPassword) {
      throw new BadRequestException('The passwords provided are not the same.');
    }

    delete data.confirmPassword;

    const hashPassword = await bcrypt.hash(data.password, 10);

    return await this.prisma.user.create({
      data: {
        name: data.name,
        avatar_url: data.avatar_url,
        email: data.email,
        role: 'doctor',
        password: hashPassword,
      },
    });
  }

  async findAllUser(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  async findOneUser(id: string): Promise<User> {
    const user = await this.prisma.user.findUnique({ where: { id } });
    return user;
  }

  async updateUser(id: string, data: UpdateUserSwagger): Promise<User> {
    const update = await this.prisma.user.update({ where: { id }, data });
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
