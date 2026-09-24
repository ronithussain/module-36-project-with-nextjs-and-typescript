import ReadBtn from "@/app/components/bookDetails/ReadBtn";
import WishBtn from "@/app/components/bookDetails/WishBtn";
import { BookData } from "@/app/types/type";
import Image from "next/image";

interface IBookDetailPageProps {
  params: Promise<{ id: string }>;
}

const getBooksData = async (): Promise<BookData[]> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`,
    );
    const data: BookData[] = await res.json();
    return data;
  } catch (error) {
    console.log("Error fatchin books data", error);
    return [];
  }
};

const BookDetailPage = async ({ params }: IBookDetailPageProps) => {
  const { id } = await params;

  const booksData = await getBooksData();
  const book = booksData.find(
    (book: BookData) => book.bookId === Number(id),
  ) as BookData;

  // console.log(book, "this is id");

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="card lg:card-side overflow-hidden border border-base-200 bg-base-100 shadow-xl transition-all duration-300 hover:shadow-2xl">
        {/* Book Image */}
        <figure className="relative bg-slate-100 p-6 lg:w-2/5">
          <Image
            width={500}
            height={300}
            src={book.image}
            alt={book.bookName}
            className="max-h-[450px] w-full rounded-xl object-contain shadow-lg transition-transform duration-500 hover:scale-105"
          />
        </figure>

        {/* Book Information */}
        <div className="card-body lg:w-3/5">
          {/* Category & Year */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="badge badge-primary badge-outline">
              {book.category}
            </span>

            <span className="badge badge-ghost">{book.yearOfPublishing}</span>
          </div>

          {/* Book Name */}
          <h1 className="mt-2 text-3xl font-extrabold leading-tight text-base-content md:text-4xl">
            {book.bookName}
          </h1>

          {/* Author */}
          <p className="text-base text-base-content/60">
            Written by{" "}
            <span className="font-semibold text-base-content">
              {book.author}
            </span>
          </p>

          {/* Rating */}
          <div className="mt-3 flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-1">
              <span className="text-2xl text-yellow-400">★</span>

              <span className="text-lg font-bold">{book.rating}</span>

              <span className="text-sm text-base-content/50">/ 5</span>
            </div>

            <div className="h-5 w-px bg-base-300" />

            <span className="text-sm text-base-content/60">
              {book.totalPages} Pages
            </span>
          </div>

          {/* Tags */}
          <div className="mt-2 flex flex-wrap gap-2">
            {book.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Divider */}
          <div className="divider my-2" />

          {/* Review */}
          <div>
            <h3 className="mb-2 text-lg font-bold">About this book</h3>

            <p className="text-sm leading-7 text-base-content/70 md:text-base">
              {book.review}
            </p>
          </div>

          {/* Book Information */}
          <div className="mt-4 grid grid-cols-2 gap-3 rounded-xl bg-base-200/60 p-4 sm:grid-cols-3">
            <div>
              <p className="text-xs text-base-content/50">Publisher</p>

              <p className="mt-1 text-sm font-semibold">{book.publisher}</p>
            </div>

            <div>
              <p className="text-xs text-base-content/50">Published</p>

              <p className="mt-1 text-sm font-semibold">
                {book.yearOfPublishing}
              </p>
            </div>

            <div>
              <p className="text-xs text-base-content/50">Pages</p>

              <p className="mt-1 text-sm font-semibold">{book.totalPages}</p>
            </div>
          </div>

          {/* Action */}
          <div className="card-actions mt-5">
            <ReadBtn book={book} />

            <WishBtn book={book} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailPage;
