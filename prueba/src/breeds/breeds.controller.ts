import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { BreedsService } from './breeds.service';
import { CreateBreedDto } from './dto/create-breed.dto';
import { UpdateBreedDto } from './dto/update-breed.dto';
import { Breed } from './entities/breed.entity';
import { JwtAuthGuard } from 'src/auth/guard/auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('breeds')
export class BreedsController {
  constructor(private readonly breedsService: BreedsService) {}

  @Post()
  create(@Body() createBreedDto: CreateBreedDto) {
    return this.breedsService.create(createBreedDto);
  }

  @Get()
  async getBreeds():Promise<Breed[]> {
    return await this.breedsService.findAll();
  }


  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.breedsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateBreedDto: UpdateBreedDto) {
    return this.breedsService.update(id, updateBreedDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.breedsService.remove(id);
  }
}
