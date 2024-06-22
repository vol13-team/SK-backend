import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateArticleTagDto {
  @IsNotEmpty()
  @IsNumber()
  article_tag_id: number;

  @IsNotEmpty()
  @IsNumber()
  article_id: number;

  @IsNotEmpty()
  @IsNumber()
  tag_id: number;
}
