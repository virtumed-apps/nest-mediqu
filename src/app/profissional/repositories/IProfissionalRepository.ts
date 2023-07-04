import { User } from 'src/entities/user.entities';
import { CreateUserSwagger } from '../swagger/create-user.dto';
import { UpdateUserSwagger } from '../swagger/update-user.dto';

export default interface IProfissionalRepository {
  createDoctor(data: CreateUserSwagger): Promise<User>;

  findAllUser(): Promise<User[]>;

  findOneUser(id: string): Promise<User>;

  updateUser(id: string, data: UpdateUserSwagger): Promise<User>;

  startDeleteJob(isActive: boolean, id: string): Promise<void>;

  startScoreDelete(isActive: boolean, id: string): Promise<void>;
}
