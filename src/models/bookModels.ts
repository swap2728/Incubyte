// src/models/bookModel.ts

export class Book {
    isbn: string;
    title: string;
    author: string;
    publicationYear: number;
    available: boolean;
  
    constructor(isbn: string, title: string, author: string, publicationYear: number) {
      this.isbn = isbn;
      this.title = title;
      this.author = author;
      this.publicationYear = publicationYear;
      this.available = true; // Books are available by default when added
    }
  }
  