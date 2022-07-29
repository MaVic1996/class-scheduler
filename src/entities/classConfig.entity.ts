import {
  BeforeInsert,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Timestamp,
} from 'typeorm';
import { compareSync, genSalt, hash } from 'bcrypt';
import { Level } from './level.entity';
import { Student } from './student.entity';

@Entity()
export class ClassConfig {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'varchar', length: 70, nullable: true })
  password: string;

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

  @BeforeInsert()
  async hashPassword() {
    const salt = await genSalt();
    this.password = await hash(this.password, salt);
  }

  async validatePassword(password: string): Promise<boolean> {
    return await compareSync(password, this.password);
  }
}
