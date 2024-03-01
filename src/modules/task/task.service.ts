import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaServise';
import { TaskDTO } from './task.dto';

@Injectable()
export class TaskService {
  constructor(private prisma: PrismaService) {}

  async create(data: TaskDTO) {
    try {
      const task = await this.prisma.task.create({
        data,
      });

      return task;
    } catch (err: any) {
      return { error: 'Task could not be created' };
    }
  }

  async findAll() {
    try {
      const tasks = await this.prisma.task.findMany();

      return tasks;
    } catch (err: any) {
      return { error: 'Could not return the task.' };
    }
  }

  async findUnique(id: number) {
    try {
      const task = await this.prisma.task.findUnique({
        where: {
          id,
        },
      });

      if (!task) {
        return { error: 'The specified task does not exist.' };
      }

      return task;
    } catch (err: any) {
      return { error: 'Could not find the specified task.' };
    }
  }

  async update(id: number, data: TaskDTO) {
    try {
      const updatedTask = await this.prisma.task.update({
        data,
        where: {
          id,
        },
      });

      return updatedTask;
    } catch (err) {
      return { error: 'Could not update the specified task.' };
    }
  }

  async delete(id: number) {
    try {
      const task = await this.prisma.task.delete({
        where: {
          id,
        },
      });

      return task;
    } catch (err: any) {
      return { error: 'Could not delete the specified task' };
    }
  }
}
