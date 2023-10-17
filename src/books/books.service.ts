import { Injectable, NotFoundException } from '@nestjs/common';
import { Book, CreateBook } from './Book';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book) private bookRepository: Repository<Book>,
  ) {}

  getAll(): Promise<Book[]> {
    return this.bookRepository.find();
  }

  async getOne(id: number): Promise<Book> {
    const book = this.bookRepository.findOneBy({ id });
    if (!book) {
      throw new NotFoundException(`Book with id ${id} not found`);
    }
    return book;
  }

  create(newBook: CreateBook): Promise<Book> {
    return this.bookRepository.save(newBook);
  }

  async update(id: number, updatedBook: Book): Promise<Book> {
    await this.getOne(id);
    return this.bookRepository.save(updatedBook);
  }

  async delete(id: number): Promise<void> {
    const book = await this.getOne(id);

    await this.bookRepository.remove(book);
  }
}
