import { IsOptional, IsString } from 'class-validator';

export class EditGroupDto {
  @IsString()
  @IsOptional()
  organisation_name: string;

  @IsString()
  @IsOptional()
  discruption: string;

  @IsString()
  @IsOptional()
  authrity: string;
}
