import { Module } from '@nestjs/common';
import { UserService } from './service/user.service';
import { UserController } from 'src/http/user.controller';
import { UserRepository } from './repositories/userRepository';

@Module({
  providers: [UserRepository, UserService],
  controllers: [UserController],
})
export class UserModule {}
