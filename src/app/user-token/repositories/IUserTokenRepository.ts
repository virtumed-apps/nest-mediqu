import { UserToken } from 'src/entities/user-token.entities';

export default interface IUserTokensRepository {
  generate(user_id: string): Promise<UserToken>;
  findByToken(token: string): Promise<UserToken | undefined | null>;
}
