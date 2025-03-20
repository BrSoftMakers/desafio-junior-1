import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('pets') 
export class Pet {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string; 

  @Column()
  type: string; 

  @Column()
  breed: string; 

  @Column()
  ownerName: string; 

  @Column()
  ownerPhone: string;

  @Column({ type: 'date' })
  birthDate: Date; 

  @Column()
  age: number;
}
