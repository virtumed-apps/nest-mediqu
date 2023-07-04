import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserSwagger } from '../swagger/create-user.dto';
import { UpdateUserSwagger } from '../swagger/update-user.dto';
import { User } from 'src/entities/user.entities';
import { ProfissionalRepository } from '../repositories/profissionalRepository';

@Injectable()
export class ProfissionalService {
  constructor(
    private readonly profissionalRepository: ProfissionalRepository,
  ) {}

  async createDoctor(data: CreateUserSwagger): Promise<User> {
    if (data.password !== data.confirmPassword) {
      throw new BadRequestException('As senhas informadas não são iguais.');
    }

    const verify = await this.profissionalRepository.findEmailUser(data.email);

    if (verify) {
      throw new BadRequestException('Este usuário já existe.');
    }

    const user = await this.profissionalRepository.createDoctor(data);
    return user;
  }

  async getAllUsers(): Promise<User[]> {
    return this.profissionalRepository.findAllUser();
  }

  async getUserById(id: string): Promise<User> {
    return this.profissionalRepository.findOneUser(id);
  }

  async updateUser(id: string, data: UpdateUserSwagger): Promise<User> {
    return this.profissionalRepository.updateUser(id, data);
  }
}
