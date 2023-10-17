import { ApiProperty, OmitType } from '@nestjs/swagger';
import { IsNotEmpty, Length } from 'class-validator';
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
  @Length(3, 10)
  firstName: string;

  @ApiProperty({
    description: 'the last name of the person',
    example: 'Schmitt',
  })
  @Column()
  @IsNotEmpty()
  lastName: string;
}

export class CreatePerson extends OmitType(Person, ['id'] as const) {}
