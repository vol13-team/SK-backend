import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TagService } from './tag.service';
import { CreateTagDto } from './dto/create-tag.dto';
import { EditTagDto } from './dto/edit-tag.dto';

// url(tag)
@Controller('tag')
export class TagController {
  constructor(private tagService: TagService) {}

  @Get()
  getTagAll() {
    return this.tagService.getTagAll();
  }

  @Get(':id')
  getTagId(@Param('id') tagId: number) {
    return this.tagService.getTagId(tagId);
  }

  @Post()
  createTag(@Body() dto: CreateTagDto) {
    return this.tagService.createTag(dto);
  }

  @Patch(':id')
  editTag(@Param('id') tagId: number, @Body() dto: EditTagDto) {
    return this.tagService.editTag(tagId, dto);
  }

  @Delete(':id')
  deleteTag(@Param('id') tagId: number) {
    return this.tagService.deleteTag(tagId);
  }
}
