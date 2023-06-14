import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class EmailSwagger {
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Email do Usuário utilizado no login. Deve ser único',
    example: 'user@email.com',
  })
  email: string;
}
