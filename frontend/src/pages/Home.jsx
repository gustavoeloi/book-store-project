import { useEffect, useState } from "react";
import axios from "axios";
import { Spinner } from "../components/Spinner";
import { Link } from "react-router-dom";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/api/books")
      .then((res) => {
        setBooks(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="p-4 container mx-auto h-screen">
      <h1>Book List</h1>
      <div className="flex items-center justify-center">
        <table className="w-full text-sm text-left rtl:text-rigth text-gray-500 ">
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
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <Spinner />
            ) : (
              books.map((book, index) => (
                <tr
                  key={book._id}
                  className="bg-white border-b hover:bg-gray-700 "
                >
                  <td className="px-6 py-4">{index + 1}</td>
                  <td className="px-6 py-4">{book.title}</td>
                  <td className="px-6 py-4">{book.author}</td>
                  <td className="px-6 py-4">{book.publishYear}</td>
                  <td className="px-6 py-4">{book.pages}</td>
                  <td className="px-6 py-4">
                    <Link
                      to={`/edit/${book._id}`}
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      Edit
                    </Link>
                    <Link
                      to={`/delete/${book._id}`}
                      className="text-red-600 hover:text-red-900"
                    >
                      Delete
                    </Link>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
