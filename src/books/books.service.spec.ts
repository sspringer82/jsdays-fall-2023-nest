import { Test, TestingModule } from '@nestjs/testing';
import { BooksService } from './books.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Book } from './Book';
import { NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';

describe('BooksService', () => {
  let service: BooksService;
  let repo: Repository<Book>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BooksService,
        {
          provide: getRepositoryToken(Book),
          useClass: class {
            findOneBy() {}
          },
        },
      ],
    }).compile();

    service = module.get<BooksService>(BooksService);
    repo = module.get<Repository<Book>>(getRepositoryToken(Book));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should fail for getOne', async () => {
    jest.spyOn(repo, 'findOneBy').mockResolvedValue(null);
    await expect(service.getOne(42)).rejects.toThrow(NotFoundException);
  });
});
