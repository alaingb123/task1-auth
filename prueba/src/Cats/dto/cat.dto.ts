import { IsString, IsNumber, IsOptional } from 'class-validator';

export class CatDto{
    @IsString()
    nombre:string;

    @IsString()
    apellido:string;

    @IsString()
    @IsOptional()
    breed?:string;
    
    @IsNumber()
    edad:number;
}