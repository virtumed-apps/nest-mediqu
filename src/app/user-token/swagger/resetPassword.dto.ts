import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Matches } from 'class-validator';

export class ResetPasswordSwagger {
  @ApiProperty({
    description: 'JWT gerado pelo login',
    example:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuaWNrbmFtZSI6InBhdWxvc2FsdmF0b3JlIiwiaWF0IjoxNjUyMjgxNjUwLCJleHAiOjE2NTIzNjgwNTB9._otkmKymFZ4kgxwAMdK5oXBDg6cK6_NXwCrP64IilS8',
  })
  token: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/^(?=.*[A-Z])(?=.*\d)(?=.*\W)[A-Za-z\d\W]{8,}$/)
  @ApiProperty({
    description:
      'Senha do usuário para login. Deve ter 8 caracteres, um maiúsculo e um caractere especial',
    example: 'Abc@1234',
  })
  password: string;
}
