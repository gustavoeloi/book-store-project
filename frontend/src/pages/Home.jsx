import { useEffect, useState } from "react";
import axios from "axios";
// import { Spinner } from "../components/Spinner";
import { Link } from "react-router-dom";
import { Trash, Pencil, BookPlus } from "lucide-react";

import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

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

      <div className="flex items-center justify-center">
        {loading && <Spinner />}
        {!loading && (
          <table className="w-full text-sm text-left rtl:text-rigth text-zinc-700 ">
            <thead className="text-sx text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3"></th>
                <th scope="col" className="px-6 py-3">
                  Title
                </th>
                <th scope="col" className="px-6 py-3">
                  Author
                </th>
                <th scope="col" className="px-6 py-3">
                  Publish Year
                </th>
                <th scope="col" className="px-6 py-3">
                  Pages
                </th>
                <th scope="col" className="px-6 py-3">
                  Actions
                </th>
                <th scope="col" className="px-6 py-3">
                  <button
                    onClick={() => navigate("/book/add")}
                    className="flex items-center gap-2 bg-zinc-500 text-white px-4 py-2 rounded-md"
                  >
                    <BookPlus />
                    Add Book
                  </button>
                </th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td>loading...</td>
                </tr>
              ) : (
                books.map((book, index) => (
                  <tr key={book._id}>
                    <td className="px-6 py-4">{index + 1}</td>
                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap hover:underline cursor-pointer capitalize">
                      <Link to={`/book/detail/${book._id}`}>{book.title}</Link>
                    </td>
                    <td className="px-6 py-4">{book.author}</td>
                    <td className="px-6 py-4">{book.publishYear}</td>
                    <td className="px-6 py-4">{book.pages}</td>
                    <td className="px-6 py-4 flex items-center gap-4">
                      <button onClick={() => handleDelete(book._id)}>
                        <Trash className="text-red-500" />
                      </button>
                      <button
                        onClick={() => navigate(`/book/edit/${book._id}`)}
                      >
                        <Pencil className="text-slate-700" />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Home;
