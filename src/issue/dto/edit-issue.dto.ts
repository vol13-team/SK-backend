import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class EditIssueDto {
  @IsString()
  @IsOptional()
  IssueName: string;

  @IsString()
  @IsOptional()
  IssueDetail: string;

  @IsBoolean()
  @IsOptional()
  Visibility: boolean;

  @IsString()
  @IsOptional()
  Explanation: string;
}
