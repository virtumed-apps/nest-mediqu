import { Module } from '@nestjs/common';
import { AdminService } from './service/admin.service';
import { AdminController } from 'src/http/admin.controller';
import { AdminRepository } from './repositories/adminRepository';
import { PrismaModule } from 'src/database/prisma/prisma.module';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    PrismaModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '24h' },
    }),
  ],
  providers: [AdminRepository, AdminService],
  controllers: [AdminController],
})
export class AdminModule {}
