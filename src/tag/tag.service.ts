import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTagDto } from './dto/create-tag.dto';
import { EditTagDto } from './dto/edit-tag.dto';

@Injectable()
export class TagService {
  constructor(private prisma: PrismaService) {}

  async createTag(createTagDto: CreateTagDto) {
    const { tag_id, tag_name } = createTagDto;
    return await this.prisma.tag.create({
      data: {
        TagID: tag_id,
        tagName: tag_name,
      },
    });
  }

  async getTagAll() {
    return this.prisma.tag.findMany();
  }

  async getTagId(tagId: any) {
    try {
      const tagIdNumber = parseInt(tagId);
      if (isNaN(tagIdNumber)) {
        throw new Error('Invalid tagId');
      }
      const tag = await this.prisma.tag.findFirst({
        where: {
          TagID: tagIdNumber,
        },
      });
      console.log(tag);
      return tag;
    } catch (error) {
      console.log(error);
      throw new NotFoundException('Tag not found');
    }
  }

  async editTag(tagId: any, dto: EditTagDto) {
    const tagIdNumber = parseInt(tagId);
    const tag = await this.prisma.tag.update({
      where: {
        TagID: tagIdNumber,
      },
      data: {
        ...dto,
      },
    });
    if (!tag) {
      throw new NotFoundException('Tag not found');
    }
    return tag;
  }

  async deleteTag(tagId: any) {
    const tagIdNumber = parseInt(tagId);
    const tag = await this.prisma.tag.delete({
      where: {
        TagID: tagIdNumber,
      },
    });

    if (!tag) {
      throw new NotFoundException('Tag not found');
    }
  }
}
