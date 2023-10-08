import { IsString } from "class-validator";

export class CreateDeparmentDto {

    @IsString()
    name:string;
}
