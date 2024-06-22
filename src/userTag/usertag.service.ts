import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserTagDto } from './dto/create-usertag.dto';
import { EditUserTagDto } from './dto/edit-usertag.dto';

@Injectable()
export class UserTagService {
  constructor(private prisma: PrismaService) {}

  async createUserTag(createUserTagDto: CreateUserTagDto) {
    const { user_tag_id, user_id, tag_id } = createUserTagDto;
    return await this.prisma.userTag.create({
      data: {
        UserTagID: user_tag_id,
        UserID: user_id,
        TagID: tag_id,
      },
    });
  }

  async getUserTagAll() {
    return this.prisma.userTag.findMany();
  }

  async getUserTagId(userTagId: any) {
    try {
      const userTagIdNumber = parseInt(userTagId);
      if (isNaN(userTagIdNumber)) {
        throw new Error('Invalid userTagId');
      }
      const userTag = await this.prisma.userTag.findFirst({
        where: {
          UserTagID: userTagIdNumber,
        },
      });
      console.log(userTag);
      return userTag;
    } catch (error) {
      console.log(error);
      throw new NotFoundException('UserTag not found');
    }
  }

  async editUserTag(userTagId: any, dto: EditUserTagDto) {
    const userTagIdNumber = parseInt(userTagId);
    const userTag = await this.prisma.userTag.update({
      where: {
        UserTagID: userTagIdNumber,
      },
      data: {
        UserID: dto.user_id,
        TagID: dto.tag_id,
      },
    });
    if (!userTag) {
      throw new NotFoundException('UserTag not found');
    }
    return userTag;
  }

  async deleteUserTag(userTagId: any) {
    const userTagIdNumber = parseInt(userTagId);
    const userTag = await this.prisma.userTag.delete({
      where: {
        UserTagID: userTagIdNumber,
      },
    });

    if (!userTag) {
      throw new NotFoundException('UserTag not found');
    }
  }
}
