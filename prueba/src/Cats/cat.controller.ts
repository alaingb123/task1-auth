/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Delete, Get, Param, Patch, Post, Put, UseGuards } from '@nestjs/common';
import { CatService } from './cat.service';
import { CatEntity } from './cat.entity';
import { CatDto } from './dto/cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { JwtAuthGuard } from 'src/auth/guard/auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('cat')
export class CatController { 
    constructor(private readonly catsService: CatService){}

    @Get()
    async getCats(): Promise<CatEntity[]>{
        return await this.catsService.getAllCat();
    }

    @Get(':id')
    async getOneCat(@Param('id') id:number){
        return await this.catsService.getCatByID(id);
    }

    @Post()
     addCat(@Body() cat:CatDto){
 return  this.catsService.AddCat(cat);
    }

    @Delete(':id')
        async deleteCat(@Param()params){
            return await this.catsService.eliminarCat(params.id);
        }

    @Patch(':id')
    async editCat(@Param('id')id:number,@Body() cat:UpdateCatDto){
        return await this.catsService.updateCat(id,cat);
    }
    

}
