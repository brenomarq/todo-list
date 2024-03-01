import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Parameter } from '../tag/tag.dto';
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

  @Get(':id')
  async findUnique(@Param() index: Parameter) {
    const taskId = parseInt(index.id);

    return this.taskService.findUnique(taskId);
  }

  @Put(':id')
  async update(@Param() index: Parameter, @Body() data: TaskDTO) {
    const taskId = parseInt(index.id);

    return this.taskService.update(taskId, data);
  }

  @Delete(':id')
  async delete(@Param() index: Parameter) {
    const taskId = parseInt(index.id);

    return this.taskService.delete(taskId);
  }
}
