export type Book = {
  id: number;
  title: string;
  author: string;
  price: number;
  pages: number;
  year: number;
};

export type CreateBook = Omit<Book, 'id'>;
