import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateOptionDto } from './dto/create-option.dto';
import { EditOptionDto } from './dto/edit-option.dto';
import { OptionService } from './option.service';

@Controller('option')
export class OptionController {
  constructor(private optionService: OptionService) {}

  @Get()
  getOptionAll() {
    return this.optionService.getOptionAll();
  }

  @Get(':id')
  getOptionId(@Param('id') optionId: number) {
    return this.optionService.getOptionId(optionId);
  }

  @Post()
  createOption(@Body() dto: CreateOptionDto) {
    return this.optionService.createOption(dto);
  }

  @Patch(':id')
  editOption(@Param('id') optionId: number, @Body() dto: EditOptionDto) {
    return this.optionService.editOption(optionId, dto);
  }

  @Delete(':id')
  deleteOption(@Param('id') optionId: number) {
    return this.optionService.deleteOption(optionId);
  }
}
