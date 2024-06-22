import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { AnswerService } from './answer.service';
import { CreateAnswerDto } from './dto/create-answer.dto';
import { EditAnswerDto } from './dto/edit-answer.dto';

// url(answer)
@Controller('answer')
export class AnswerController {
  constructor(private answerService: AnswerService) {}

  @Get()
  getAnswerAll() {
    return this.answerService.getAnswerAll();
  }

  @Get(':id')
  getAnswerId(@Param('id') answerId: number) {
    return this.answerService.getAnswerId(answerId);
  }

  @Post()
  createAnswer(@Body() dto: CreateAnswerDto) {
    return this.answerService.createAnswer(dto);
  }

  @Patch(':id')
  editAnswer(@Param('id') answerId: number, @Body() dto: EditAnswerDto) {
    return this.answerService.editAnswer(answerId, dto);
  }

  @Delete(':id')
  deleteAnswer(@Param('id') answerId: number) {
    return this.answerService.deleteAnswer(answerId);
  }
}
