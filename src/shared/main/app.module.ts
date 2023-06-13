import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from 'src/database/prisma/prisma.module';
import { UserModule } from 'src/app/user/user.module';
import { SecurityModule } from 'src/app/security/security.module';
import { AdminModule } from 'src/app/admin/admin.module';
import { AppointmentModule } from 'src/app/appointments/appointment.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    PrismaModule,
    AdminModule,
    AppointmentModule,
    UserModule,
    SecurityModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
