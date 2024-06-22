import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ArticleTagService } from './articletag.service';
import { CreateArticleTagDto } from './dto/create-articletag.dto';
import { EditArticleTagDto } from './dto/edit-articletag.dto';

@Controller('articletag')
export class ArticleTagController {
  constructor(private articleTagService: ArticleTagService) {}

  @Get()
  getArticleTagAll() {
    return this.articleTagService.getArticleTagAll();
  }

  @Get(':id')
  getArticleTagId(@Param('id') articleTagId: number) {
    return this.articleTagService.getArticleTagId(articleTagId);
  }

  @Post()
  createArticleTag(@Body() createArticleTag: CreateArticleTagDto) {
    return this.articleTagService.createArticleTag(createArticleTag);
  }

  @Patch(':id')
  editArticleTag(
    @Param('id') articleTagId: number,
    @Body() editArticleTag: EditArticleTagDto,
  ) {
    return this.articleTagService.editArticleTag(articleTagId, editArticleTag);
  }

  @Delete(':id')
  deleteArticleTag(@Param('id') articleTagId: number) {
    return this.articleTagService.deleteArticleTag(articleTagId);
  }
}
