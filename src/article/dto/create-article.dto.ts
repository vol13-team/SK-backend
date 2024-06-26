import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateArticleDto {
  @IsNotEmpty()
  @IsNumber()
  article_id: number;

  @IsNotEmpty()
  @IsString()
  article_title: string;

  @IsNotEmpty()
  @IsString()
  article_link: string;

  @IsNotEmpty()
  @IsString()
  article_user_name: string;

  @IsNotEmpty()
  @IsNumber()
  organisation_id: number;
}
