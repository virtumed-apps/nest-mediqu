import { Injectable } from '@nestjs/common';
import { UserTokenRepository } from '../repositories/userTokenRepository';
import { addMinutes, isAfter } from 'date-fns';
import * as bcrypt from 'bcrypt';

interface IRequest {
  email: string;
}

interface IReset {
  token: string;
  password: string;
}

@Injectable()
export class UserTokenService {
  constructor(private readonly userTokenRepository: UserTokenRepository) {}

  async sendForgotPasswordEmail({
    email,
  }: IRequest): Promise<{ message: string }> {
    const user = await this.userTokenRepository.findUserByEmail(email);

    if (!user) {
      throw new Error('User does not exist.');
    }

    const { token } = await this.userTokenRepository.generate(user.id);

    const message = `Pedido de Recuperação de senha ${token}`;

    const data = {
      message,
    };

    console.log(token);

    return data;
  }
  async resetPassword({ token, password }: IReset): Promise<void> {
    const userToken = await this.userTokenRepository.findByToken(token);

    if (!userToken) {
      throw new Error('User Token does not exist.');
    }

    const user = await this.userTokenRepository.findUserById(userToken.user_id);

    if (!user) {
      throw new Error('User does not exist.');
    }

    const tokenCreatedAt = userToken.createdAt;
    const compareDate = addMinutes(tokenCreatedAt, 2);

    if (isAfter(Date.now(), compareDate)) {
      throw new Error('Token expired.');
    }

    const hashPassword = await bcrypt.hash(password, 10);

    await this.userTokenRepository.updateUser(user.id, hashPassword);
  }
}
