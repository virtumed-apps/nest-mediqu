import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateUserSwagger {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Nome do usuário.',
    example: 'User',
  })
  name: string;

  @IsString()
  @ApiProperty({
    description:
      'Senha do usuário para login. Deve ter 8 caracteres, um maiúsculo e um caractere especial',
    example:
      'https://www.wikihow.com/images/thumb/d/db/Get-the-URL-for-Pictures-Step-2-Version-6.jpg/v4-460px-Get-the-URL-for-Pictures-Step-2-Version-6.jpg',
  })
  @IsNotEmpty()
  avatar_url: string;
}
