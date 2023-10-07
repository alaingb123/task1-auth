/*
https://docs.nestjs.com/providers#services
*/

import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CatEntity } from './cat.entity';
import { Repository } from 'typeorm';
import { CatDto } from './dto/cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { Breed } from 'src/breeds/entities/breed.entity';

@Injectable()
export class CatService { 
    constructor(
        @InjectRepository(CatEntity)
        private catRepository: Repository <CatEntity>,
        @InjectRepository(Breed)
  private readonly breedRepository: Repository<Breed>,
    ){}

    async AddCat(cat:CatDto){
        const breed = await this.breedRepository.findOneBy({name: cat.breed})
        if (!breed){
            throw new BadRequestException('Breed not found');
        }

        return await this.catRepository.save({...cat,breed})
       // return await this.catRepository.save(cat);
       return "add";
    }

    getAllCat():Promise<CatEntity[]>{
        return this.catRepository.find();
    }

    getCatByID(id:number):Promise<CatEntity>{
        return this.catRepository.findOneBy({id});
    }
    async eliminarCat(id:number){
        return await this.catRepository.softDelete(id);
    }

    async editarCat(id: number,cat:CatEntity):Promise<CatEntity> {
        let toUpdate=await this.catRepository.findOneBy({id});
        let update =Object.assign(toUpdate,cat);
        const cat_actualizado = await this.catRepository.save(toUpdate);
        return cat_actualizado;
    }

   async updateCat(id:number,updateCatDto:UpdateCatDto){
       // return await this.catRepository.update(id,updateCatDto)
       return "update cat";
    }

    
}
