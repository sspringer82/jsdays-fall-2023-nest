import { Injectable, NotFoundException } from '@nestjs/common';
import { Book, CreateBook } from './Book';

@Injectable()
export class BooksService {
  private books: Book[] = [];

  getAll(): Book[] {
    return this.books;
  }

  getOne(id: number): Book {
    const book = this.findBookById(id);
    if (!book) {
      throw new NotFoundException(`Book with id ${id} not found`);
    }
    return book;
  }

  create(newBook: CreateBook): Book {
    const id = this.generateId();
    const book = { id, ...newBook };
    this.books.push(book);
    return book;
  }

  update(id: number, updatedBook: Book): Book {
    const bookIndex = this.findIndexById(id);
    if (bookIndex === -1) {
      throw new NotFoundException(`Book with id ${id} not found`);
    }
    this.books[bookIndex] = { ...this.books[bookIndex], ...updatedBook };
    return this.books[bookIndex];
  }

  delete(id: number): void {
    const bookIndex = this.findIndexById(id);
    if (bookIndex === -1) {
      throw new NotFoundException(`Book with id ${id} not found`);
    }
    this.books.splice(bookIndex, 1);
  }

  private generateId(): number {
    const highestId = this.books.reduce(
      (maxId, book) => (book.id > maxId ? book.id : maxId),
      0,
    );
    return highestId + 1;
  }

  private findBookById(id: number): Book | undefined {
    return this.books.find((book) => book.id === id);
  }

  private findIndexById(id: number): number {
    return this.books.findIndex((book) => book.id === id);
  }
}
