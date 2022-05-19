import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { randomUUID } from 'crypto';

@Entity('animals')
export class Dog {
  @PrimaryColumn()
  id: string

  @Column()
  dog_name: string

  @Column()
  dog_age: number

  @Column()
  dog_breed: string

  @Column()
  owner_name: string

  @Column()
  owner_phone: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  constructor() {
    if(!this.id) {
      this.id = randomUUID()
    }

    this.created_at = new Date()
    this.updated_at = new Date()
  }
}