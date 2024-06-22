import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { IssueTagService } from './issuetag.service';
import { CreateIssueTagDto } from './dto/create-issuetag.dto';
import { EditIssueTagDto } from './dto/edit-issuetag.dto';

@Controller('issuetag')
export class IssueTagController {
  constructor(private issueTagService: IssueTagService) {}

  @Get()
  getIssueTagAll() {
    return this.issueTagService.getIssueTagAll();
  }

  @Get(':id')
  getIssueTagId(@Param('id') issueTagId: number) {
    return this.issueTagService.getIssueTagId(issueTagId);
  }

  @Post()
  createIssueTag(@Body() createIssueTagDto: CreateIssueTagDto) {
    return this.issueTagService.createIssueTag(createIssueTagDto);
  }

  @Patch(':id')
  editIssueTag(
    @Param('id') issueTagId: number,
    @Body() editIssueTagDto: EditIssueTagDto,
  ) {
    return this.issueTagService.editIssueTag(issueTagId, editIssueTagDto);
  }

  @Delete(':id')
  deleteIssueTag(@Param('id') issueTagId: number) {
    return this.issueTagService.deleteIssueTag(issueTagId);
  }
}
