import { Module } from '@nestjs/common';
import { UserService } from './service/user.service';
import { UserController } from 'src/http/user.controller';
import { UserRepository } from './repositories/userRepository';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { PrismaModule } from 'src/database/prisma/prisma.module';

@Module({
  imports: [
    PrismaModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '24h' },
    }),
  ],
  providers: [UserRepository, UserService],
  controllers: [UserController],
})
export class UserModule {}
