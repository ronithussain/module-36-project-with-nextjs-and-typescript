import { BookData } from "@/app/types/type";
import Image from "next/image";
import Link from "next/link";

interface BookCardProps {
  book: BookData;
}

const BookCard = ({ book }: BookCardProps) => {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Image */}
      <div className="relative h-72 overflow-hidden bg-slate-100">
        <Image
          src={book.image}
          alt={book.bookName}
          width={800}
          height={200}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Category */}
        <div className="absolute left-4 top-4">
          <span className="rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-secondary shadow backdrop-blur">
            {book.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        {/* Title */}
        <h3 className="line-clamp-1 text-xl font-bold text-slate-900 transition-colors group-hover:text-secondary">
          {book.bookName}
        </h3>

        {/* Author */}
        <p className="mt-1 text-sm text-slate-500">
          by <span className="font-medium text-slate-700">{book.author}</span>
        </p>

        {/* Rating */}
        <div className="mt-4 flex items-center gap-2">
          <div className="flex items-center gap-1">
            <span className="text-lg text-yellow-400">★</span>
            <span className="font-bold text-slate-800">{book.rating}</span>
          </div>

          <span className="text-sm text-slate-400">
            • {book.totalPages} pages
          </span>
        </div>

        {/* Bottom Information */}
        <div className="mt-auto pt-5">
          <Link href={`/books/${book.bookId}`} >
            <button className="btn btn-secondary w-full rounded-xl">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BookCard;
