import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Inject,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BookService } from './book.service';
import { BookDto } from './dtos/book.dto';
import { Book } from './entities/book.entity';

@Controller('api/v1/book')
export class BookController {
  @Inject(BookService)
  private readonly bookService: BookService;

  @Get()
  public listAll(): Promise<Book[]> {
    return this.bookService.listAll();
  }

  @Get(':id')
  public async getBook(@Param('id') id: number): Promise<Book> {
    const book = await this.bookService.getBook(id);
    if (!book) {
      throw new HttpException('Book not found', HttpStatus.NOT_FOUND);
    }
    return book;
  }

  @Post()
  public createBook(@Body() body: BookDto): Promise<Book> {
    return this.bookService.createBook(body);
  }

  @Put(':id')
  public async updateBook(
    @Body() body: BookDto,
    @Param('id') id: number,
  ): Promise<Book> {
    const book = await this.bookService.getBook(id);
    if (!book) {
      throw new HttpException('Book not found', HttpStatus.NOT_FOUND);
    }
    return this.bookService.updateBook(book, body);
  }

  @Delete(':id')
  public async deleteBook(@Param('id') id: number) {
    const book = await this.bookService.getBook(id);
    if (!book) {
      throw new HttpException('Book not found', HttpStatus.NOT_FOUND);
    }
    return this.bookService.deletBook(book.id);
  }
}
