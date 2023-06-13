import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { Appointment } from 'src/entities/appointment.entities';
import { handleError } from 'src/shared/error/handle-error.util';

import { ICreateAppointment } from '../swagger/ICreateAppointment/create-appointment.dto';
import { IFindAppointments } from '../swagger/IFindAllAppointment/find-appointment.dto';
import { IFindAllInDay } from '../swagger/IFindAllInDay/find-appointmentInDay.dto';
import { IFindAllInMonth } from '../swagger/IFindAllInMonth/find-appointmentInMonth.dto';

import IAppointmentsRepository from './IAppointmentRepository';
import { endOfDay, endOfMonth, startOfDay, startOfMonth } from 'date-fns';

@Injectable()
class AppointmentRepository implements IAppointmentsRepository {
  constructor(private prisma: PrismaService) {}

  public async findMyAppointmentsAsPatient({
    date,
    user_id,
  }: IFindAppointments): Promise<Appointment | undefined | null> {
    const appointments = await this.prisma.appointment.findFirst({
      where: {
        date,
        id_patient: user_id,
      },
    });

    return appointments;
  }

  public async findPatientAppointments({
    date,
    user_id,
  }: IFindAppointments): Promise<Appointment | undefined | null> {
    const appointments = await this.prisma.appointment.findFirst({
      where: {
        date: {
          equals: date, // Converter a data para uma string no formato ISO
        },
        id_patient: user_id,
      },
    });

    return appointments;
  }

  public async findMyAppointmentsAsDoctor({
    date,
    user_id,
  }: IFindAppointments): Promise<Appointment | undefined | null> {
    const appointments = await this.prisma.appointment.findFirst({
      where: {
        date: {
          equals: date, // Converter a data para uma string no formato ISO
        },
        id_professional: user_id,
      },
    });

    return appointments;
  }

  public async findDoctorAppointments({
    date,
    user_id,
  }: IFindAppointments): Promise<Appointment | undefined | null> {
    const appointments = await this.prisma.appointment.findFirst({
      where: {
        date: {
          equals: date, // Converter a data para uma string no formato ISO
        },
        id_professional: user_id,
      },
    });

    return appointments;
  }

  public async findAllDoctorAppointment(
    id_professional: string,
  ): Promise<Appointment[]> {
    const appointments = await this.prisma.appointment.findMany({
      where: {
        id_professional,
      },
    });

    return appointments;
  }

  public async findAllPatientAppointment(
    id_patient: string,
  ): Promise<Appointment[]> {
    const appointments = await this.prisma.appointment.findMany({
      where: {
        id_patient,
      },
    });

    return appointments;
  }

  public async findAllInMonthFromPatient({
    user_id,
    month,
    year,
  }: IFindAllInMonth): Promise<Appointment[]> {
    const startDate = startOfMonth(new Date(year, month - 1));
    const endDate = endOfMonth(new Date(year, month - 1));

    const appointments = await this.prisma.appointment.findMany({
      where: {
        id_professional: user_id,
        date: {
          gte: startDate,
          lte: endDate,
        },
      },
    });

    return appointments;
  }

  public async findAllInDayFromProfissional({
    user_id,
    day,
    month,
    year,
  }: IFindAllInDay): Promise<Appointment[]> {
    const startDate = startOfDay(new Date(year, month - 1, day));
    const endDate = endOfDay(new Date(year, month - 1, day));

    const appointments = await this.prisma.appointment.findMany({
      where: {
        id_professional: user_id,
        date: {
          gte: startDate,
          lte: endDate,
        },
      },
    });

    return appointments;
  }

  public async findAllInDayFromPatient({
    user_id,
    day,
    month,
    year,
  }: IFindAllInDay): Promise<Appointment[]> {
    const startDate = startOfDay(new Date(year, month - 1, day));
    const endDate = endOfDay(new Date(year, month - 1, day));

    const appointments = await this.prisma.appointment.findMany({
      where: {
        id_patient: user_id,
        date: {
          gte: startDate,
          lte: endDate,
        },
      },
    });

    return appointments;
  }

  public async createAppointment({
    id_patient,
    id_professional,
    date,
    type,
    multiple_users,
    payment,
    in_person,
  }: ICreateAppointment): Promise<Appointment> {
    const appointment = await this.prisma.appointment.create({
      data: {
        id_patient,
        id_professional,
        date,
        type,
        payment,
        multiple_users,
        in_person,
      },
    });

    return appointment;
  }

  public async delete(appointment_id: string): Promise<void> {
    const appointment = await this.prisma.appointment.findUnique({
      where: {
        id: appointment_id,
      },
    });

    if (!appointment) {
      throw handleError(new Error('Appointment does not exist'));
    }

    await this.prisma.appointment.delete({
      where: {
        id: appointment_id,
      },
    });
  }
}

export default AppointmentRepository;
