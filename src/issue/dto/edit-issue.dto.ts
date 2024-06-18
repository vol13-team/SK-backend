import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class EditIssueDto {
  @IsString()
  @IsOptional()
  issue_name: string;

  @IsString()
  @IsOptional()
  issue_detail: string;

  @IsBoolean()
  @IsOptional()
  visibility: boolean;

  @IsString()
  @IsOptional()
  explanation: string;
}
