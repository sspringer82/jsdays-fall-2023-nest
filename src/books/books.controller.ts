import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  HttpCode,
  UseGuards,
  ParseIntPipe,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { Book, CreateBook } from './Book';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { NumberParameter } from '../shared/validators/number-parameter';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('books')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@ApiTags('Books') // Fügen Sie Tags hinzu, um Ihre API-Endpunkte zu organisieren
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  @ApiOperation({ summary: 'Get all Books' })
  @ApiResponse({
    status: 200,
    description: 'Get a list of all books',
    type: Book, // Verweisen Sie auf den Typ, den Sie verwenden
    isArray: true, // Setzen Sie "isArray" auf "true", da es sich um eine Liste handelt
  })
  async getAllBooks(): Promise<Book[]> {
    return this.booksService.getAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get one Book by Id' })
  @ApiParam({ name: 'id', type: 'number', description: 'Book ID' }) // Fügen Sie eine API-Parameterbeschreibung hinzu
  @ApiResponse({
    status: 200,
    description: 'Get one book by Id',
    type: Book, // Verweisen Sie auf den Typ, den Sie verwenden
  })
  async getBookById(@Param() { id }: NumberParameter): Promise<Book> {
    return this.booksService.getOne(parseInt(id, 10));
  }

  @Post()
  @ApiOperation({ summary: 'Create a new Book' })
  @ApiBody({ type: Book }) // Verweisen Sie auf den Typ, den Sie für die Anfragekörper verwenden
  @ApiResponse({
    status: 201, // Verwenden Sie den HTTP-Statuscode 201 für erfolgreiche Erstellungen
    description: 'Create a new book',
    type: Book, // Verweisen Sie auf den Typ, den Sie verwenden
  })
  async createBook(@Body() newBook: CreateBook): Promise<Book> {
    return this.booksService.create(newBook);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update an existing Book' })
  @ApiParam({ name: 'id', type: 'number', description: 'Book ID' }) // Fügen Sie eine API-Parameterbeschreibung hinzu
  @ApiBody({ type: Book }) // Verweisen Sie auf den Typ, den Sie für die Anfragekörper verwenden
  @ApiResponse({
    status: 200,
    description: 'Update an existing book',
    type: Book, // Verweisen Sie auf den Typ, den Sie verwenden
  })
  async updateBook(
    @Param() { id }: NumberParameter,
    @Body() updatedBook: Book,
  ): Promise<Book> {
    return this.booksService.update(parseInt(id, 10), updatedBook);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a Book by Id' })
  @ApiParam({ name: 'id', type: 'number', description: 'Book ID' }) // Fügen Sie eine API-Parameterbeschreibung hinzu
  @ApiResponse({
    status: 204, // Verwenden Sie den HTTP-Statuscode 204 für erfolgreiche Löschungen
    description: 'Delete a book by Id',
  })
  @HttpCode(204) // Setzen Sie den HTTP-Statuscode auf 204
  async deleteBook(@Param('id', ParseIntPipe) id: number): Promise<void> {
    await this.booksService.delete(id);
  }
}
