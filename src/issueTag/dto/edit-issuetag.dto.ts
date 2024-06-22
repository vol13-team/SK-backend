import { IsNumber, IsOptional } from 'class-validator';

export class EditIssueTagDto {
  @IsOptional()
  @IsNumber()
  issue_id: number;

  @IsOptional()
  @IsNumber()
  tag_id: number;
}
