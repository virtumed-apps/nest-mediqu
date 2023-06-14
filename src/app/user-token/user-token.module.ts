import { Module } from '@nestjs/common';
import { SecurityModule } from '../security/security.module';
import { UserTokenRepository } from './repositories/userTokenRepository';
import { UserTokenService } from './service/user-token.service';
import { UserTokenController } from 'src/http/user-token.controller';

@Module({
  imports: [SecurityModule],
  providers: [UserTokenRepository, UserTokenService],
  controllers: [UserTokenController],
})
export class UserTokenModule {}
