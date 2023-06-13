import { Injectable } from '@nestjs/common';
import { Appointment } from 'src/entities/appointment.entities';
import { ICreateAppointment } from '../swagger/ICreateAppointment/create-appointment.dto';
import { startOfHour, isBefore, format, parseISO } from 'date-fns';
import AppointmentRepository from '../repositories/appointmentRepository';
import { handleError } from 'src/shared/error/handle-error.util';

@Injectable()
export class AppointmentService {
  constructor(private readonly appointmentRepository: AppointmentRepository) {}

  async createAppointment(data: ICreateAppointment): Promise<Appointment> {
    const appointmentDate = startOfHour(parseISO(data.date)); // Parse a string de data para o formato Date

    if (isBefore(appointmentDate, Date.now())) {
      throw handleError(
        new Error("You can't create an appointment on a past date"),
      );
    }

    if (data.id_patient === data.id_professional) {
      throw handleError(
        new Error("You can't create an appointment with yourself"),
      );
    }

    const findAppoitmentInSameDate =
      await this.appointmentRepository.findDoctorAppointments({
        date: appointmentDate,
        user_id: data.id_professional,
      });

    if (findAppoitmentInSameDate) {
      throw handleError(new Error('This appointment is already booked'));
    }

    const dateFormatted = format(appointmentDate, "dd/MM/yyyy 'às' HH:mm'h'");

    console.log(dateFormatted);

    return await this.appointmentRepository.createAppointment(data);
  }
}
