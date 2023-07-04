import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, Matches } from 'class-validator';

export class CreateUserSwagger {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Nome do usuário.',
    example: 'User',
  })
  name: string;

  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Email do Usuário utilizado no login. Deve ser único',
    example: 'user@email.com',
  })
  email: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/^(?=.*[A-Z])(?=.*\d)(?=.*\W)[A-Za-z\d\W]{8,}$/)
  @ApiProperty({
    description:
      'Senha do usuário para login. Deve ter 8 caracteres, um maiúsculo e um caractere especial',
    example: 'Abc@1234',
  })
  password: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/^(?=.*[A-Z])(?=.*\d)(?=.*\W)[A-Za-z\d\W]{8,}$/)
  @ApiProperty({
    description:
      'Senha do usuário para login. Deve ter 8 caracteres, um maiúsculo e um caractere especial',
    example: 'Abc@1234',
  })
  confirmPassword: string;

  @IsString()
  @ApiProperty({
    description: 'Imagem de perfil do Usuário',
    example:
      'https://www.wikihow.com/images/thumb/d/db/Get-the-URL-for-Pictures-Step-2-Version-6.jpg/v4-460px-Get-the-URL-for-Pictures-Step-2-Version-6.jpg',
  })
  @IsNotEmpty()
  avatar_url: string;
}
