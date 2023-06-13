import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class IFindAllInDay {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Id do usuário',
    example: 'e1d7af5d-9d23-4876-b020-5066f5f66e5a',
  })
  user_id: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Id do usuário',
    example: 'e1d7af5d-9d23-4876-b020-5066f5f66e5a',
  })
  day: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Id do usuário',
    example: 'e1d7af5d-9d23-4876-b020-5066f5f66e5a',
  })
  month: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Id do usuário',
    example: 'e1d7af5d-9d23-4876-b020-5066f5f66e5a',
  })
  year: number;
}
