
import { IsString, IsNumber, IsOptional } from 'class-validator';
export class CreateUserDto {

    @IsString()
    email:string;

    @IsString()
    password:string;

    @IsString()
    @IsOptional()
    name?:string;
}
