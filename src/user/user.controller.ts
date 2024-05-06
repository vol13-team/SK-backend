import { Body, Controller, Get, Patch, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '@prisma/client';
import { EditUserDto } from './dto/edit-user.dto';
import { GetUser } from 'src/auth/decorator';
import { JwtGuard } from 'src/auth/guard';

@UseGuards(JwtGuard)
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}
  @Get('me')
  getMe(@GetUser() user: User) {
    return user;
  }

  @Patch()
  edituser(@GetUser('id') userId: string, @Body() dto: EditUserDto) {
    return this.userService.editUser(userId, dto);
  }
}
