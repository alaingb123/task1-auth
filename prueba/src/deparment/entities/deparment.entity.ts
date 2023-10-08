import { Column, Entity, ObjectId, PrimaryGeneratedColumn } from "typeorm";

@Entity('deparment')
export class Deparment {

    @PrimaryGeneratedColumn()
    id:ObjectId;

    @Column()
    name:string;
}
