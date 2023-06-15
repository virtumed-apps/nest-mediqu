import { Controller, Post, Body, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserTokenService } from 'src/app/user-token/service/user-token.service';
import { ResetPasswordSwagger } from 'src/app/user-token/swagger/resetPassword.dto';
import { EmailSwagger } from 'src/app/user-token/swagger/emailReset.dto';
import { Response } from 'express';

@ApiTags('user-token')
@Controller('user-token')
export class UserTokenController {
  constructor(private readonly userTokenService: UserTokenService) {}

  @Post('forgot-password')
  async sendForgotPasswordEmail(
    @Body() email: EmailSwagger,
  ): Promise<{ message: string }> {
    return this.userTokenService.sendForgotPasswordEmail(email);
  }

  @Post('reset-password')
  async resetPassword(
    @Body() data: ResetPasswordSwagger,
    @Res() res: Response,
  ): Promise<Response> {
    const { token, password } = data;

    await this.userTokenService.resetPassword({ token, password });

    return res.status(204).json();
  }
}
