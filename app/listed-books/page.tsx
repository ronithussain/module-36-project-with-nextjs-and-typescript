"use client";

import { useContext } from "react";
import { BooksContext } from "../context/BooksContext";

const ListedBooksPage = () => {
  const { readBooks } = useContext(BooksContext);
  console.log(readBooks, "LIsted books is");
  return (
    <div>
      <div className="container mx-auto px-4 py-10">
        <h2 className="mb-6 text-3xl font-bold">Listed Books</h2>

        <div className="space-y-4">
          {readBooks.map((book) => (
            <div key={book.bookId} className="rounded-xl border p-5 shadow-sm">
              <h3 className="text-xl font-bold">{book.bookName}</h3>

              <p className="text-gray-500">By {book.author}</p>

              <p className="mt-2">Rating: ⭐ {book.rating}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListedBooksPage;
