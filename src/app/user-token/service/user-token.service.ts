import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserTokenRepository } from '../repositories/userTokenRepository';
import { addMinutes, isAfter } from 'date-fns';
import * as bcrypt from 'bcrypt';
import { handleError } from 'src/shared/error/handle-error.util';

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
      throw new HttpException('Token expired.', HttpStatus.BAD_REQUEST);
    }

    // Verificar se a nova senha é igual a alguma senha antiga
    const isPasswordUsedBefore =
      await this.userTokenRepository.isPasswordUsedBefore(user.id, password);
    if (isPasswordUsedBefore) {
      throw handleError(Error('Cannot reuse old passwords.'));
    }

    const hashPassword = await bcrypt.hash(password, 10);

    // Redefinir as propriedades accountLocked e failedLoginAttempts
    await this.userTokenRepository.updateUser(user.id, hashPassword, {
      accountLocked: false,
      failedLoginAttempts: 0,
    });

    // Adicionar a nova senha à lista de senhas antigas
    await this.userTokenRepository.addOldPassword(user.id, password);
  }
}
