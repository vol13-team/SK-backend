import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGroupDto } from './dto/create-group.dto';
import { EditGroupDto } from './dto/edit-group.dto';

@Injectable()
export class GroupService {
  constructor(private prisma: PrismaService) {}

  async createGroup(createOrganisationDto: CreateGroupDto) {
    const {
      organisation_id,
      organisation_name,
      discruption,
      authority,
      user_id,
      article_id,
    } = createOrganisationDto;
    return await this.prisma.organisation.create({
      data: {
        OrganisationID: organisation_id,
        OrganisationName: organisation_name,
        discruption: discruption,
        authority: authority,
        UserID: user_id,
        ArticleID: article_id,
      },
    });
  }

  async getGroupAll() {
    return this.prisma.organisation.findMany();
  }

  async getGroupId(groupId: any) {
    try {
      const groupIdNumber = parseInt(groupId);
      if (isNaN(groupIdNumber)) {
        throw new Error('Invalid groupId');
      }
      const group = await this.prisma.organisation.findFirst({
        where: {
          OrganisationID: groupIdNumber,
        },
      });
      console.log(group);
      return group;
    } catch (error) {
      console.error(error);
      throw new NotFoundException('Group not found');
    }
  }

  async editGroup(groupId: any, dto: EditGroupDto) {
    const groupIdNumber = parseInt(groupId);
    const group = await this.prisma.organisation.update({
      where: {
        OrganisationID: groupIdNumber,
      },
      data: {
        ...dto,
      },
    });
    if (!group) {
      throw new NotFoundException('Group not found');
    }
    return group;
  }

  async deleteGroup(groupId: any) {
    const groupIdNumber = parseInt(groupId);
    const group = await this.prisma.organisation.delete({
      where: {
        OrganisationID: groupIdNumber,
      },
    });

    if (!group) {
      throw new NotFoundException('Group not found');
    }
  }
}
