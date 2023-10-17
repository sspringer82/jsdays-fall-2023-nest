import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { Book, CreateBook } from './Book';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  getAllBooks(): Book[] {
    return this.booksService.getAll();
  }

  @Get(':id')
  getBookById(@Param('id') id: string): Book {
    console.log(id);
    console.log(typeof id);
    return this.booksService.getOne(parseInt(id, 10));
  }

  @Post()
  createBook(@Body() newBook: CreateBook): Book {
    return this.booksService.create(newBook);
  }

  @Put(':id')
  updateBook(@Param('id') id: string, @Body() updatedBook: Book): Book {
    return this.booksService.update(parseInt(id, 10), updatedBook);
  }

  @Delete(':id')
  @HttpCode(204)
  deleteBook(@Param('id') id: string): void {
    this.booksService.delete(parseInt(id, 10));
  }
}
