"use client";
import { createContext, ReactNode, useState } from "react";
import { BookData } from "../types/type";

interface IBooksContext {
  readBooks: BookData[];
  setReadBooks: React.Dispatch<React.SetStateAction<BookData[]>>;
  wishlist: BookData[];
  setWishList: React.Dispatch<React.SetStateAction<BookData[]>>;
}

export const BooksContext = createContext<IBooksContext>({
  readBooks:[],
  setReadBooks: ()=> {},
  wishlist:[],
  setWishList: ()=> {}
});

const BooksProvider = ({ children }: { children: ReactNode }) => {
  const [readBooks, setReadBooks] = useState<BookData[]>([]);
  const [wishlist, setWishList] = useState<BookData[]>([]);

  const sharedData = {
    readBooks,
    setReadBooks,
    wishlist,
    setWishList,
  };
  return (
    <BooksContext.Provider value={sharedData}>{children}</BooksContext.Provider>
  );
};

export default BooksProvider;
