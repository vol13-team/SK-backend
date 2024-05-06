import { PrismaService } from 'src/prisma/prisma.service';
import { EditUserDto } from './dto/edit-user.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async editUser(userId: string, dto: EditUserDto) {
    const user = await this.prisma.user.update({
      where: {
        user_id: userId,
      },
      data: {
        ...dto,
      },
    });

    return user;
  }
}
