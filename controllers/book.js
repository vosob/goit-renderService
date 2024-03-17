import BookModel from "../models/book.js";

async function getBooks(req, res, next) {
  try {
    const books = await BookModel.find();
    res.send(books);
  } catch (error) {
    next(error);
  }
}

async function getBookById(req, res, next) {
  const { id } = req.params;

  try {
    const book = await BookModel.findById(id);

    if (book === null) {
      return res.status(404).send("Book not found");
    }

    res.send(book);
  } catch (error) {
    next(error);
  }
}

async function createBook(req, res, next) {
  // Add joi before

  const book = {
    title: req.body.title,
    author: req.body.author,
    genre: req.body.genre,
    year: req.body.year,
  };

  try {
    const result = await BookModel.create(book);
    res.status(201).send(result);
  } catch (error) {
    next(error);
  }
}

async function updateBook(req, res, next) {
  // Add Joi before
  const { id } = req.params;

  const book = {
    title: req.body.title,
    author: req.body.author,
    genre: req.body.genre,
    year: req.body.year,
  };

  try {
    const result = await BookModel.findByIdAndUpdate(id, book, { new: true });

    if (result === null) {
      return res.status(404).send("Book not found:(");
    }

    res.send(result);
  } catch (error) {
    next(error);
  }
}

async function deleteBook(req, res, next) {
  const { id } = req.params;

  try {
    const result = await BookModel.findByIdAndDelete(id);

    if (result === null) {
      return res.status(404).send("Book not found:(");
    }

    res.send({ id });
  } catch (error) {
    next(error);
  }

  res.send("deleteBook");
}

export default { getBooks, getBookById, createBook, updateBook, deleteBook };
