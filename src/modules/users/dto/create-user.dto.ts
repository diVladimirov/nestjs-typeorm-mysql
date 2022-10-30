import { IsString, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsString()
  userName: string;

  @IsNotEmpty()
  password: string;
}
