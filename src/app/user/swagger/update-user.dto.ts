import { PartialType } from '@nestjs/swagger';
import { CreateUserSwagger } from './create-user.dto';

export class UpdateUserSwagger extends PartialType(CreateUserSwagger) {}
