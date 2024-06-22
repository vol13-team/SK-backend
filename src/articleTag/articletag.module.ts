import { Module } from '@nestjs/common';
import { ArticleTagService } from './articletag.service';
import { ArticleTagController } from './articletag.controller';

@Module({
  controllers: [ArticleTagController],
  providers: [ArticleTagService],
})
export class ArticleTagModule {}
