import {
  Controller,
  Post,
  Delete,
  Body,
  Param,
  UseGuards,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { User } from 'src/entities/user.entities';
import { CreateUserSwagger } from 'src/app/user/swagger/create-user.dto';
import { AdminService } from 'src/app/admin/service/admin.service';
import { RolesGuard } from 'src/common/guards/auth.guard';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from 'src/common/guards/entities/role-decorator';
import { Role } from '@prisma/client';

@ApiTags('admin')
@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Roles(Role.admin)
  @UseGuards(AuthGuard(), RolesGuard)
  @ApiOperation({
    summary: 'Cadastrar um usuário vinculado',
  })
  @Post()
  async createAdmin(@Body() data: CreateUserSwagger): Promise<User> {
    return this.adminService.createAdmin(data);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string): Promise<void> {
    return this.adminService.deleteUser(id);
  }
}
