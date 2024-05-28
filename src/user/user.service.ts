import { PrismaService } from 'src/prisma/prisma.service';
import { EditUserDto } from './dto/edit-user.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async createUser(dto: CreateUserDto) {
    return await this.prisma.user.create({
      data: {
        UserID: dto.user_id,
        UserName: dto.user_name,
        UserIcon: dto.user_icon,
      },
    });
  }

  async getUserById(userId: number) {
    try {
      const user = await this.prisma.user.findUnique({
        where: {
          UserID: userId,
        },
      });
      console.log(user);
      return user;
    } catch (error) {
      console.error(error);
      throw new NotFoundException('User not found');
    }
  }

  async editUser(userId: number, dto: EditUserDto) {
    const user = await this.prisma.user.update({
      where: {
        UserID: userId,
      },
      data: {
        ...dto,
      },
    });
    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  async deleteUser(userId: number) {
    const user = await this.prisma.user.delete({
      where: {
        UserID: userId,
      },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }
  }
}
