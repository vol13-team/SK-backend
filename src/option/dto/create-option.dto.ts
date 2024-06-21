import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateOptionDto {
  @IsNotEmpty()
  @IsNumber()
  option_id: number;

  @IsNotEmpty()
  @IsString()
  option_1: string;

  @IsNotEmpty()
  @IsString()
  option_2: string;

  @IsNotEmpty()
  @IsString()
  option_3: string;

  @IsNotEmpty()
  @IsString()
  option_4: string;

  @IsNotEmpty()
  @IsNumber()
  correctoption: number;

  @IsNotEmpty()
  @IsNumber()
  issue_id: number;
}
