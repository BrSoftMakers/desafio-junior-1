import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Pet {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  owner: string;

  @Column()
  phone_number: string;

  @Column()
  species: string;

  @Column()
  race: string;

  @Column()
  birth: string;
}
