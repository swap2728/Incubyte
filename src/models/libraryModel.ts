// src/models/libraryModel.ts

import { Book } from './bookModels';

export class Library {
  private books: Book[] = [];

  addBook(book: Book): void {
    if (this.books.some(b => b.isbn === book.isbn)) {
      throw new Error('Book with this ISBN already exists');
    }
    this.books.push(book);
  }

  getAvailableBooks(): Book[] {
    return this.books.filter(book => book.available);
  }

  borrowBook(isbn: string): void {
    const book = this.books.find(b => b.isbn === isbn);
    if (!book) {
      throw new Error('Book not found');
    }
    if (!book.available) {
      throw new Error('Book is not available');
    }
    book.available = false;
  }
  returnBook(isbn: string): void {
    const book = this.books.find(b => b.isbn === isbn);
    if (!book) {
      throw new Error('Book not found');
    }
    if (book.available) {
      throw new Error('Book was not borrowed');
    }
    book.available = true;
  }
}
