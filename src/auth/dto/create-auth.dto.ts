import { IsEmail, IsString } from '@nestjs/class-validator';

export class CreateAuthDto {
  @IsString()
  username: string;

  @IsEmail()
  email: string;

  password: string;

  @IsString()
  firstName: string;

  @IsString()
  lasName: string;

  birthday: Date;
}
