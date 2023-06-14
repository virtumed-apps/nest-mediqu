import { Injectable } from '@nestjs/common';
import { handleError } from 'src/shared/error/handle-error.util';
import { UserTokenRepository } from '../repositories/userTokenRepository';
import { addHours, isAfter } from 'date-fns';
import * as bcrypt from 'bcrypt';

interface IRequest {
  email: string;
}

interface IReset {
  password: string;
  token: string;
}

@Injectable()
export class UserTokenService {
  constructor(private readonly userTokenRepository: UserTokenRepository) {}

  async sendForgotPasswordEmail({ email }: IRequest): Promise<string> {
    // Procura e checa se o user existe, usando o email
    const user = await this.userTokenRepository.findUser(email);

    if (!user) {
      throw handleError(new Error('User does not exists.'));
    }

    const { token } = await this.userTokenRepository.generate(user.id);

    // const message = await this.mailProvider.sendMail(
    //   email,
    //   `Pedido de Recuperação de senha ${token}`,
    // );

    const message = `Pedido de Recuperação de senha ${token}`;
    console.log(token);

    return message;
  }

  public async resetPassword({ token, password }: IReset): Promise<void> {
    const userToken = await this.userTokenRepository.findByToken(token);

    if (!userToken) {
      throw handleError(new Error('User Token does not exists'));
    }

    const user = await this.userTokenRepository.findUser(userToken.user_id);

    if (!user) {
      throw handleError(new Error('User does not exists.'));
    }

    const tokenCreatedAt = userToken.createdAt;
    const compareDate = addHours(tokenCreatedAt, 2);

    if (isAfter(Date.now(), compareDate)) {
      throw handleError(new Error('Token expired'));
    }

    const hashPassword = await bcrypt.hash(password, 10);

    await this.userTokenRepository.updatedUser(user.id, hashPassword);
  }
}
