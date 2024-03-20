import { BookPlus, Pencil, Trash } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const BooksTables = ({ books, handleDelete }) => {
  const navigate = useNavigate();

  return (
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
        {books.map((book, index) => (
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
              <button onClick={() => navigate(`/book/edit/${book._id}`)}>
                <Pencil className="text-slate-700" />
              </button>
            </td>
            <td className="px-6 py-4">{book._id}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BooksTables;
