import { PrismaService } from 'src/database/prisma/prisma.service';
import { CreateUserSwagger } from '../swagger/create-user.dto';
import { UpdateUserSwagger } from '../swagger/update-user.dto';
import { User } from '../entities/user.entity';
import IUserRepository from './IUserRepository';
import { BadRequestException } from '@nestjs/common';
import { handleError } from 'src/shared/error/handle-error.util';
import * as bcrypt from 'bcrypt';

export class UserRepository {
  private userSelect = {
    id: true,
    name: true,
    email: true,
    password: false,
    role: true,
    createdAt: true,
    updateAt: true,
  };

  constructor(private readonly prisma: PrismaService) {}

  async createAdmin(data: CreateUserSwagger): Promise<User> {
    if (data.password != data.confirmPassword) {
      throw new BadRequestException('As senhas informadas não são iguais.');
    }

    delete data.confirmPassword;

    return this.prisma.user.create({ data });
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
          email: data.email,
          role: 'doctor',
          password: hashPassword,
        },
        select: this.userSelect,
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

  async deleteUser(id: string): Promise<void> {
    await this.prisma.user.delete({ where: { id } });
  }
}
