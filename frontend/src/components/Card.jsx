import { BookIcon, Eye, Pencil, Trash } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BookModal from "./BookModal";

const Card = ({ book, handleDelete }) => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="border p-4" key={book._id}>
      <div className="flex justify-between items-center">
        <h2 className="text-center font-medium text-slate-900 text-2xl mb-4 flex items-center gap-2">
          <BookIcon />
          {book.title}
        </h2>
        <p className="bg-sky-300 text-white px-2 py-1 rounded-xl ">
          {book.publishYear}
        </p>
      </div>

      <p className="text-zinc-400 my-1">{book._id}</p>
      <p>
        <span className="mb-2 text-medium text-slate-600 mr-2">Author:</span>
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
        <Eye
          className="text-3xl text-blue-700 hover:text-black cursor-pointer"
          onClick={() => setShowModal(true)}
        />
        <button onClick={() => handleDelete(book._id)}>
          <Trash className="text-red-500 " />
        </button>
        <button onClick={() => navigate(`/book/edit/${book._id}`)}>
          <Pencil className="text-slate-700" />
        </button>
      </div>
      {showModal && (
        <BookModal book={book} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default Card;
