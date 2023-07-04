import { PrismaService } from 'src/database/prisma/prisma.service';
import { BadRequestException } from '@nestjs/common';
import { handleError } from 'src/shared/error/handle-error.util';
import { User } from 'src/entities/user.entities';
import * as bcrypt from 'bcrypt';
import { CreateUserSwagger } from 'src/app/user/swagger/create-user.dto';
import IAdminRepository from './IAdminRepository';

export class AdminRepository implements IAdminRepository {
  constructor(private readonly prisma: PrismaService) {}

  async createAdmin(data: CreateUserSwagger): Promise<User> {
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
          refreshToken: '',
          role: 'admin',
          password: hashPassword,
        },
      })
      .catch(handleError);
  }

  async deleteUser(id: string): Promise<void> {
    await this.prisma.user.delete({ where: { id } });
  }
}
