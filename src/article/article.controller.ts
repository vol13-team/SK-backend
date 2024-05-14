import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ArticleService } from './article.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { EditArticleDto } from './dto/edit-article.dto';

@Controller('articles')
export class ArticleController {
  constructor(private articleService: ArticleService) {}

  @Get()
  getArticleAll() {
    return this.articleService.getArticleAll();
  }

  @Get()
  getArticleId(@Param('id') articleId: string) {
    return this.articleService.getArticleId(articleId);
  }

  @Post()
  createArticle(@Body() dto: CreateArticleDto) {
    return this.articleService.createArticle(dto);
  }

  @Patch(':id')
  editArticle(@Param('id') articleId: string, @Body() dto: EditArticleDto) {
    return this.articleService.editArticle(articleId, dto);
  }

  @Delete(':id')
  deleteArticle(@Param('id') articleId: string) {
    return this.articleService.deleteArticle(articleId);
  }
}
