import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { User } from 'src/app/user/entities/user.entity';
import { UserService } from 'src/app/user/service/user.service';
import { CreateUserSwagger } from 'src/app/user/swagger/create-user.dto';
import { UpdateUserSwagger } from 'src/app/user/swagger/update-user.dto';

@ApiTags('users')
@Controller('users')
export class AppointmentController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() data: CreateUserSwagger): Promise<User> {
    return this.userService.createUser(data);
  }

  @Get()
  async getAllUsers(): Promise<User[]> {
    return this.userService.getAllUsers();
  }

  @Get(':id')
  async getUserById(@Param('id') id: string): Promise<User> {
    return this.userService.getUserById(id);
  }

  @Put(':id')
  async updateUser(
    @Param('id') id: string,
    @Body() data: UpdateUserSwagger,
  ): Promise<User> {
    return this.userService.updateUser(id, data);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string): Promise<void> {
    return this.userService.deleteUser(id);
  }
}
