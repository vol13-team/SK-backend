import { Module } from '@nestjs/common';
import { IssueTagService } from './issuetag.service';
import { IssueTagController } from './issuetag.controller';

@Module({
  controllers: [IssueTagController],
  providers: [IssueTagService],
})
export class IssueTagModule {}
