import { Module } from '@nestjs/common';
import { TagModule } from './modules/tag/tag.module';
import { TaskModule } from './modules/task/task.module';

@Module({
  imports: [TaskModule, TagModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
