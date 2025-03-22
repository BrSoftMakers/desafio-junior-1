import { Entity, Column, PrimaryColumn } from 'typeorm'

@Entity()
export class Pet {
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    animal: string;

    @Column()
    race: string;

    @Column()
    owner: string;

    @Column()
    phone: number;

    @Column()
    birthdate: Date;
}