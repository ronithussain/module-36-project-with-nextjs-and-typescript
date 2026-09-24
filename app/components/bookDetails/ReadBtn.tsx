"use client";

import { BooksContext } from "@/app/context/BooksContext";
import { BookData } from "@/app/types/type";
import { useContext } from "react";
import { toast } from "react-toastify";

const ReadBtn = ({ book }: { book: BookData }) => {
  const { readBooks, setReadBooks } = useContext(BooksContext);
  // console.log(readBooks, "this is provider");

  const handleReadBook = () => {
    // console.log("the read button is triggered", book);
    setReadBooks([...readBooks, book]); // age theke kono data thakle seta readBooks e thakbe and new asle seta book mane parameter e set hobe...
    toast.success("The books read successfully!");
  };
  return (
    <div>
      <button
        onClick={() => handleReadBook()}
        className="btn btn-primary w-full rounded-xl sm:w-auto px-8"
      >
        Read
      </button>
    </div>
  );
};

export default ReadBtn;
