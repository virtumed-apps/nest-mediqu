import { UserToken } from 'src/entities/user-token.entities';
import { User } from 'src/entities/user.entities';

export default interface IUserTokensRepository {
  generate(user_id: string): Promise<UserToken>;
  findByToken(token: string): Promise<UserToken | undefined | null>;
  findUserById(email: string): Promise<User | undefined>;
  updateUser(id: string, password: string, data: Partial<User>): Promise<User>;
}
