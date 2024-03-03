import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaServise';
import { TagDTO } from './tag.dto';

@Injectable()
export class TagService {
  constructor(private prisma: PrismaService) {}

  async create(data: TagDTO) {
    try {
      const newTag = await this.prisma.tag.create({
        data,
      });

      return newTag;
    } catch (err: any) {
      return { error: 'Could not create a new tag.' };
    }
  }

  async findUnique(id: number) {
    try {
      const tag = await this.prisma.tag.findUnique({
        include: {
          tasks: true,
        },
        where: {
          id,
        },
      });

      if (!tag) {
        return { error: 'Tag could not be found, because it does not exist.' };
      }

      return tag;
    } catch (err: any) {
      return { error: 'Could not find the specified task.' };
    }
  }

  async findAll() {
    try {
      const tasks = await this.prisma.tag.findMany();

      return tasks;
    } catch (err: any) {
      return { error: 'Could not return the tags.' };
    }
  }

  async update(id: number, data: TagDTO) {
    try {
      const updatedTag = await this.prisma.tag.update({
        data,
        where: {
          id,
        },
      });

      return updatedTag;
    } catch (err: any) {
      return { error: 'Could not update the specified tag.' };
    }
  }

  async delete(id: number) {
    try {
      const deletedTag = await this.prisma.tag.delete({
        where: {
          id,
        },
      });

      return deletedTag;
    } catch (err: any) {
      return { error: 'Could not delete the specified tag.' };
    }
  }
}
