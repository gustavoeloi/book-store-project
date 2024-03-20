import { useState } from "react";
import ButtonReturn from "../components/ButtonReturn";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

const BookAdd = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [pages, setPages] = useState("");
  const { enqueueSnackbar } = useSnackbar();

  const navigate = useNavigate();

  const handleAddNewBook = (e) => {
    e.preventDefault();
    const newBook = {
      title,
      author,
      publishYear,
      pages,
    };

    axios
      .post("http://localhost:5555/api/books", newBook)
      .then(() => {
        setTitle("");
        setAuthor("");
        setPublishYear("");
        setPages("");

        enqueueSnackbar("Created Book success", { variant: "success" });
        navigate("/");
      })
      .catch((err) => {
        enqueueSnackbar("Error creating book, try again later", {
          variant: "error",
        });
        console.log(err);
      });
  };

  return (
    <div className="h-screen mx-auto container flex flex-col items-center justify-center">
      <ButtonReturn />
      <h1 className="font-medium text-2xl mb-4">Add a new book</h1>
      <form className="w-full max-w-md" onSubmit={handleAddNewBook}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-xl text-slate-800">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border p-2 rounded-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="author" className="block text-xl text-slate-800">
            Author
          </label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full border p-2 rounded-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="publishYear" className="block text-xl text-slate-800">
            Publish Year
          </label>
          <input
            type="text"
            id="publishYear"
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className="w-full border p-2 rounded-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="pages" className="block text-xl text-slate-800">
            Pages
          </label>
          <input
            type="text"
            id="pages"
            value={pages}
            onChange={(e) => setPages(e.target.value)}
            className="w-full border p-2 rounded-sm"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default BookAdd;
