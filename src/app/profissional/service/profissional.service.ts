import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserSwagger } from '../swagger/create-user.dto';
import { UpdateUserSwagger } from '../swagger/update-user.dto';
import { UserRepository } from '../repositories/profissionalRepository';
import { User } from 'src/entities/user.entities';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async createUser(data: CreateUserSwagger): Promise<User> {
    if (data.password !== data.confirmPassword) {
      throw new BadRequestException('As senhas informadas não são iguais.');
    }

    const verify = await this.userRepository.findEmailUser(data.email);

    if (verify) {
      throw new BadRequestException('Este usuário já existe.');
    }

    const user = await this.userRepository.createUser(data);
    return user;
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
