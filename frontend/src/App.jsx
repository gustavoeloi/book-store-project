import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import BookDetail from "./pages/BookDetail";
import BookEdit from "./pages/BookEdit";
import BookAdd from "./pages/BookAdd";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/book/detail/:id" element={<BookDetail />} />
      <Route path="/book/edit/:id" element={<BookEdit />} />
      <Route path="/book/add" element={<BookAdd />} />
    </Routes>
  );
}

export default App;
