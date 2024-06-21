import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAnswerDto } from './dto/create-answer.dto';
import { EditAnswerDto } from './dto/edit-answer.dto';

@Injectable()
export class AnswerService {
  constructor(private prisma: PrismaService) {}

  async createAnswer(createAnswerDto: CreateAnswerDto) {
    const { answer_id, decision, anser_user_id, select_option_id, issue_id } =
      createAnswerDto;
    return await this.prisma.answer.create({
      data: {
        AnswerID: answer_id,
        Decision: decision,
        IssueID: issue_id,
        AnserUserID: anser_user_id,
        selectOptionID: select_option_id,
      },
    });
  }

  async getAnswerAll() {
    return this.prisma.answer.findMany();
  }

  async getAnswerId(answerId: any) {
    try {
      const answerIdNumber = parseInt(answerId);
      if (isNaN(answerIdNumber)) {
        throw new Error('Invalid answerId');
      }
      const answer = await this.prisma.answer.findFirst({
        where: {
          AnswerID: answerIdNumber,
        },
      });
      console.log(answer);
      return answer;
    } catch (error) {
      console.log(error);
      throw new NotFoundException('Answer not found');
    }
  }

  async editAnswer(answerId: any, dto: EditAnswerDto) {
    const answerIdNumber = parseInt(answerId);
    const answer = await this.prisma.answer.update({
      where: {
        AnswerID: answerIdNumber,
      },
      data: {
        Decision: dto.decision,
      },
    });
    if (!answer) {
      throw new NotFoundException('Answer not found');
    }
    return answer;
  }

  async deleteAnswer(answerId: any) {
    const answerIdNumber = parseInt(answerId);
    const answer = await this.prisma.answer.delete({
      where: {
        AnswerID: answerIdNumber,
      },
    });

    if (!answer) {
      throw new NotFoundException('Answer not found');
    }
  }
}
