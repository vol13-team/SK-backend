import { Optional } from '@nestjs/common';
import { IsNumber, IsString } from 'class-validator';

export class EditArticleDto {
  @IsNumber()
  @Optional()
  ArticleID: number;

  @IsString()
  @Optional()
  ArticleTitle: string;

  @IsString()
  @Optional()
  ArticleLink: string;

  @IsString()
  @Optional()
  ArticleUserName: string;

  @IsNumber()
  @Optional()
  OrganisationID: number;
}
