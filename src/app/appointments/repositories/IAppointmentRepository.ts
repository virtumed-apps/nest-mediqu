import { User } from 'src/entities/user.entities';
import { CreateUserSwagger } from 'src/app/user/swagger/create-user.dto';
import { UpdateUserSwagger } from 'src/app/user/swagger/update-user.dto';

export default interface IAppointmentRepository {
  createUser(data: CreateUserSwagger): Promise<User>;

  findAllUser(): Promise<User[]>;

  findOneUser(id: string): Promise<User>;

  updateUser(id: string, data: UpdateUserSwagger): Promise<User>;

  deleteUser(id: string): Promise<any>;
}
