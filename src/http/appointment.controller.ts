import { Controller, Post, Body, Get, Param } from '@nestjs/common';
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

  @Get(':patient_id/day-appointment-patient/:year/:month/:day')
  async findAllInDayFromPatient(
    @Param('patient_id') user_id: string,
    @Param('year') year: number,
    @Param('month') month: number,
    @Param('day') day: number,
  ) {
    return this.appointmentService.findAllInDayFromPatient({
      user_id,
      day,
      month,
      year,
    });
  }

  @Get(':patient_id/day-availability-patient/:year/:month/:day')
  async listProvidersDayAvailability(
    @Param('patient_id') user_id: string,
    @Param('year') year: number,
    @Param('month') month: number,
    @Param('day') day: number,
  ) {
    return this.appointmentService.listProvidersDayAvailability({
      user_id,
      day,
      month,
      year,
    });
  }

  @Get(':patient_id/month-availability-patient/:year/:month')
  async findAllInMonthFromPatient(
    @Param('patient_id') user_id: string,
    @Param('year') year: number,
    @Param('month') month: number,
  ) {
    return this.appointmentService.findAllInMonthFromPatient({
      user_id,
      month,
      year,
    });
  }
}
