import {
  IsBoolean,
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class CreateIssueDto {
  @IsNotEmpty()
  @IsNumber()
  issue_id: number;

  @IsNotEmpty()
  @IsString()
  issue_name: string;

  @IsNotEmpty()
  @IsString()
  issue_detail: string;

  @IsNotEmpty()
  @IsBoolean()
  visibility: boolean;

  @IsNotEmpty()
  @IsNumber()
  post_user_id: number;

  @IsNotEmpty()
  @IsString()
  explanation: string;

  @IsNotEmpty()
  @IsDate()
  created_at: Date;

  @IsNotEmpty()
  @IsDate()
  update_at: Date;

  @IsNotEmpty()
  @IsNumber()
  organisation_id: number;

  @IsNotEmpty()
  @IsNumber()
  option_id: number;
}
