import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ClassConfig } from './classConfig.entity';
import { Student } from './student.entity';

@Entity()
export class Level {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('text', { array: true })
  scheduleRestrictions: string[];

  @OneToMany(() => Student, (student) => student.level)
  students: Student[];

  @ManyToOne(() => ClassConfig, (classConfig) => classConfig.levels)
  classConfig: ClassConfig;
}
