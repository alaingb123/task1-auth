import {PartialType} from '@nestjs/mapped-types';
import { CatDto } from './cat.dto';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateCatDto {
    @IsString()
    @IsOptional()
    nombre?:string;

    @IsOptional()
    @IsString()
    apellido?:string;

    @IsString()
    @IsOptional()
    breed?:string;
    
    @IsOptional()
    @IsNumber()
    edad?:number;
}