import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class ICreateAppointment {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Nome do usuário.',
    example: 'User',
  })
  id_patient: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Nome do usuário.',
    example: 'User',
  })
  id_professional: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Nome do usuário.',
    example: 'User',
  })
  date: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Nome do usuário.',
    example: 'User',
  })
  type: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Nome do usuário.',
    example: 'User',
  })
  multiple_users: boolean;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Nome do usuário.',
    example: 'User',
  })
  payment: boolean;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Nome do usuário.',
    example: 'User',
  })
  in_person: boolean;
}
