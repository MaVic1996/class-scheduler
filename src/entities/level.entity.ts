import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
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
}
