import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateUserTagDto {
  @IsNotEmpty()
  @IsNumber()
  user_tag_id: number;

  @IsNotEmpty()
  @IsNumber()
  user_id: number;

  @IsNotEmpty()
  @IsNumber()
  tag_id: number;
}
