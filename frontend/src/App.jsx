import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import { Book } from "./pages/Book";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/book/:id" element={<Book />} />
    </Routes>
  );
}

export default App;
