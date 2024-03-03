import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { Parameter } from '../tag/tag.dto';
import { Filter, TaskDTO } from './task.dto';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  async create(@Body() data: TaskDTO) {
    return this.taskService.create(data);
  }

  @Get()
  async findAll(@Query() query: Filter) {
    const filter = query.isCompleted === 'true' ? true : false;

    return this.taskService.findAll(filter);
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

  @Delete()
  async deleteAll() {
    return this.taskService.deleteAll();
  }
}
