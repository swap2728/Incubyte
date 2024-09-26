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

  // Additional test cases

  // Test if books remain available after being added
  test('should list all available books after adding multiple books', () => {
    const book1 = new Book('1111111111', 'Book One', 'Author One', 2020);
    const book2 = new Book('2222222222', 'Book Two', 'Author Two', 2022);
    library.addBook(book1);
    library.addBook(book2);

    expect(library.getAvailableBooks()).toEqual(expect.arrayContaining([book1, book2]));
  });

  // Test borrowing multiple books
  test('should borrow multiple books successfully', () => {
    const book1 = new Book('1111111111', 'Book One', 'Author One', 2020);
    const book2 = new Book('2222222222', 'Book Two', 'Author Two', 2022);
    library.addBook(book1);
    library.addBook(book2);

    library.borrowBook(book1.isbn);
    library.borrowBook(book2.isbn);

    expect(library.getAvailableBooks()).toEqual([]);
  });

  // Test returning a book that has been borrowed, while another is still borrowed
  test('should return one borrowed book while another remains borrowed', () => {
    const book1 = new Book('1111111111', 'Book One', 'Author One', 2020);
    const book2 = new Book('2222222222', 'Book Two', 'Author Two', 2022);
    library.addBook(book1);
    library.addBook(book2);

    library.borrowBook(book1.isbn);
    library.borrowBook(book2.isbn);

    library.returnBook(book1.isbn);

    expect(library.getAvailableBooks()).toContain(book1);
    expect(library.getAvailableBooks()).not.toContain(book2);
  });
});