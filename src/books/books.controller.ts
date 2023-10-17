import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  HttpCode,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { Book, CreateBook } from './Book';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  getAllBooks(): Promise<Book[]> {
    return this.booksService.getAll();
  }

  @Get(':id')
  getBookById(@Param('id') id: string): Promise<Book> {
    return this.booksService.getOne(parseInt(id, 10));
  }

  @Post()
  createBook(@Body() newBook: CreateBook): Promise<Book> {
    return this.booksService.create(newBook);
  }

  @Put(':id')
  updateBook(
    @Param('id') id: string,
    @Body() updatedBook: Book,
  ): Promise<Book> {
    return this.booksService.update(parseInt(id, 10), updatedBook);
  }

  @Delete(':id')
  @HttpCode(204)
  async deleteBook(@Param('id') id: string): Promise<void> {
    await this.booksService.delete(parseInt(id, 10));
  }
}
