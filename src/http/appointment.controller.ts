import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AppointmentService } from 'src/app/appointments/service/appointment.service';
import { Appointment } from 'src/entities/appointment.entities';

import { ICreateAppointment } from 'src/app/appointments/swagger/ICreateAppointment/create-appointment.dto';

@ApiTags('appointment')
@Controller('appointment')
export class AppointmentController {
  constructor(private readonly appointmentService: AppointmentService) {}

  @Post()
  async createAppointment(
    @Body() data: ICreateAppointment,
  ): Promise<Appointment> {
    return this.appointmentService.createAppointment(data);
  }
}
