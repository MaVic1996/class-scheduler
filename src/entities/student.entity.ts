import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Level } from './level.entity';

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  completeName: string;

  @ManyToOne(() => Level, (level) => level.students)
  level: Level;

  @Column('text', { array: true })
  scheduleRestrictions: string[];
}
