import express from "express";
import BookController from "../controllers/book.js";

const router = express.Router();
// midleware for parse json
const jsonParser = express.json();

// GET all
router.get("/", BookController.getBooks);

// GET on id
router.get("/:id", BookController.getBookById);

// POST
router.post("/", jsonParser, BookController.createBook);

// PUT
router.put("/:id", jsonParser, BookController.updateBook);

// DELETE
router.delete("/:id", BookController.deleteBook);

export default router;
