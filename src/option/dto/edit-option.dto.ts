import { IsNumber, IsOptional, IsString } from 'class-validator';

export class EditOptionDto {
  @IsString()
  @IsOptional()
  Option1: string;

  @IsString()
  @IsOptional()
  Option2: string;

  @IsString()
  @IsOptional()
  Option3: string;

  @IsString()
  @IsOptional()
  Option4: string;

  @IsNumber()
  @IsOptional()
  CorrectOption: number;
}
