import { BookData } from "@/app/types/type";
import BookCard from "../components/share/BookCard";

const getBooksData = async (): Promise<BookData[]> => {
  const res = await fetch("http://localhost:3000/booksData.json");
  const data: BookData[] = await res.json();
  return data;
};

const Books = async () => {
  const booksData = await getBooksData();
//   console.log(booksData);
  return (
    <section className="container mx-auto">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {booksData.map((book) => (
          <BookCard key={book.bookId} book={book} />
        ))}
      </div>
    </section>
  );
};

export default Books;
