import { Injectable } from '@nestjs/common';
import { CreateUserSwagger } from '../swagger/create-user.dto';
import { UpdateUserSwagger } from '../swagger/update-user.dto';
import { User } from '../entities/user.entity';
import { UserRepository } from '../repositories/userRepository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async createUser(data: CreateUserSwagger): Promise<User> {
    return this.userRepository.createUser(data);
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
