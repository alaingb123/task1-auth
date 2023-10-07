import { CatEntity } from "src/Cats/cat.entity";
import { Column, Entity, OneToMany } from "typeorm";


@Entity()
export class Breed {

    @Column({primary:true,generated:true})
    id:number;

    @Column({length:500})
    name:string;

    @OneToMany(() => CatEntity, (cat)=> cat.breed)
    cats: CatEntity[];

}
