import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateTagDto {
  @IsNotEmpty()
  @IsNumber()
  tag_id: number;

  @IsNotEmpty()
  @IsString()
  tag_name: string;
}
