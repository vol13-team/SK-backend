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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
