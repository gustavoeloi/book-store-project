import { BookIcon, X } from "lucide-react";

const BookModal = ({ book, onClose }) => {
  const { title, author, publishYear, createdAt, updatedAt, _id } = book;

  return (
    <div
      className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-60"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg bg-white rounded-xl flex flex-col relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 text-slate-950"
          onClick={onClose}
        >
          <X className="text-3xl cursor-pointer" />
        </button>
        <h2 className="text-2xl font-medium text-slate-900 flex items-center gap-2 px-4 py-2">
          <BookIcon className="text-xl" />
          {title}
        </h2>

        <div className="px-4 py-2">
          <p className="mb-2 text-medium text-slate-600">
            <span className="mr-2">ID:</span>
            {_id}
          </p>
          <p className="mb-2 text-medium text-slate-600">
            <span className="mr-2">Author:</span>
            {author}
          </p>
          <p className="mb-2 text-medium text-slate-600">
            <span className="mr-2">Year of Publication:</span>
            {publishYear}
          </p>
          <p className="mb-2 text-medium text-slate-600">
            <span className="mr-2">Create Time:</span>
            {new Date(createdAt).toLocaleDateString()}
          </p>
          <p className="mb-2 text-medium text-slate-600">
            <span className="mr-2">Last Update Time:</span>
            {new Date(updatedAt).toLocaleDateString()}
          </p>
        </div>
        <div className="px-4 py-1">
          <p className="font-medium">Descripition</p>
          <p className="text-slate-600 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quas
            qui eos, praesentium molestiae alias maxime minima quaerat
            laudantium distinctio?
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookModal;
