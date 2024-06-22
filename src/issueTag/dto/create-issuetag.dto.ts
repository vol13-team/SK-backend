import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateIssueTagDto {
  @IsNotEmpty()
  @IsNumber()
  issue_tag_id: number;

  @IsNotEmpty()
  @IsNumber()
  issue_id: number;

  @IsNotEmpty()
  @IsNumber()
  tag_id: number;
}
