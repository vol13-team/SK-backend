import { IsNotEmpty, IsString } from 'class-validator';

export class CreateArticleDto {
  @IsNotEmpty()
  @IsString()
  article_id: string;

  @IsNotEmpty()
  @IsString()
  article_title: string;

  @IsNotEmpty()
  @IsString()
  article_link: string;

  @IsNotEmpty()
  @IsString()
  article_user_name: string;
}
