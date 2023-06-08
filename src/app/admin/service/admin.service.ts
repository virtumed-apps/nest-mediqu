import { Injectable } from '@nestjs/common';
import { CreateUserSwagger } from 'src/app/user/swagger/create-user.dto';
import { User } from 'src/entities/user.entities';
import { AdminRepository } from '../repositories/adminRepository';

@Injectable()
export class AdminService {
  constructor(private readonly adminRepository: AdminRepository) {}

  async createAdmin(data: CreateUserSwagger): Promise<User> {
    return this.adminRepository.createAdmin(data);
  }

  async deleteUser(id: string): Promise<void> {
    return this.adminRepository.deleteUser(id);
  }
}
