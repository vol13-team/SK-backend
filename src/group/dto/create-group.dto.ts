import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateGroupDto {
  @IsNotEmpty()
  @IsNumber()
  organisation_id: number;

  @IsNotEmpty()
  @IsString()
  organisation_name: string;

  @IsNotEmpty()
  @IsString()
  discruption: string;

  @IsNotEmpty()
  @IsString()
  authority: string;

  @IsNotEmpty()
  @IsNumber()
  user_id: number;

  @IsNotEmpty()
  @IsNumber()
  article_id: number[];
}
