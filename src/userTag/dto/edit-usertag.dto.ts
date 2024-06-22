import { IsNumber, IsOptional } from 'class-validator';

export class EditUserTagDto {
  @IsNumber()
  @IsOptional()
  user_id: number;

  @IsNumber()
  @IsOptional()
  tag_id: number;
}
