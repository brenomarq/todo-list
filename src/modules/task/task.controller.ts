import { Body, Controller, Get, Post } from '@nestjs/common';
import { TaskDTO } from './task.dto';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  async create(@Body() data: TaskDTO) {
    return this.taskService.create(data);
  }

  @Get()
  async findAll() {
    return this.taskService.findAll();
  }
}
