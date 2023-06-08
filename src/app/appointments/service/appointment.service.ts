import { Injectable } from '@nestjs/common';
import { UserRepository } from 'src/app/user/repositories/userRepository';

@Injectable()
export class AppointmentService {
  constructor(private readonly userRepository: UserRepository) {}
}
