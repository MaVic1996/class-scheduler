import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { EnglishLevel } from './types/englishLevel.enum';

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  completeName: string;

  @Column({
    type: 'enum',
    enum: ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'],
  })
  level: EnglishLevel;

  @Column()
  scheduleIncompatibilities: string;
}
