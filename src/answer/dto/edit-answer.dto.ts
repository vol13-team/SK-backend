import { IsBoolean, IsOptional } from 'class-validator';

export class EditAnswerDto {
  @IsBoolean()
  @IsOptional()
  decision: boolean;
}
