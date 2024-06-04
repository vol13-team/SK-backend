import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { EditArticleDto } from './dto/edit-article.dto';

@Injectable()
export class ArticleService {
  constructor(private prisma: PrismaService) {}

  async createArticle(dto: CreateArticleDto) {
    const {
      article_id,
      article_title,
      article_link,
      article_user_name,
      organisation_id,
    } = dto;
    return await this.prisma.article.create({
      data: {
        ArticleTitle: article_title,
        ArticleLink: article_link,
        ArticleUserName: article_user_name,
        ArticleID: article_id,
        OrganisationID: organisation_id,
      },
    });
  }

  async getArticleAll() {
    return this.prisma.article.findMany();
  }

  async getArticleId(articleId: any) {
    try {
      const article_id = parseInt(articleId);
      const article = await this.prisma.article.findFirst({
        where: {
          ArticleID: article_id,
        },
      });
      console.log(article);
      return article;
    } catch (error) {
      console.error(error);
      throw new NotFoundException('Article not found');
    }
  }

  async editArticle(articleId: any, dto: EditArticleDto) {
    const article = await this.prisma.article.update({
      where: {
        ArticleID: parseInt(articleId),
      },
      data: {
        ArticleTitle: dto.ArticleTitle,
        ArticleLink: dto.ArticleLink,
        OrganisationID: dto.OrganisationID,
      },
    });
    if (!article) {
      throw new NotFoundException('Article not found');
    }

    return article;
  }

  async deleteArticle(articleId: any) {
    const article = await this.prisma.article.delete({
      where: {
        ArticleID: parseInt(articleId),
      },
    });

    if (!article) {
      throw new NotFoundException('Article not found');
    }
  }
}
