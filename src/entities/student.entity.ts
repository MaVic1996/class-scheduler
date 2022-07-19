import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ClassConfig } from './classConfig.entity';
import { Level } from './level.entity';

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  completeName: string;

  @Column('text', { array: true })
  scheduleRestrictions: string[];

  @ManyToOne(() => Level, (level) => level.students)
  level: Level;

  @ManyToOne(() => ClassConfig, (classConfig) => classConfig.students)
  classConfig: ClassConfig;
}
