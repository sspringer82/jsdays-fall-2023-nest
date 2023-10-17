import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('books')
export class Book {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  title: string;
  @Column()
  author: string;
  @Column()
  price: number;
  @Column()
  pages: number;
  @Column()
  year: number;
}

export type CreateBook = Omit<Book, 'id'>;
