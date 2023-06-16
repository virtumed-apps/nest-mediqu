import { Module } from '@nestjs/common';
import { UserService } from './service/user.service';
import { UserController } from 'src/http/user.controller';
import { UserRepository } from './repositories/userRepository';
import { SecurityModule } from '../security/security.module';
import { MailModule } from '../mail/mailer.module';

@Module({
  imports: [SecurityModule, MailModule],
  providers: [UserRepository, UserService],
  controllers: [UserController],
})
export class UserModule {}
