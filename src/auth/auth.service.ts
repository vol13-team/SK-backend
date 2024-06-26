import { ForbiddenException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService,
  ) {}

  async signup(dto: AuthDto) {
    try {
      const user = await this.prisma.user.create({
        data: {
          UserName: dto.userName,
          UserIcon: dto.userIcon,
        },
      });
      return this.signToken(user.UserID, user.UserName);
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Credentials taken');
        }
      }
      throw error;
    }
  }

  async signin(dto: AuthDto) {
    const user = await this.prisma.user.findFirst({
      where: {
        OR: [{ UserName: dto.userName }, { UserIcon: dto.userIcon }],
      },
    });

    if (!user) {
      throw new ForbiddenException('Credentials incorrect');
    }
    return this.signToken(user.UserID, user.UserName);
  }

  async signToken(
    userId: number,
    userName: string,
  ): Promise<{ access_token: string }> {
    const payload = {
      sub: userId,
      userName,
    };
    const secret = this.config.get('JWT_SECRET');
    const token = await this.jwt.signAsync(payload, {
      expiresIn: '20m',
      secret: secret,
    });
    return {
      access_token: token,
    };
  }
}
