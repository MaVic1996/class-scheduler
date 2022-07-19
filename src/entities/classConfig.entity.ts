import { Column, Entity, PrimaryGeneratedColumn, Timestamp } from 'typeorm';

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
}
