import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateGroupDto } from './dto/create-group.dto';
import { EditGroupDto } from './dto/edit-group.dto';
import { GroupService } from './group.service';

// url(group)
@Controller('group')
export class GroupController {
  constructor(private groupService: GroupService) {}

  @Get()
  getGroupAll() {
    return this.groupService.getGroupAll();
  }

  @Get(':id')
  getGroupId(@Param('id') groupId: number) {
    return this.groupService.getGroupId(groupId);
  }

  @Post()
  createGroup(@Body() dto: CreateGroupDto) {
    return this.groupService.createGroup(dto);
  }

  @Patch(':id')
  editGroup(@Param('id') groupId: number, @Body() dto: EditGroupDto) {
    return this.groupService.editGroup(groupId, dto);
  }

  @Delete(':id')
  deleteGroup(@Param('id') groupId: number) {
    this.groupService.deleteGroup(groupId);
  }
}
