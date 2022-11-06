import { IsString, IsNotEmpty, IsEmail } from 'class-validator';

export class AuthDto {
  @IsEmail()
  @IsString()
  email: string;

  @IsNotEmpty()
  password: string;
}
