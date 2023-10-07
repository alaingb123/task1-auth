import { Delete } from "@nestjs/common";
import { IsOptional } from "class-validator";
import { Breed } from "src/breeds/entities/breed.entity";
import { Column, DeleteDateColumn, Entity,ManyToOne,PrimaryGeneratedColumn } from "typeorm";


@Entity('cat')
export class CatEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre:string;

    @Column()
    apellido:string;

    @Column()
    edad:number; 

    @DeleteDateColumn()
    deleteAt:Date;

    @ManyToOne(() => Breed, (breed) => breed.id, { eager:true})
    breed:Breed;

   

}

