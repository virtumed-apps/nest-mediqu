import { Module } from '@nestjs/common';
import { ProfissionalService } from './service/profissional.service';
import { ProfissionalRepository } from './repositories/profissionalRepository';
import { SecurityModule } from '../security/security.module';
import { MailModule } from '../mail/mailer.module';

@Module({
  imports: [SecurityModule, MailModule],
  providers: [ProfissionalService, ProfissionalRepository],
  controllers: [],
})
export class ProfissionalModule {}
