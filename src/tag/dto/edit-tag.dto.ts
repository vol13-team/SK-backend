import { IsOptional, IsString } from 'class-validator';

export class EditTagDto {
  @IsOptional()
  @IsString()
  tag_name: string;
}
