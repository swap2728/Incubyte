// src/routes/bookRoutes.ts   (MY routers file)

import { Router } from 'express';
let { addBook, borrowBook, returnBook, viewAvailableBooks } = require('../controllers/bookController');
const router = Router();
router.post('/books', addBook);
router.put('/books/borrow/:isbn', borrowBook);
router.put('/books/return/:isbn', returnBook);
router.get('/books', viewAvailableBooks);

export default router;
