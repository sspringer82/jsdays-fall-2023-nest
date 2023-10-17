import { Injectable } from '@nestjs/common';
import { CreatePerson, Person } from './Person';

@Injectable()
export class PersonService {
  private persons: Person[] = [
    { id: 1, firstName: 'Juan', lastName: 'Gomez' },
    { id: 2, firstName: 'Maria', lastName: 'Rodriguez' },
    { id: 3, firstName: 'Luis', lastName: 'Perez' },
    { id: 4, firstName: 'Ana', lastName: 'Gonzalez' },
    { id: 5, firstName: 'Carlos', lastName: 'Lopez' },
    { id: 6, firstName: 'Elena', lastName: 'Sanchez' },
    { id: 7, firstName: 'Diego', lastName: 'Fernandez' },
    { id: 8, firstName: 'Isabel', lastName: 'Torres' },
    { id: 9, firstName: 'Javier', lastName: 'Ramirez' },
    { id: 10, firstName: 'Laura', lastName: 'Jimenez' },
  ];

  getAll(): Person[] {
    return this.persons;
  }

  getOne(id: number): Person {
    return this.persons.find((person) => person.id === id);
  }

  create(person: CreatePerson): Person {
    const id = this.persons.length + 1;
    const createdPerson = { ...person, id };
    this.persons.push(createdPerson);
    return createdPerson;
  }
}
