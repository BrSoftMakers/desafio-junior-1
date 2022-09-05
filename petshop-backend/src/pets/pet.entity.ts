import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
} from 'typeorm';
import { Client } from '../clients/client.entity';

@Entity()
export class Pet extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nickname: string;

  @Column()
  type: string;

  @Column()
  breed: string;

  @Column()
  birthday: Date;

  @ManyToOne((type) => Client, (client) => client.pets, { eager: false })
  client: Client;

  @Column()
  clientId: number;
}
