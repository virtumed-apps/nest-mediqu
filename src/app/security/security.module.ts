import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { PrismaModule } from 'src/database/prisma/prisma.module';
import { SecurityController } from 'src/http/security.controller';
import { SecurityService } from './service/security.service';
import { JwtStrategy } from 'src/common/jwt/jwt';

@Module({
  imports: [
    PrismaModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '24h' },
    }),
  ],
  controllers: [SecurityController],
  providers: [SecurityService, JwtStrategy],
  exports: [PrismaModule, PassportModule, JwtModule], // Exporta os módulos para serem usados em outros módulos
})
export class SecurityModule {}
