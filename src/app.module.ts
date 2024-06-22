import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { ArticleModule } from './article/article.module';
import { GroupModule } from './group/group.module';
import { IssueModule } from './issue/issue.module';
import { OptionModule } from './option/option.module';
import { AnswerModule } from './answer/answer.module';
import { TagModule } from './tag/tag.module';
import { UserTagModule } from './userTag/usertag.module';

@Module({
  imports: [
    AuthModule,
    PrismaModule,
    UserModule,
    ArticleModule,
    GroupModule,
    IssueModule,
    OptionModule,
    AnswerModule,
    TagModule,
    UserTagModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
