import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { DeparmentModule } from 'src/deparment/deparment.module';
import { DeparmentService } from 'src/deparment/deparment.service';

@Module({
  imports:[
    DeparmentModule,
    TypeOrmModule.forFeature([Category])],
  controllers: [CategoriesController],
  providers: [CategoriesService],
})
export class CategoriesModule {}
