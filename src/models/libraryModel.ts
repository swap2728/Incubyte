// src/models/libraryModel.ts

// Correct ES6 import for TypeScript
import { Book } from './bookModels';

export class Library {
  // The books array is an array of Book instances
  private books: Book[] = [];

  // Method to add a book to the library
  addBook(book: Book): void {
    if (this.books.some(b => b.isbn === book.isbn)) {
      throw new Error('Book with this ISBN already exists');
    }
    this.books.push(book);
  }

  // Method to get all available books (those that are not borrowed)
  getAvailableBooks(): Book[] {
    return this.books.filter(book => book.available);
  }

  // Method to borrow a book by ISBN
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

  // Method to return a book by ISBN
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
