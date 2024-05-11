import { Optional } from '@nestjs/common';
import { IsString } from 'class-validator';

export class EditArticleDto {
  @IsString()
  @Optional()
  article_title: string;

  @IsString()
  @Optional()
  article_link: string;

  @IsString()
  @Optional()
  article_user_name: string;
}
