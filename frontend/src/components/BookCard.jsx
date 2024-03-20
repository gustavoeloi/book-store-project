import { BookPlus, BookIcon, Trash, Pencil } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Eye } from "lucide-react";
import BookModal from "./BookModal";
import { useState } from "react";
import Card from "./Card";

const BookCard = ({ books, handleDelete }) => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

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
          <Card book={book} key={book._id} handleDelete={handleDelete} />
        ))}
      </div>
    </>
  );
};

export default BookCard;
