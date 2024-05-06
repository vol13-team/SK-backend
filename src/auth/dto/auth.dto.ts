import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class AuthDto {
  @IsNotEmpty()
  @IsString()
  user_id: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  user_name: string;
}
