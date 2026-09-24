"use client";

import { useContext, useState } from "react";
import { BooksContext } from "../context/BooksContext";
import { BookData } from "../types/type";
import ListedBooksCard from "../components/share/ListedBooksCard";


const ListedBooksPage = () => {
  const { readBooks, wishlist } = useContext(BooksContext);
  const [sortBy, setSortBy] = useState<"rating" | "pages" | "year">("rating");

  const sortBooks = (books: BookData[]) => {
    // books is a parameter. he accept an array.. exm: readbooks | wishlist
    const sortedBooks = [...books]; // old array copy 

    if (sortBy === "rating") {
      sortedBooks.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "pages") {
      sortedBooks.sort((a, b) => b.totalPages - a.totalPages);
    } else if (sortBy === "year") {
      sortedBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
    }
    return sortedBooks;
  };
  const sortedReadBooks = sortBooks(readBooks); // arguments
  const sortedWishlist = sortBooks(wishlist); // arguments

  console.log(sortedReadBooks, "sortedBooks");
  console.log(sortedWishlist, "wishlist books");

  return (
    <div>
      <div className="container mx-auto px-4 py-10">
        {/* Page Header */}
        <h2 className="rounded-2xl bg-gradient-to-r from-primary/20 via-base-200 to-secondary/20 p-8 text-center text-3xl font-extrabold text-base-content shadow-sm md:text-4xl">
          Books
        </h2>
        <div className="text-center my-4">
          <select
            value={sortBy}
            onChange={(e) =>
              setSortBy(e.target.value as "rating" | "pages" | "year")
            }
            // defaultValue="Pick a Framework"
            className="select select-info"
          >
            <option disabled={true}>Sort By</option>
            <option value={"rating"}>Rating</option>
            <option value={"pages"}>Number Of Pages</option>
            <option value={"year"}>Publish Year</option>
          </select>
        </div>

        {/* Book Count */}
        <div className="my-8 flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-2xl font-bold md:text-3xl">Listed Books</h2>

          <div className="flex flex-wrap gap-2">
            <span className="badge badge-primary px-4 py-3">
              Read: {readBooks.length}
            </span>

            <span className="badge badge-secondary px-4 py-3">
              Wishlist: {wishlist.length}
            </span>
          </div>
        </div>

        {/* name of each tab group should be unique */}
        <div className="tabs tabs-lift">
          <input
            type="radio"
            name="my_tabs_3"
            className="tab"
            aria-label="Read Books"
            defaultChecked
          />
          <div className="tab-content bg-base-100 border-base-300 p-6">
            {/* Books */}
            <div className="space-y-5">
              {sortedReadBooks.length > 0 ? (
                sortedReadBooks.map((book: BookData) => (
                  <ListedBooksCard key={book.bookId} book={book} />
                ))
              ) : (
                // Empty state:
                <div className="mt-8 rounded-2xl border border-dashed border-base-300 p-12 text-center">
                  <div className="text-5xl">📚</div>

                  <h3 className="mt-4 text-xl font-bold">No books added yet</h3>

                  <p className="mt-2 text-sm text-base-content/60">
                    Start reading books and they will appear here.
                  </p>

                  <button className="badge badge-primary mt-5 rounded-xl px-4 py-4">
                    Browse Books
                  </button>
                </div>
              )}
            </div>
          </div>

          <input
            type="radio"
            name="my_tabs_3"
            className="tab"
            aria-label="Wishlist Books"
          />
          <div className="tab-content bg-base-100 border-base-300 p-6">
            {/* Wishlist */}
            <div className="space-y-5">
              {sortedWishlist.length > 0 ? (
                sortedWishlist.map((book: BookData) => (
                  <ListedBooksCard key={book.bookId} book={book} />
                ))
              ) : (
                // Empty state:
                <div className="mt-8 rounded-2xl border border-dashed border-base-300 p-12 text-center">
                  <div className="text-5xl">📚</div>

                  <h3 className="mt-4 text-xl font-bold">
                    No wishlist added yet
                  </h3>

                  <p className="mt-2 text-sm text-base-content/60">
                    Start wishlist books and they will appear here.
                  </p>

                  <button className="badge badge-secondary mt-5 rounded-xl px-4 py-4">
                    Browse Wishlist
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListedBooksPage;
