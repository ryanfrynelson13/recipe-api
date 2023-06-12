import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity({
    name: 'ingredients'
})
export default class Ingredients{

    @PrimaryGeneratedColumn()
    id: number

    @Column({unique: true})
    label: string

    @Column({type: 'int'})
    calories: number

    @Column({type: 'float'})
    protein: number

    @Column()
    imageUrl: string

}