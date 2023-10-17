import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PersonService } from './person.service';

@Controller('person')
export class PersonController {
  constructor(private readonly personService: PersonService) {}

  @Get()
  getAllPersons() {
    return this.personService.getAll();
  }

  @Get(':id')
  getOnePerson(@Param('id') id: string) {
    return this.personService.getOne(parseInt(id, 10));
  }

  @Post()
  createPerson(@Body() newPerson: any) {
    return this.personService.create(newPerson);
  }
}
