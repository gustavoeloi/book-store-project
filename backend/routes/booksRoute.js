import express from "express";
import { Book } from "../models/bookModel.js";

const router = express.Router();

// Create a new book
router.post("/books", async (req, res) => {
  try {
    const newBook = new Book(req.body);
    const savedBook = await newBook.save();
    return res.status(201).json(savedBook);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
});

// Get All Books
router.get("/books", async (req, res) => {
  try {
    const books = await Book.find();
    return res.status(200).json({
      count: books.length,
      data: books,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
});

// Get a book by id
router.get("/books/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    res.status(200).json(book);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
});

// Update a book by id
router.put("/books/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByIdAndUpdate(id, req.body, { new: true });
    return res.status(200).json(book);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
});

// Delete a book by id
router.delete("/books/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByIdAndDelete(id);
    return res.status(200).json({ message: "Book deleted successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
});

export default router;
