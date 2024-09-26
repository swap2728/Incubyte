// src/routes/bookRoutes.ts

import { Router } from 'express';
let { addBook, borrowBook, returnBook, viewAvailableBooks } = require('../controllers/bookController');

const router = Router();

// Route to add a new book
router.post('/books', addBook);

// Route to borrow a book
router.put('/books/borrow/:isbn', borrowBook);

// Route to return a book
router.put('/books/return/:isbn', returnBook);

// Route to view all available books
router.get('/books', viewAvailableBooks);

export default router;
