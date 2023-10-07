import { CatService } from './cat.service';
import { CatController } from './cat.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatEntity } from './cat.entity';
import { Breed } from 'src/breeds/entities/breed.entity';
import { BreedsModule } from 'src/breeds/breeds.module';

@Module({
    imports: [TypeOrmModule.forFeature([CatEntity]),BreedsModule],
    controllers: [ CatController],
    providers: [CatService],
})
export class CatModule { }
