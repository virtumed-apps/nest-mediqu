import { Injectable } from '@nestjs/common';
import { Appointment } from 'src/entities/appointment.entities';
import { ICreateAppointment } from '../swagger/ICreateAppointment/create-appointment.dto';
import {
  startOfHour,
  isBefore,
  format,
  getHours,
  isAfter,
  getDaysInMonth,
  getDate,
} from 'date-fns';
import { handleError } from 'src/shared/error/handle-error.util';
import AppointmentRepository from '../repositories/appointmentRepository';

interface IRequest {
  user_id: string;
  day: number;
  month: number;
  year: number;
}

interface IRequestPatient {
  user_id: string;
  month: number;
  year: number;
}

type IResponseDay = Array<{
  hour: number;
  available: boolean;
}>;

type IResponseMonth = Array<{
  day: number;
  available: boolean;
}>;

@Injectable()
export class AppointmentService {
  constructor(private readonly appointmentRepository: AppointmentRepository) {}

  async createAppointment(data: ICreateAppointment): Promise<Appointment> {
    const appointmentDate = startOfHour(new Date(data.date));

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

    const savedAppointment = await this.appointmentRepository.createAppointment(
      {
        ...data,
        date: appointmentDate,
      },
    );

    return savedAppointment;
  }

  async findAllInDayFromProfissional({
    user_id,
    day,
    month,
    year,
  }: IRequest): Promise<Appointment[]> {
    return this.appointmentRepository.findAllInDayFromProfissional({
      user_id,
      day,
      month,
      year,
    });
  }

  async findAllInDayFromPatient({
    user_id,
    day,
    month,
    year,
  }: IRequest): Promise<Appointment[]> {
    return this.appointmentRepository.findAllInDayFromPatient({
      user_id,
      day,
      month,
      year,
    });
  }

  public async listProvidersDayAvailability({
    user_id,
    day,
    month,
    year,
  }: IRequest): Promise<IResponseDay> {
    const appointments =
      await this.appointmentRepository.findAllInDayFromPatient({
        user_id,
        day,
        month,
        year,
      });

    const hourStart = 0;

    const eachHourArray = Array.from(
      { length: 24 },
      (_, index) => index + hourStart,
    );

    const currentDate = new Date(Date.now());

    const availability = eachHourArray.map((hour) => {
      const hasAppointmentInHour = appointments.find(
        (appointment) => getHours(appointment.date) === hour,
      );

      const compareDate = new Date(year, month - 1, day, hour);

      return {
        hour,
        available: !hasAppointmentInHour && isAfter(compareDate, currentDate),
      };
    });

    return availability;
  }

  public async findAllInMonthFromPatient({
    user_id,
    month,
    year,
  }: IRequestPatient): Promise<IResponseMonth> {
    const appointments =
      await this.appointmentRepository.findAllInMonthFromPatient({
        user_id,
        month,
        year,
      });

    const numberOfDaysInMonth = getDaysInMonth(new Date(year, month - 1));

    const eachDayArray = Array.from(
      { length: numberOfDaysInMonth },
      (_, index) => index + 1,
    );

    const availability = eachDayArray.map((day) => {
      const compareDate = new Date(year, month - 1, day, 23, 59, 59);

      const appointmentsInDay = appointments.filter((appointment: any) => {
        return getDate(appointment.date) === day;
      });

      return {
        day,
        available:
          isAfter(compareDate, new Date()) && appointmentsInDay.length < 24,
      };
    });

    return availability;
  }
}
