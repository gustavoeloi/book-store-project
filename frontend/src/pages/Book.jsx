import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export const Book = () => {
  const { id } = useParams();
  const [book, setBook] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:5555/api/books/${id}`)
      .then(({ data }) => setBook(data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="container mx-auto">
      <div className="h-screen flex items-center justify-center">
        <form className="flex "></form>
      </div>
    </div>
  );
};
