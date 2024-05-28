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

  @Get(':id')
  getArticleId(@Param('id') articleId: number) {
    return this.articleService.getArticleId(articleId);
  }

  @Post()
  createArticle(@Body() dto: CreateArticleDto) {
    return this.articleService.createArticle(dto);
  }

  @Patch(':id')
  editArticle(@Param('id') articleId: number, @Body() dto: EditArticleDto) {
    return this.articleService.editArticle(articleId, dto);
  }

  @Delete(':id')
  deleteArticle(@Param('id') articleId: number) {
    return this.articleService.deleteArticle(articleId);
  }
}
