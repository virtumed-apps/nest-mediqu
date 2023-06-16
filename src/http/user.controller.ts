import {
  Controller,
  Get,
  Post,
  Put,
  Body,
  Param,
  ValidationPipe,
  UsePipes,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { User } from 'src/entities/user.entities';
import { UserService } from 'src/app/user/service/user.service';
import { CreateUserSwagger } from 'src/app/user/swagger/create-user.dto';
import { UpdateUserSwagger } from 'src/app/user/swagger/update-user.dto';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UsePipes(ValidationPipe)
  @Post()
  async createUser(@Body() data: CreateUserSwagger): Promise<User> {
    const user = await this.userService.createUser(data);
    return user;
  }

  @Get()
  async getAllUsers(): Promise<User[]> {
    return this.userService.getAllUsers();
  }

  @Get(':id')
  async getUserById(@Param('id') id: string): Promise<User> {
    return this.userService.getUserById(id);
  }

  @UsePipes(ValidationPipe)
  @Put(':id')
  async updateUser(
    @Param('id') id: string,
    @Body() data: UpdateUserSwagger,
  ): Promise<User> {
    const { name, avatar_url } = data;
    const updatedUser = await this.userService.updateUser(id, {
      name,
      avatar_url,
    });
    return updatedUser;
  }
}
