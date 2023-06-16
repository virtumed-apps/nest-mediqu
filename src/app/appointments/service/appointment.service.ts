import { Injectable } from '@nestjs/common';
import { Appointment } from 'src/entities/appointment.entities';
import { ICreateAppointment } from '../swagger/ICreateAppointment/create-appointment.dto';
import {
  isBefore,
  format,
  getHours,
  isAfter,
  getDaysInMonth,
  getDate,
  getMinutes,
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
  hour: string;
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
    const appointmentDate = new Date(data.date);

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

    const minutes = appointmentDate.getMinutes();
    if (minutes % 5 !== 0) {
      throw handleError(
        new Error(
          'You can only schedule appointments at intervals of 5 minutes',
        ),
      );
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

    const minutesPerHour = 60;
    const interval = 30;

    const eachHourArray = Array.from(
      { length: 24 * (minutesPerHour / interval) },
      (_, index) => {
        const hour = Math.floor(index / (minutesPerHour / interval));
        const minute = (index % (minutesPerHour / interval)) * interval;
        return { hour, minute };
      },
    );

    const currentDate = new Date(Date.now());

    const availability = eachHourArray.map(({ hour, minute }) => {
      const hasAppointmentInInterval = appointments.find((appointment) => {
        const appointmentHour = getHours(appointment.date);
        const appointmentMinute = getMinutes(appointment.date);
        return appointmentHour === hour && appointmentMinute === minute;
      });

      const compareDate = new Date(year, month - 1, day, hour, minute);

      return {
        hour: `${hour.toString().padStart(2, '0')}:${minute
          .toString()
          .padStart(2, '0')}`,
        available:
          !hasAppointmentInInterval && isAfter(compareDate, currentDate),
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
