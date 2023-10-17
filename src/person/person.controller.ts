import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PersonService } from './person.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreatePerson, Person } from './Person';
import { NumberParameter } from 'src/shared/validators/number-parameter';

@Controller('person')
export class PersonController {
  constructor(private readonly personService: PersonService) {}

  @Get()
  @ApiOperation({ summary: 'Get all persons' })
  @ApiResponse({
    status: 200,
    description: 'Get all persons',
    type: Person,
    isArray: true,
  })
  getAllPersons() {
    return this.personService.getAll();
  }

  @Get(':id')
  getOnePerson(@Param() { id }: NumberParameter) {
    return this.personService.getOne(parseInt(id, 10));
  }

  @Post()
  createPerson(@Body() newPerson: CreatePerson) {
    return this.personService.create(newPerson);
  }
}
