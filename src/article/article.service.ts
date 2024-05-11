import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { EditArticleDto } from './dto/edit-article.dto';

@Injectable()
export class ArticleService {
  constructor(private prisma: PrismaService) {}

  async createArticle(dto: CreateArticleDto) {
    return await this.prisma.article.create({
      data: {
        article_title: dto.article_title,
        article_link: dto.article_link,
        article_user_name: dto.article_user_name,
      },
    });
  }

  async getArticleAll() {
    return this.prisma.article.findMany();
  }

  async getArticleId(articleId: string) {
    try {
      const article = await this.prisma.article.findFirst({
        where: {
          article_id: articleId,
        },
      });
      console.log(article);
      return article;
    } catch (error) {
      console.error(error);
      throw new NotFoundException('Article not found');
    }
  }

  async editArticle(articleId: string, dto: EditArticleDto) {
    const article = await this.prisma.article.update({
      where: {
        article_id: articleId,
      },
      data: {
        ...dto,
      },
    });
    if (!article) {
      throw new NotFoundException('Article not found');
    }

    return article;
  }

  async deleteArticle(articleId: string) {
    const article = await this.prisma.article.delete({
      where: {
        article_id: articleId,
      },
    });

    if (!article) {
      throw new NotFoundException('Article not found');
    }
  }
}
