import { IsString, IsNotEmpty } from 'class-validator';

export class UpdateUserDto {
  @IsString()
  userName: string;

  @IsNotEmpty()
  password: string;
}
