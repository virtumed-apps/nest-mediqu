import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class ICreateAppointment {
  @IsNotEmpty()
  @ApiProperty({
    description: 'ID do paciente',
    example: 'e1d7af5d-9d23-4876-b020-5066f5f66e5a',
  })
  id_patient: string;

  @IsNotEmpty()
  @ApiProperty({
    description: 'ID do profissional',
    example: 'e1d7af5d-9d23-4876-b020-5066f5f66e5b',
  })
  id_professional: string;

  @IsNotEmpty()
  @ApiProperty({
    description: 'Data do agendamento',
    example: '2023-06-13T22:00:00',
  })
  date: Date;

  @IsNotEmpty()
  @ApiProperty({
    description: 'Tipo de agendamento',
    example: 'Consulta',
  })
  type: string;

  @IsNotEmpty()
  @ApiProperty({
    description: 'Indicador de múltiplos usuários',
    example: true,
  })
  multiple_users: boolean;

  @IsNotEmpty()
  @ApiProperty({
    description: 'Indicador de pagamento',
    example: true,
  })
  payment: boolean;

  @IsNotEmpty()
  @ApiProperty({
    description: 'Indicador de atendimento presencial',
    example: true,
  })
  in_person: boolean;
}
