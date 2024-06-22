import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UserTagService } from './usertag.service';
import { CreateUserTagDto } from './dto/create-usertag.dto';
import { EditUserTagDto } from './dto/edit-usertag.dto';

@Controller('usertag')
export class UserTagController {
  constructor(private userTagService: UserTagService) {}

  @Get()
  getUserTagAll() {
    return this.userTagService.getUserTagAll();
  }

  @Get(':id')
  getUserTagId(@Param('id') userTagId: number) {
    return this.userTagService.getUserTagId(userTagId);
  }

  @Post()
  createUserTag(@Body() dto: CreateUserTagDto) {
    return this.userTagService.createUserTag(dto);
  }

  @Patch(':id')
  editUserTag(@Param('id') userTagId: number, @Body() dto: EditUserTagDto) {
    return this.userTagService.editUserTag(userTagId, dto);
  }

  @Delete(':id')
  deleteUserTag(@Param('id') userTagId: number) {
    return this.userTagService.deleteUserTag(userTagId);
  }
}
