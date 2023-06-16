import { Module } from '@nestjs/common';
import { UserService } from './service/profissional.service';
import { UserRepository } from './repositories/profissionalRepository';
import { SecurityModule } from '../security/security.module';
import { MailModule } from '../mail/mailer.module';

@Module({
  imports: [SecurityModule, MailModule],
  providers: [UserRepository, UserService],
  controllers: [],
})
export class ProfissionalModule {}
