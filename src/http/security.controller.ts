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
import { LoggedUser } from 'src/common/decorators/user.decorator';
import { LoginSwagger } from 'src/app/security/swagger/login.dto';
import { LoginResponseSwagger } from 'src/app/security/swagger/login-user.dto';
import { SecurityService } from 'src/app/security/service/security.service';
import { User } from 'src/entities/user.entities';
import { AccessTokenGuard } from 'src/common/guards/accessToken.guard';
import { RefreshTokenGuard } from 'src/common/guards/refreshToken.guard';

@ApiTags('security')
@Controller('security')
export class SecurityController {
  constructor(private readonly securityService: SecurityService) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Realizar login, recebendo um token de autenticação',
  })
  login(@Body() loginDto: LoginSwagger): Promise<LoginResponseSwagger> {
    return this.securityService.login(loginDto);
  }

  @UseGuards(AccessTokenGuard)
  @Get()
  @ApiOperation({
    summary: 'Retorna o usuário autenticado no momento',
  })
  @ApiBearerAuth()
  profileUser(@LoggedUser() user: User) {
    return user;
  }

  @UseGuards(RefreshTokenGuard)
  @Get('refresh')
  @ApiOperation({
    summary: 'Realiza o Refresh Token',
  })
  @ApiBearerAuth()
  refreshTokens(@LoggedUser() user: User) {
    return this.securityService.refreshTokens(user.id, user.refreshToken);
  }

  @UseGuards(AccessTokenGuard)
  @ApiBearerAuth()
  @Get('logout')
  logout(@LoggedUser() user: User) {
    this.securityService.logout(user.id);
  }
}
