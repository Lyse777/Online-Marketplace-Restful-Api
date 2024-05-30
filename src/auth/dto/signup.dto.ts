import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class SignupDto {
  @ApiProperty({
    example: 'Iradukunda Pacifique',
    description: 'The full names of the user',
  })
  @IsString()
  @IsNotEmpty()
  names: string;

  @ApiProperty({
    example: 'user@example.com',
    description: 'The email of the user',
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    example: 'password123',
    description: 'The password of the user',
  })
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty({
    example: 'BUYER',
    description: 'The role of the user',
  })
  @IsNotEmpty()
  role;
}
