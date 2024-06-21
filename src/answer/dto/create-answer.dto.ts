import { IsBoolean, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateAnswerDto {
  @IsNotEmpty()
  @IsNumber()
  answer_id: number;

  @IsNotEmpty()
  @IsBoolean()
  decision: boolean;

  @IsNotEmpty()
  @IsNumber()
  issue_id: number;

  @IsNotEmpty()
  @IsNumber()
  anser_user_id: number;

  @IsNotEmpty()
  @IsNumber()
  select_option_id: number;
}
