import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Timestamp,
} from 'typeorm';
import { Level } from './level.entity';
import { Student } from './student.entity';

@Entity()
export class ClassConfig {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  workDays: string;

  @Column('time')
  startTime: Date;

  @Column('time')
  endTime: Date;

  @Column()
  classDuration: number;

  @OneToMany(() => Level, (level) => level.classConfig)
  levels: Level[];

  @OneToMany(() => Student, (student) => student.classConfig)
  students: Student[];
}
