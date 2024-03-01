import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Parameter, TagDTO } from './tag.dto';
import { TagService } from './tag.service';

@Controller('tag')
export class TagController {
  constructor(private readonly tagService: TagService) {}

  @Post()
  async create(@Body() data: TagDTO) {
    return this.tagService.create(data);
  }

  @Get()
  async FindAll() {
    return this.tagService.findAll();
  }

  @Get(':id')
  async findUnique(@Param() index: Parameter) {
    const tagId = parseInt(index.id);

    return this.tagService.findUnique(tagId);
  }

  @Put(':id')
  async update(@Param() index: Parameter, @Body() data: TagDTO) {
    const tagId = parseInt(index.id);

    return this.tagService.update(tagId, data);
  }

  @Delete(':id')
  async delete(@Param() index: Parameter) {
    const tagId = parseInt(index.id);

    return this.tagService.delete(tagId);
  }
}
