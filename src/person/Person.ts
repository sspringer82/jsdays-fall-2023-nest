import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('persons')
export class Person {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    description: 'the first name of the person',
    example: 'Klaus',
  })
  @Column()
  firstName: string;

  @ApiProperty({
    description: 'the last name of the person',
    example: 'Schmitt',
  })
  @Column()
  lastName: string;
}

export type CreatePerson = Omit<Person, 'id'>;
