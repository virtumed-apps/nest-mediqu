import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { PrismaModule } from 'src/database/prisma/prisma.module';
import { SecurityController } from 'src/http/security.controller';
import { SecurityService } from './service/security.service';
import { JwtStrategy } from 'src/common/jwt/jwt';
import { RefreshTokenStrategy } from 'src/common/jwt/refreshToken.jwt';

@Module({
  imports: [
    PrismaModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({}),
  ],
  controllers: [SecurityController],
  providers: [SecurityService, JwtStrategy, RefreshTokenStrategy],
  exports: [PrismaModule, PassportModule, JwtModule], // Exporta os módulos para serem usados em outros módulos
})
export class SecurityModule {}
