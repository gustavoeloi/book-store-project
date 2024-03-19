import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ButtonReturn from "../components/ButtonReturn";
import Spinner from "../components/Spinner";

const BookDetail = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/api/books/${id}`)
      .then(({ data }) => {
        setBook(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="h-screen mx-auto container flex items-center justify-center flex-col gap-4">
      <ButtonReturn />
      {loading && <Spinner />}
      {!loading && (
        <div className="border p-4">
          <h2 className="text-center font-medium text-slate-900 text-2xl mb-4">
            {book.title}
          </h2>
          <p>
            <span className="mb-2 text-medium text-slate-600 mr-2">
              Author:
            </span>
            {book.author}
          </p>
          <p>
            <span className="mb-2 text-medium text-slate-600 mr-2">
              Year of Publication:
            </span>
            {book.publishYear}
          </p>
          <p>
            <span className="mb-2 text-medium text-slate-600 mr-2">Pages:</span>
            {book.publishYear}
          </p>
          <p>
            <span className="mb-2 text-medium text-slate-600 mr-2">
              Create Time:
            </span>
            {new Date(book.createdAt).toLocaleDateString()}
          </p>
          <p>
            <span className="mb-2 text-medium text-slate-600 mr-2">
              Last Update Time:
            </span>
            {new Date(book.updatedAt).toLocaleDateString()}
          </p>
        </div>
      )}
    </div>
  );
};

export default BookDetail;
