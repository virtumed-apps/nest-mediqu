import { Injectable } from '@nestjs/common';
import { CreateUserSwagger } from '../swagger/create-user.dto';
import { UpdateUserSwagger } from '../swagger/update-user.dto';
import { UserRepository } from '../repositories/userRepository';
import { User } from 'src/entities/user.entities';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async createUser(data: CreateUserSwagger): Promise<User> {
    return this.userRepository.createUser(data);
  }

  async createDoctor(data: CreateUserSwagger): Promise<User> {
    return this.userRepository.createDoctor(data);
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
}
