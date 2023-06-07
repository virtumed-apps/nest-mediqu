import { Module } from '@nestjs/common';
import { AppointmentService } from './service/appointment.service';
import { AppointmentController } from 'src/http/appointment.controller';
import { AppointmentRepository } from './repositories/appointmentRepository';

@Module({
  providers: [AppointmentRepository, AppointmentService],
  controllers: [AppointmentController],
})
export class AppointmentModule {}
