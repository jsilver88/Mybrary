const express = require('express');
const router = express.Router();
const Author = require('../models/author');
const Book = require('../models/book');

// All books route
router.get('/', async (req, res) => {
  res.send('All books');
});

// new book Route
router.get('/new', async (req, res) => {
  try {
    const authors = await Author.find({});
    const book = new Book();
    res.render('books/new', {
      authors: authors,
      book: book,
    });
  } catch (error) {
    res.redirect('/books');
  }
});

// Create book route
router.post('/', async (req, res) => {
  res.send('create book');
});

module.exports = router;
