import { Injectable } from '@nestjs/common';
import { CreatePerson, Person } from './Person';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PersonService {
  constructor(
    @InjectRepository(Person) private personRepository: Repository<Person>,
  ) {}

  getAll(): Promise<Person[]> {
    return this.personRepository.find();
  }

  getOne(id: number): Promise<Person> {
    return this.personRepository.findOneBy({ id });
  }

  create(person: CreatePerson): Promise<Person> {
    return this.personRepository.save(person);
  }
}
