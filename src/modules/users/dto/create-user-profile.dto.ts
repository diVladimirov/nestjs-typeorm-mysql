import { IsString, IsNotEmpty, IsInt } from 'class-validator';

export class CreateUserProfileDto {
  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;

  @IsInt()
  age: number;

  @IsString()
  dateOfBirthday: string;
}
