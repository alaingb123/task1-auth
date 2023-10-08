import { Deparment } from "src/deparment/entities/deparment.entity";
import { Column, Entity, ManyToOne, ObjectId, PrimaryGeneratedColumn } from "typeorm";


@Entity('category')
export class Category {

    @PrimaryGeneratedColumn()
    id:ObjectId

    @Column()
    name:string;

    @Column()
    last_name:string;

    @ManyToOne(() => Deparment, (deparment) => deparment.id, { eager:true})
    departamento_:Deparment;
    
}
