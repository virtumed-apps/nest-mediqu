import { Module } from '@nestjs/common';
import { AppointmentService } from './service/appointment.service';
import { AppointmentController } from 'src/http/appointment.controller';
import AppointmentRepository from './repositories/appointmentRepository';
import { SecurityModule } from '../security/security.module';

@Module({
  imports: [SecurityModule],
  providers: [AppointmentRepository, AppointmentService],
  controllers: [AppointmentController],
})
export class AppointmentModule {}
