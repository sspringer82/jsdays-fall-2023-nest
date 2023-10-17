import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonModule } from './person/person.module';
import { BooksModule } from './books/books.module';

@Module({
  imports: [PersonModule, BooksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
