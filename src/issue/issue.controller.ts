import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateIssueDto } from './dto/create-issue.dto';
import { EditIssueDto } from './dto/edit-issue.dto';
import { IssueService } from './issue.service';

@Controller('articles/issue')
export class IssueController {
  constructor(private issueService: IssueService) {}

  @Get()
  getIssueAll() {
    return this.issueService.getIssueAll();
  }

  @Get(':id')
  getIssueId(@Param('id') issueId: number) {
    return this.issueService.getIssueId(issueId);
  }

  @Post()
  createIssue(@Body() dto: CreateIssueDto) {
    return this.issueService.createIssue(dto);
  }

  @Patch(':id')
  editIssue(@Param('id') issueId: number, @Body() dto: EditIssueDto) {
    return this.issueService.editIssue(issueId, dto);
  }

  @Delete(':id')
  deleteIssue(@Param('id') issueId: number) {
    this.issueService.deleteIssue(issueId);
  }
}
