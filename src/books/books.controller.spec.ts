import { Test, TestingModule } from '@nestjs/testing';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { Book, CreateBook } from './Book';

describe('BooksController', () => {
  let controller: BooksController;
  let service: BooksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BooksController],
      providers: [
        {
          provide: BooksService,
          useClass: class {
            getOne() {}
            getAll() {}
            create() {}
            delete() {}
            update() {}
          },
        },
      ],
    }).compile();

    controller = module.get<BooksController>(BooksController);
    service = module.get<BooksService>(BooksService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  // Testen Sie den GetAllBooks-Endpunkt
  describe('getAllBooks', () => {
    it('should return an array of books', async () => {
      const books = [
        {
          id: 1,
          title: 'Sample Title',
          author: 'John Doe',
          price: 29.99,
          pages: 350,
          year: 2020,
        },
      ];
      jest.spyOn(service, 'getAll').mockResolvedValue(books);

      expect(await controller.getAllBooks()).toBe(books);
    });
  });

  // Testen Sie den GetBookById-Endpunkt
  describe('getBookById', () => {
    it('should return a book by ID', async () => {
      const bookId = 1;
      const book = {
        id: 1,
        title: 'Sample Title',
        author: 'John Doe',
        price: 29.99,
        pages: 350,
        year: 2020,
      };
      jest.spyOn(service, 'getOne').mockResolvedValue(book);

      expect(await controller.getBookById({ id: bookId + '' })).toBe(book);
    });
  });

  describe('createBook', () => {
    it('should create a new book', async () => {
      const newBook: CreateBook = {
        title: 'New Book Title',
        author: 'New Book Author',
        price: 19.99,
        pages: 250,
        year: 2021,
      };

      const createdBook: Book = {
        id: 1, // Mocked ID
        ...newBook,
      };

      jest.spyOn(service, 'create').mockResolvedValue(createdBook);

      const result = await controller.createBook(newBook);
      expect(result).toEqual(createdBook);
    });
  });

  describe('updateBook', () => {
    it('should update an existing book', async () => {
      const bookId = 1; // Mocked ID
      const updatedBookData: Book = {
        id: bookId,
        title: 'Updated Title',
        author: 'Updated Author',
        price: 24.99,
        pages: 300,
        year: 2022,
      };

      jest.spyOn(service, 'update').mockResolvedValue(updatedBookData);

      const result = await controller.updateBook(
        { id: bookId + '' },
        updatedBookData,
      );
      expect(result).toEqual(updatedBookData);
    });
  });

  describe('deleteBook', () => {
    it('should delete an existing book', async () => {
      const bookId = 1; // Mocked ID

      jest.spyOn(service, 'delete').mockResolvedValue(undefined);

      await expect(controller.deleteBook(bookId)).resolves.toEqual(undefined);
    });
  });
});
