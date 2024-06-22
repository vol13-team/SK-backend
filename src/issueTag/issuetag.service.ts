import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateIssueTagDto } from './dto/create-issuetag.dto';
import { EditIssueTagDto } from './dto/edit-issuetag.dto';

@Injectable()
export class IssueTagService {
  constructor(private prisma: PrismaService) {}

  async createIssueTag(createIssueTagDto: CreateIssueTagDto) {
    const { issue_tag_id, issue_id, tag_id } = createIssueTagDto;
    return await this.prisma.issueTag.create({
      data: {
        IssueTagID: issue_tag_id,
        IssueID: issue_id,
        TagID: tag_id,
      },
    });
  }

  async getIssueTagAll() {
    return this.prisma.issueTag.findMany();
  }

  async getIssueTagId(issueTagId: any) {
    try {
      const issueTagIdNumber = parseInt(issueTagId);
      if (isNaN(issueTagIdNumber)) {
        throw new Error('Invalid issueTagId');
      }
      const issueTag = await this.prisma.issueTag.findFirst({
        where: {
          IssueTagID: issueTagIdNumber,
        },
      });
      console.log(issueTag);
      return issueTag;
    } catch (error) {
      console.log(error);
      throw new NotFoundException('IssueTag not found');
    }
  }

  async editIssueTag(issueTagId: any, dto: EditIssueTagDto) {
    const issueTagIdNumber = parseInt(issueTagId);
    const issueTag = await this.prisma.issueTag.update({
      where: {
        IssueTagID: issueTagIdNumber,
      },
      data: {
        IssueID: dto.issue_id,
        TagID: dto.tag_id,
      },
    });
    if (!issueTag) {
      throw new NotFoundException('IssueTag not found');
    }
    return issueTag;
  }

  async deleteIssueTag(issueTagId: any) {
    const issueTagIdNumber = parseInt(issueTagId);
    const issueTag = await this.prisma.issueTag.delete({
      where: {
        IssueTagID: issueTagIdNumber,
      },
    });

    if (!issueTag) {
      throw new NotFoundException('IssueTag not found');
    }
  }
}
