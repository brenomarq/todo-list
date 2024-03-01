import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaServise';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';

@Module({
  controllers: [TaskController],
  providers: [TaskService, PrismaService],
})
export class TaskModule {}
