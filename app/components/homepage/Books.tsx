import { BookData } from "@/app/types/type";
import BookCard from "../share/BookCard";

const getBooksData = async (): Promise<BookData[]> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`,
    );
    const data: BookData[] = await res.json();
    return data;
  } catch (error) {
    console.log("Error fatching books data", error);
    return [];
  }
};

const Books = async () => {
  const booksData = await getBooksData();
  // console.log(booksData);
  return (
    <section className="container mx-auto">
      <h2 className="text-2xl font-bold text-slate-800 text-center mb-4">
        Explore All Books
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {booksData.map((book) => (
          <BookCard key={book.bookId} book={book} />
        ))}
      </div>
    </section>
  );
};

export default Books;
