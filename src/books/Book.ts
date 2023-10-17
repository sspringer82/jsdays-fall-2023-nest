import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger'; // Importieren Sie den Swagger-Dekorator ApiProperty

@Entity('books')
export class Book {
  @PrimaryGeneratedColumn()
  @ApiProperty({
    example: 1,
    description: 'The unique identifier for the book',
  }) // Beschreiben Sie die ID
  id: number;

  @Column()
  @ApiProperty({
    example: 'Sample Title',
    description: 'The title of the book',
  }) // Beschreiben Sie den Titel
  title: string;

  @Column()
  @ApiProperty({ example: 'John Doe', description: 'The author of the book' }) // Beschreiben Sie den Autor
  author: string;

  @Column()
  @ApiProperty({ example: 29.99, description: 'The price of the book' }) // Beschreiben Sie den Preis
  price: number;

  @Column()
  @ApiProperty({ example: 350, description: 'The number of pages in the book' }) // Beschreiben Sie die Seitenzahl
  pages: number;

  @Column()
  @ApiProperty({
    example: 2020,
    description: 'The publication year of the book',
  }) // Beschreiben Sie das Erscheinungsjahr
  year: number;
}

export type CreateBook = Omit<Book, 'id'>;
