import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Pets {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', nullable: false })
  namePet: string;

  @Column({type: 'int', nullable: false})
  agePet: number;

  @Column({type: 'float', nullable: false})
  weightPet: number;

  @Column({ type: 'varchar', nullable: false })
  animalPet: string;

  @Column({ type: 'varchar', nullable: false })
  breedPet: string;

  @Column({ type: 'varchar', nullable: false })
  nameProperty: string;

  @Column({ type: 'varchar', nullable: false })
  telephoneProperty: string;

  @Column({ type: 'varchar', nullable: true })
  emailProperty: string;

  @Column({ type: 'varchar', nullable: false })
  addressProperty: string;

  @Column({ type: 'varchar', nullable: false })
  districtProperty: string;

  @Column({ type: 'varchar', nullable: false })
  cityProperty: string;

  @Column({ type: 'varchar', nullable: false })
  ufProperty: string;

  @CreateDateColumn({ name: 'createdAt' })
  created_at: Date;

  @UpdateDateColumn({ name: 'updatedAt' })
  update_at: Date;
}
