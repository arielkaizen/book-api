import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BookDto } from './dtos/book.dto';
import { Book } from './entities/book.entity';

@Injectable()
export class BookService {
  @InjectRepository(Book)
  private readonly repository: Repository<Book>;

  public getBook(id: number): Promise<Book> {
    return this.repository.findOne({
      where: {
        id,
      },
    });
  }

  public listAll(): Promise<Book[]> {
    return this.repository.find();
  }

  public createBook(body: BookDto): Promise<Book> {
    const book: Book = new Book();

    book.name = body.name;
    book.category = body.category;

    return this.repository.save(book);
  }

  public async updateBook(book: Book, body: BookDto): Promise<Book> {
    if (body.hasOwnProperty('name')) {
      book.name = body.name;
    }
    if (body.hasOwnProperty('category')) {
      book.category = body.category;
    }

    return this.repository.save(book);
  }

  public async deletBook(id: number) {
    return await this.repository.delete({
      id,
    });
  }
}
