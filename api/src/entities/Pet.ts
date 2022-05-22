import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";

@Entity('pets')
export class Pet {
  @PrimaryColumn()
  id: string

  @Column()
  select_cat: boolean

  @Column()
  select_dog: boolean

  @Column()
  pet_name: string

  @Column()
  pet_age: number

  @Column()
  pet_breed: string

  @Column()
  owner_name: string

  @Column()
  owner_phone: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}