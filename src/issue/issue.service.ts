import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateIssueDto } from './dto/create-issue.dto';
import { EditIssueDto } from './dto/edit-issue.dto';

@Injectable()
export class IssueService {
  constructor(private prisma: PrismaService) {}

  async createIssue(createIssueDto: CreateIssueDto) {
    const {
      issue_id,
      issue_name,
      issue_detail,
      visibility,
      post_user_id,
      explanation,
      organisation_id,
      option_id,
    } = createIssueDto;
    return await this.prisma.issue.create({
      data: {
        IssueID: issue_id,
        IssueName: issue_name,
        IssueDetail: issue_detail,
        Visibility: visibility,
        PostUserID: post_user_id,
        Explanation: explanation,
        OrganisationID: organisation_id,
        OptionID: option_id,
      },
    });
  }

  async getIssueAll() {
    return this.prisma.issue.findMany();
  }

  async getIssueId(issueId: any) {
    try {
      const issueIdNumber = parseInt(issueId);
      if (isNaN(issueIdNumber)) {
        throw new Error('Invalid issueId');
      }
      const issue = await this.prisma.issue.findFirst({
        where: {
          IssueID: issueIdNumber,
        },
      });
      console.log(issue);
      return issue;
    } catch (error) {
      console.log(error);
      throw new NotFoundException('Issue not found');
    }
  }

  async editIssue(issueId: any, dto: EditIssueDto) {
    const issueIdNumber = parseInt(issueId);
    const issue = await this.prisma.issue.update({
      where: {
        IssueID: issueIdNumber,
      },
      data: {
        ...dto,
      },
    });
    if (!issue) {
      throw new NotFoundException('Issue not found');
    }
    return issue;
  }

  async deleteIssue(issueId: any) {
    const issueIdNumber = parseInt(issueId);
    const issue = await this.prisma.issue.delete({
      where: {
        IssueID: issueIdNumber,
      },
    });

    if (!issue) {
      throw new NotFoundException('Issue not found');
    }
  }
}
