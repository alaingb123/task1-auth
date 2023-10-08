import { IsString, IsNumber, IsOptional, IsObject } from 'class-validator';
import { Deparment } from 'src/deparment/entities/deparment.entity';

export class CreateCategoryDto{
    @IsString()
    name:string;

    @IsString()
    last_name:string;

    @IsObject()
    departamento_:Deparment; 
}