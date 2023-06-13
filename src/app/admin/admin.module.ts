import { Module } from '@nestjs/common';
import { AdminService } from './service/admin.service';
import { AdminController } from 'src/http/admin.controller';
import { AdminRepository } from './repositories/adminRepository';
import { SecurityModule } from '../security/security.module';

@Module({
  imports: [SecurityModule],
  providers: [AdminRepository, AdminService],
  controllers: [AdminController],
})
export class AdminModule {}
