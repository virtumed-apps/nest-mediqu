import { Module } from '@nestjs/common';
import { UserService } from './service/user.service';
import { UserController } from 'src/http/user.controller';
import { UserRepository } from './repositories/userRepository';
import { SecurityModule } from '../security/security.module';
import { MailModule } from '../mail/mailer.module';
import { SecurityService } from '../security/service/security.service';

@Module({
  imports: [SecurityModule, MailModule],
  providers: [UserRepository, UserService, SecurityService],
  controllers: [UserController],
})
export class UserModule {}
