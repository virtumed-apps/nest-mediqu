import { PrismaService } from 'src/database/prisma/prisma.service';
import IAppointmentRepository from './IAppointmentRepository';
import { User } from 'src/entities/user.entities';
import { CreateUserSwagger } from 'src/app/user/swagger/create-user.dto';
import { UpdateUserSwagger } from 'src/app/user/swagger/update-user.dto';

export class AppointmentRepository implements IAppointmentRepository {
  constructor(private readonly prisma: PrismaService) {}

  async createUser(data: CreateUserSwagger): Promise<User> {
    return this.prisma.user.create({ data });
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
