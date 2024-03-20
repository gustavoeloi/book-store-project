import { BookPlus, BookIcon, Trash, Pencil } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BookCard = ({ books, handleDelete }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex items-center justify-center m-6">
        <button
          onClick={() => navigate("/book/add")}
          className="flex items-center gap-2 bg-zinc-500 text-white px-4 py-2 rounded-md"
        >
          <BookPlus />
          Add Book
        </button>
      </div>

      <div className="px-4 grid grid-cols-4 gap-4">
        {books.map((book) => (
          <div className="border p-4" key={book._id}>
            <div className="flex justify-between items-center">
              <h2 className="text-center font-medium text-slate-900 text-2xl mb-4 flex items-center gap-2">
                <BookIcon />
                {book.title}
              </h2>
              <p className="bg-rose-900 text-white p-1 rounded-xl">
                {book.publishYear}
              </p>
            </div>

            <p className="text-zinc-400 my-1">{book._id}</p>
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
            <div className="flex justify-end gap-2 mt-4">
              <button onClick={() => handleDelete(book._id)}>
                <Trash className="text-red-500 " />
              </button>
              <button onClick={() => navigate(`/book/edit/${book._id}`)}>
                <Pencil className="text-slate-700" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default BookCard;
