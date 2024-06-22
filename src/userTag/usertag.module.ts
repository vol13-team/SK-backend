import { Module } from '@nestjs/common';
import { UserTagService } from './usertag.service';
import { UserTagController } from './usertag.controller';

@Module({
  controllers: [UserTagController],
  providers: [UserTagService],
})
export class UserTagModule {}
