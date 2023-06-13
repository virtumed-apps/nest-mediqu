import { Appointment } from 'src/entities/appointment.entities';

import { ICreateAppointment } from '../swagger/ICreateAppointment/create-appointment.dto';
import { IFindAppointments } from '../swagger/IFindAllAppointment/find-appointment.dto';
import { IFindAllInDay } from '../swagger/IFindAllInDay/find-appointmentInDay.dto';
import { IFindAllInMonth } from '../swagger/IFindAllInMonth/find-appointmentInMonth.dto';

export default interface IAppointmentsRepository {
  createAppointment({
    id_patient,
    id_professional,
    date,
    type,
    multiple_users,
    payment,
    in_person,
  }: ICreateAppointment): Promise<Appointment>;

  findMyAppointmentsAsPatient({
    date,
    user_id,
  }: IFindAppointments): Promise<Appointment | undefined | null>;

  findPatientAppointments({
    date,
    user_id,
  }: IFindAppointments): Promise<Appointment | undefined | null>;

  findMyAppointmentsAsDoctor({
    date,
    user_id,
  }: IFindAppointments): Promise<Appointment | undefined | null>;

  findDoctorAppointments({
    date,
    user_id,
  }: IFindAppointments): Promise<Appointment | undefined | null>;

  findAllDoctorAppointment(id_professional: string): Promise<Appointment[]>;

  findAllPatientAppointment(id_professional: string): Promise<Appointment[]>;

  findAllInMonthFromPatient({
    user_id,
    month,
    year,
  }: IFindAllInMonth): Promise<Appointment[]>;

  findAllInDayFromProfissional({
    user_id,
    day,
    month,
    year,
  }: IFindAllInDay): Promise<Appointment[]>;

  findAllInDayFromPatient({
    user_id,
    day,
    month,
    year,
  }: IFindAllInDay): Promise<Appointment[]>;

  delete(appointment_id: string): Promise<void>;
}
