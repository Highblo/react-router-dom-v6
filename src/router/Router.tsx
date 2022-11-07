import { FC, memo } from "react";
import { Routes, Route } from "react-router-dom";

import { Book } from "../components/pages/Book";
import { BookLayout } from "../components/pages/BookLayout";
import { BookList } from "../components/pages/BookList";
import { Home } from "../components/pages/Home";
import { NewBook } from "../components/pages/NewBook";
import { NotFound } from "../components/pages/NotFound";

export const Router: FC = memo(() => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="book" element={<BookLayout />}>
        <Route index element={<BookList />} />
        <Route path=":id" element={<Book />} />
        <Route path="newbook" element={<NewBook />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
});