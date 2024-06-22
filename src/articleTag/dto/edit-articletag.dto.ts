import { IsNumber, IsOptional } from 'class-validator';

export class EditArticleTagDto {
  @IsOptional()
  @IsNumber()
  article_id: number;

  @IsOptional()
  @IsNumber()
  tag_id: number;
}
