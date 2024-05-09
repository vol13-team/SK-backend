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
        user_name: dto.user_name,
        email: dto.email,
      },
    });
  }

  async getUserById(userId: string) {
    try {
      const user = await this.prisma.user.findUnique({
        where: {
          user_id: userId,
        },
      });
      console.log(user);
      return user;
    } catch (error) {
      console.error(error);
      throw new NotFoundException('User not found');
    }
  }

  async editUser(userId: string, dto: EditUserDto) {
    const user = await this.prisma.user.update({
      where: {
        user_id: userId,
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

  async deleteUser(userId: string) {
    const user = await this.prisma.user.delete({
      where: {
        user_id: userId,
      },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }
  }
}
