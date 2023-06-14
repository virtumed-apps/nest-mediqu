import { Controller, Post, Body, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserTokenService } from 'src/app/user-token/service/user-token.service';
import { Response } from 'express';
import { ResetPasswordSwagger } from 'src/app/user-token/swagger/resetPassword.dto';
import { EmailSwagger } from 'src/app/user-token/swagger/emailReset.dto';

@ApiTags('user-token')
@Controller('user-token')
export class UserTokenController {
  constructor(private readonly userTokenService: UserTokenService) {}

  @Post('forgot-password')
  async sendForgotPasswordEmail(@Body() email: EmailSwagger): Promise<string> {
    return this.userTokenService.sendForgotPasswordEmail(email);
  }

  @Post('reset-password')
  async resetPassword(
    @Body() request: ResetPasswordSwagger,
    @Res() res: Response,
  ): Promise<Response> {
    const { password, token } = request;

    await this.userTokenService.resetPassword({
      password,
      token,
    });

    return res.status(204).json();
  }
}
