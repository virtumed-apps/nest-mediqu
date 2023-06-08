import { Injectable } from '@nestjs/common';
import { UserRepository } from 'src/app/user/repositories/userRepository';
import { CreateUserSwagger } from 'src/app/user/swagger/create-user.dto';
import { UpdateUserSwagger } from 'src/app/user/swagger/update-user.dto';
import { User } from 'src/entities/user.entities';

@Injectable()
export class AppointmentService {
  constructor(private readonly userRepository: UserRepository) {}

  async createUser(data: CreateUserSwagger): Promise<User> {
    return this.userRepository.createAdmin(data);
  }

  async getAllUsers(): Promise<User[]> {
    return this.userRepository.findAllUser();
  }

  async getUserById(id: string): Promise<User> {
    return this.userRepository.findOneUser(id);
  }

  async updateUser(id: string, data: UpdateUserSwagger): Promise<User> {
    return this.userRepository.updateUser(id, data);
  }

  async deleteUser(id: string): Promise<void> {
    return this.userRepository.deleteUser(id);
  }
}
