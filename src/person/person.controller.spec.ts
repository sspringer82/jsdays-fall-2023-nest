import { Test, TestingModule } from '@nestjs/testing';
import { PersonController } from './person.controller';
import { describe, beforeEach, it, expect } from '@jest/globals';
import { PersonService } from './person.service';

describe('PersonController', () => {
  let controller: PersonController;
  let service: PersonService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PersonController],
      providers: [
        {
          provide: PersonService,
          useClass: class {
            getAll() {}
            getOne() {}
            create() {}
          },
        },
      ],
    }).compile();

    controller = module.get<PersonController>(PersonController);
    service = module.get<PersonService>(PersonService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return an array of persons', async () => {
    jest
      .spyOn(service, 'getAll')
      .mockResolvedValue([{ id: 1, firstName: 'Klaus', lastName: 'Müller' }]);

    const result = await controller.getAllPersons();

    expect(service.getAll).toHaveBeenCalled();
    expect(service.getAll).toHaveBeenCalledTimes(1);
    expect(service.getAll).toHaveBeenCalledWith();

    expect(result).toEqual([{ id: 1, firstName: 'Klaus', lastName: 'Müller' }]);
  });
});
