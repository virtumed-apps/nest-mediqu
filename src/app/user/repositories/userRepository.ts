import { PrismaService } from 'src/database/prisma/prisma.service';
import { CreateUserSwagger } from '../swagger/create-user.dto';
import { UpdateUserSwagger } from '../swagger/update-user.dto';
import IUserRepository from './IUserRepository';
import { BadRequestException } from '@nestjs/common';
import { handleError } from 'src/shared/error/handle-error.util';
import { User } from 'src/entities/user.entities';
import * as bcrypt from 'bcrypt';
import { schedule } from 'node-cron';

export class UserRepository implements IUserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async createUser(data: CreateUserSwagger): Promise<User> {
    if (data.password != data.confirmPassword) {
      throw new BadRequestException('As senhas informadas não são iguais.');
    }

    delete data.confirmPassword;

    const hashPassword = await bcrypt.hash(data.password, 10);

    return this.prisma.user
      .create({
        data: {
          name: data.name,
          avatar_url: data.avatar_url,
          email: data.email,
          role: 'user',
          password: hashPassword,
        },
      })
      .catch(handleError);
  }

  async createDoctor(data: CreateUserSwagger): Promise<User> {
    if (data.password != data.confirmPassword) {
      throw new BadRequestException('As senhas informadas não são iguais.');
    }

    delete data.confirmPassword;

    const hashPassword = await bcrypt.hash(data.password, 10);

    return this.prisma.user
      .create({
        data: {
          name: data.name,
          avatar_url: data.avatar_url,
          email: data.email,
          role: 'doctor',
          password: hashPassword,
        },
      })
      .catch(handleError);
  }

  async findAllUser(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  async findOneUser(id: string): Promise<User> {
    return this.prisma.user.findUnique({ where: { id } });
  }

  async updateUser(id: string, data: UpdateUserSwagger): Promise<User> {
    return this.prisma.user.update({ where: { id }, data });
  }

  async startDeleteJob(isActive: boolean, id: string): Promise<void> {
    if (isActive === true) {
      const job = schedule('0 0 * * *', async () => {
        // Executa a exclusão após 30 dias
        await this.prisma.user.delete({
          where: {
            id,
          },
        });
      });

      // Inicia a tarefa agendada
      job.start();
    }
  }

  async startScoreDelete(isActive: boolean, id: string): Promise<void> {
    if (isActive === true) {
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
