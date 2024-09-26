// src/controllers/bookController.ts

import { Request, Response } from 'express';
import { Library } from '../models/libraryModel';
import { Book } from '../models/bookModels';

const library = new Library();

// Add a new book
export const addBook = (req: Request, res: Response) => {
  const { isbn, title, author, publicationYear } = req.body;

  try {
    const newBook = new Book(isbn, title, author, publicationYear);
    library.addBook(newBook);
    res.status(201).send('Book added successfully');
  } catch (error) {
    res.status(400).send("error.message");
  }
};

// Borrow a book
export const borrowBook = (req: Request, res: Response) => {
  const { isbn } = req.params;

  try {
    library.borrowBook(isbn);
    res.status(200).send('Book borrowed successfully');
  } catch (error) {
    res.status(400).send("error.message");
  }
};

// Return a book
export const returnBook = (req: Request, res: Response) => {
  const { isbn } = req.params;

  try {
    library.returnBook(isbn);
    res.status(200).send('Book returned successfully');
  } catch (error) {
    res.status(400).send("error.message");
  }
};

// View all available books
export const viewAvailableBooks = (req: Request, res: Response) => {
  const availableBooks = library.getAvailableBooks();
  res.status(200).json(availableBooks);
};
