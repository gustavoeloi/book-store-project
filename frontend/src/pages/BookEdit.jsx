import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import ButtonReturn from "../components/ButtonReturn";
import { useSnackbar } from "notistack";

const BookEdit = () => {
  const { id } = useParams();
  const [book, setBook] = useState({});
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [pages, setPages] = useState("");
  const { enqueueSnackbar } = useSnackbar();

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:5555/api/books/${id}`)
      .then(({ data }) => {
        setBook(data);
        setTitle(data.title);
        setAuthor(data.author);
        setPublishYear(data.publishYear);
        setPages(data.pages);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      title,
      author,
      publishYear,
      pages,
    };
    axios
      .put(`http://localhost:5555/api/books/${id}`, newBook)
      .then(() => {
        enqueueSnackbar("Book successfully edited", { variant: "info" });
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="h-screen mx-auto container flex flex-col items-center justify-center">
      <ButtonReturn />
      <h1 className="font-medium text-2xl mb-4">Edit Book - ({book.title})</h1>
      <form className="w-full max-w-md" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-xl text-slate-800">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            className="w-full border p-2 rounded-sm"
            onChange={(e) => setTitle(e.target.value)}
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

export default BookEdit;
