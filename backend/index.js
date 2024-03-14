import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";

// models
import { Book } from "./models/bookModel.js";

const app = express();

app.use(express.json());

// Create a new book
app.post("/books", async (req, res) => {
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
app.get("/books", async (req, res) => {
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
app.get("/books/:id", async (req, res) => {
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
app.put("/books/:id", async (req, res) => {
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
app.delete("/books/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByIdAndDelete(id);
    return res.status(200).json({ message: "Book deleted successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
});

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
