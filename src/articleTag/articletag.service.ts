import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateArticleTagDto } from './dto/create-articletag.dto';
import { EditArticleTagDto } from './dto/edit-articletag.dto';

@Injectable()
export class ArticleTagService {
  constructor(private prisma: PrismaService) {}

  async createArticleTag(createArticleTagDto: CreateArticleTagDto) {
    const { article_tag_id, article_id, tag_id } = createArticleTagDto;
    return await this.prisma.articleTag.create({
      data: {
        ArticleTagID: article_tag_id,
        ArticleID: article_id,
        TagID: tag_id,
      },
    });
  }

  async getArticleTagAll() {
    return await this.prisma.articleTag.findMany();
  }

  async getArticleTagId(articleTagId: any) {
    try {
      const articleTagIdNumber = parseInt(articleTagId);
      if (isNaN(articleTagIdNumber)) {
        throw new Error('Invalid articleTagId');
      }
      const articleTag = await this.prisma.articleTag.findFirst({
        where: {
          ArticleTagID: articleTagIdNumber,
        },
      });
      console.log(articleTag);
      return articleTag;
    } catch (error) {
      console.log(error);
      throw new NotFoundException('ArticleTag not found');
    }
  }

  async editArticleTag(articleTagId: any, dto: EditArticleTagDto) {
    const articleTagIdNumber = parseInt(articleTagId);
    const articleTag = await this.prisma.articleTag.update({
      where: {
        ArticleTagID: articleTagIdNumber,
      },
      data: {
        ArticleID: dto.article_id,
        TagID: dto.tag_id,
      },
    });
    if (!articleTag) {
      throw new NotFoundException('ArticleTag not found');
    }
    return articleTag;
  }

  async deleteArticleTag(articleTagId: any) {
    const articleTagIdNumber = parseInt(articleTagId);
    const articleTag = await this.prisma.articleTag.delete({
      where: {
        ArticleTagID: articleTagIdNumber,
      },
    });

    if (!articleTag) {
      throw new NotFoundException('ArticleTag not found');
    }
  }
}
