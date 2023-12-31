import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { DeparmentService } from './deparment.service';
import { CreateDeparmentDto } from './dto/create-deparment.dto';
import { UpdateDeparmentDto } from './dto/update-deparment.dto';
import { ObjectId } from 'typeorm';
import { JwtAuthGuard } from 'src/auth/guard/auth.guard';


@UseGuards(JwtAuthGuard)
@Controller('deparment')
export class DeparmentController {
  constructor(private readonly deparmentService: DeparmentService) {}

  @Post()
  create(@Body() createDeparmentDto: CreateDeparmentDto) {
    return this.deparmentService.create(createDeparmentDto);
  }

  @Get()
  findAll() {
    return this.deparmentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: ObjectId) {
    return this.deparmentService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: ObjectId, @Body() updateDeparmentDto: UpdateDeparmentDto) {
    return this.deparmentService.update(id, updateDeparmentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: ObjectId) {
    return this.deparmentService.remove(id);
  }
}
