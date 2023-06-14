import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateMessageSwagger {
  @IsString()
  @ApiProperty({
    description: 'Escrever mensagem',
    example: 'Olá!',
  })
  text: string;
}
