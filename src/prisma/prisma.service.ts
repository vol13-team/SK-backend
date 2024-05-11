import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor(config: ConfigService) {
    super({
      datasources: {
        db: {
          url: config.get('DATABASE_URL'),
        },
      },
    });
  }

  cleandb() {
    return this.$transaction([
      this.user.deleteMany(),
      this.issue.deleteMany(),
      this.article.deleteMany(),
      this.answer.deleteMany(),
      this.qiitaArticle.deleteMany(),
      this.qiitaTag.deleteMany(),
    ]);
  }
}
