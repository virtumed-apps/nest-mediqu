import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserService } from 'src/app/user/service/user.service';

@ApiTags('users')
@Controller('users')
export class AppointmentController {
  constructor(private readonly userService: UserService) {}
}
