import { useEffect, useState } from "react";
import axios from "axios";
// import { Spinner } from "../components/Spinner";
import { Link } from "react-router-dom";
import { Trash, Pencil, BookPlus } from "lucide-react";

import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";
import BooksTables from "../components/BooksTable";
import BookCard from "../components/BookCard";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();
  const [showType, setShowType] = useState("table");

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/api/books")
      .then(({ data }) => {
        setBooks(data.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    const confirm = window.confirm("Are you sure to delete this book?");
    if (confirm) {
      axios.delete(`http://localhost:5555/api/books/${id}`).then(() => {
        setBooks(books.filter((book) => book._id !== id));
      });
    } else {
      return;
    }
  };

  return (
    <div className="p-4 container mx-auto h-screen">
      <h1 className="text-4xl font-medium py-4 text-center text-zinc-700">
        Book List
      </h1>

      <div className="w-full border-b mb-8 pb-3 flex items-center justify-center gap-4">
        <button
          className={`bg-sky-300 hover:bg-sky-600 transition-all px-4 py-1 rounded-lg text-white font-medium text-xl ${
            showType === "table" ? "bg-sky-600" : ""
          }`}
          onClick={() => setShowType("table")}
        >
          Table
        </button>
        <button
          className={`bg-sky-300 hover:bg-sky-600 transition-all px-4 py-1 rounded-lg text-white font-medium text-xl ${
            showType === "card" ? "bg-sky-600" : ""
          }`}
          onClick={() => setShowType("card")}
        >
          Card
        </button>
      </div>

      <div>
        {loading ? (
          <Spinner />
        ) : showType === "table" ? (
          <BooksTables books={books} handleDelete={handleDelete} />
        ) : (
          <BookCard books={books} />
        )}
      </div>
    </div>
  );
};

export default Home;
