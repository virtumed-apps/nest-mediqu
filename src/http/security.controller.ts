import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { LoggedUser } from 'src/common/decorators/user.decorator';
import { User } from 'src/app/user/entities/user.entity';
import { LoginSwagger } from 'src/app/security/swagger/login.dto';
import { LoginResponseSwagger } from 'src/app/security/swagger/login-user.dto';
import { SecurityService } from 'src/app/security/service/security.service';

@ApiTags('access')
@Controller('access')
export class SecurityController {
  constructor(private readonly authService: SecurityService) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Realizar login, recebendo um token de autenticação',
  })
  login(@Body() loginDto: LoginSwagger): Promise<LoginResponseSwagger> {
    return this.authService.login(loginDto);
  }

  @UseGuards(AuthGuard())
  @Get()
  @ApiOperation({
    summary: 'Retorna o usuário autenticado no momento',
  })
  @ApiBearerAuth()
  profileAdmin(@LoggedUser() user: User) {
    return user;
  }
}
