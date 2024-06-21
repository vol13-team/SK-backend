import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateOptionDto } from './dto/create-option.dto';
import { EditOptionDto } from './dto/edit-option.dto';

@Injectable()
export class OptionService {
  constructor(private prisma: PrismaService) {}

  async createOption(createOptionDto: CreateOptionDto) {
    const {
      option_id,
      option_1,
      option_2,
      option_3,
      option_4,
      correctoption,
      issue_id,
    } = createOptionDto;
    return await this.prisma.option.create({
      data: {
        OptionID: option_id,
        Option1: option_1,
        Option2: option_2,
        Option3: option_3,
        Option4: option_4,
        CorrectOption: correctoption,
        IssueID: issue_id,
      },
    });
  }

  async getOptionAll() {
    return this.prisma.option.findMany();
  }

  async getOptionId(optionId: any) {
    try {
      const optionIdNumber = parseInt(optionId);
      if (isNaN(optionIdNumber)) {
        throw new Error('Invalid optionId');
      }
      const option = await this.prisma.option.findFirst({
        where: {
          OptionID: optionIdNumber,
        },
      });
      console.log(option);
      return option;
    } catch (error) {
      console.log(error);
      throw new NotFoundException('Option not found');
    }
  }

  async editOption(optionId: any, dto: EditOptionDto) {
    const optionIdNumber = parseInt(optionId);
    const option = await this.prisma.option.update({
      where: {
        OptionID: optionIdNumber,
      },
      data: {
        ...dto,
      },
    });
    if (!option) {
      throw new NotFoundException('Option not found');
    }
    return option;
  }

  async deleteOption(optionId: any) {
    const optionIdNumber = parseInt(optionId);
    const option = await this.prisma.option.delete({
      where: {
        OptionID: optionIdNumber,
      },
    });

    if (!option) {
      throw new NotFoundException('Option not found');
    }
  }
}
