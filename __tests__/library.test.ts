// tests/library.test.ts

import { Library } from '../src/models/libraryModel';
import { Book } from '../src/models/bookModels';

describe('Library', () => {
  let library: Library;

  beforeEach(() => {
    library = new Library();
  });

  test('should add a book successfully', () => {
    const book = new Book('1234567890', 'Test Book', 'Author Name', 2021);
    library.addBook(book);

    expect(library.getAvailableBooks()).toContain(book);
  });

  test('should throw an error when adding a duplicate book', () => {
    const book = new Book('1234567890', 'Test Book', 'Author Name', 2021);
    library.addBook(book);

    expect(() => library.addBook(book)).toThrow('Book with this ISBN already exists');
  });

  test('should borrow a book successfully', () => {
    const book = new Book('1234567890', 'Test Book', 'Author Name', 2021);
    library.addBook(book);

    library.borrowBook(book.isbn);

    expect(library.getAvailableBooks()).not.toContain(book);
  });

  test('should throw an error when borrowing an unavailable book', () => {
    const book = new Book('1234567890', 'Test Book', 'Author Name', 2021);
    library.addBook(book);
    library.borrowBook(book.isbn);

    expect(() => library.borrowBook(book.isbn)).toThrow('Book is not available');
  });

  test('should return a borrowed book successfully', () => {
    const book = new Book('1234567890', 'Test Book', 'Author Name', 2021);
    library.addBook(book);
    library.borrowBook(book.isbn);

    library.returnBook(book.isbn);

    expect(library.getAvailableBooks()).toContain(book);
  });

  test('should throw an error when returning a book that was not borrowed', () => {
    const book = new Book('1234567890', 'Test Book', 'Author Name', 2021);
    library.addBook(book);

    expect(() => library.returnBook(book.isbn)).toThrow('Book was not borrowed');
  });

  test('should throw an error when trying to borrow a non-existent book', () => {
    expect(() => library.borrowBook('non-existent-isbn')).toThrow('Book not found');
  });

  test('should throw an error when trying to return a non-existent book', () => {
    expect(() => library.returnBook('non-existent-isbn')).toThrow('Book not found');
  });
});
