import { PrismaService } from 'src/database/prisma/prisma.service';
import IAppointmentRepository from './IAppointmentRepository';

export class AppointmentRepository {
  constructor(private readonly prisma: PrismaService) {}
}
