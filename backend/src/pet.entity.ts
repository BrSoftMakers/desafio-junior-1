// pet.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Pet {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  dono: string;

  @Column()
  raca: string;

  @Column()
  telefone: string;

  @Column()
  dataNascimento: string;

  @Column({ type: 'enum', enum: ['Cachorro', 'Gato'] })
  animal: 'Cachorro' | 'Gato';
}
