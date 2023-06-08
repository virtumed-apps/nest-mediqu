import { CreateUserSwagger } from 'src/app/user/swagger/create-user.dto';
import { User } from 'src/entities/user.entities';

export default interface IAdminRepository {
  createAdmin(data: CreateUserSwagger): Promise<User>;

  deleteUser(id: string): Promise<any>;
}
