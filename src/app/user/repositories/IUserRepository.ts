import { User } from '../entities/user.entity';
import { CreateUserSwagger } from '../swagger/create-user.dto';
import { UpdateUserSwagger } from '../swagger/update-user.dto';

export default interface IUserRepository {
  createUser(data: CreateUserSwagger): Promise<User>;

  findAllUser(): Promise<User[]>;

  findOneUser(id: string): Promise<User>;

  updateUser(id: string, data: UpdateUserSwagger): Promise<User>;

  deleteUser(id: string): Promise<any>;
}
