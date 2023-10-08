import { PartialType } from '@nestjs/mapped-types';
import { CreateDeparmentDto } from './create-deparment.dto';
import { IsOptional, IsString } from 'class-validator';

export class UpdateDeparmentDto extends PartialType(CreateDeparmentDto) {

    @IsString()
    nombre:string;
}
