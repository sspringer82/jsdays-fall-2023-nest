import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('persons')
export class Person {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  firstName: string;
  @Column()
  lastName: string;
}

export type CreatePerson = Omit<Person, 'id'>;
