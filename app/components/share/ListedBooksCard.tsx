import { BookData } from "@/app/types/type";
import Image from "next/image";
import Link from "next/link";

const ListedBooksCard = ({ book }: { book: BookData }) => {
  return (
    <div>
      {/* Books */}
      <div className="group overflow-hidden rounded-2xl border border-base-200 bg-base-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        <div className="flex flex-col md:flex-row">
          {/* Book Image */}
          <div className="relative h-64 w-full shrink-0 overflow-hidden bg-base-200 md:h-auto md:w-52">
            <Image
              src={book.image}
              alt={book.bookName}
              fill
              sizes="(max-width: 768px) 100vw, 208px"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Category */}
            <div className="absolute left-3 top-3">
              <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-primary shadow-md backdrop-blur">
                {book.category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-1 flex-col p-5 md:p-6">
            {/* Title */}
            <div>
              <h3 className="text-2xl font-bold leading-tight text-base-content transition-colors group-hover:text-primary">
                {book.bookName}
              </h3>

              <p className="mt-1 text-sm text-base-content/60">
                By{" "}
                <span className="font-semibold text-base-content/80">
                  {book.author}
                </span>
              </p>
            </div>

            {/* Tags */}
            <div className="mt-4 flex flex-wrap gap-2">
              {book.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Rating + Pages */}
            <div className="mt-4 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-1">
                <span className="text-lg text-yellow-400">★</span>

                <span className="font-bold">{book.rating}</span>

                <span className="text-sm text-base-content/50">/ 5</span>
              </div>

              <div className="h-5 w-px bg-base-300" />

              <span className="text-sm text-base-content/60">
                📖 {book.totalPages} pages
              </span>

              <span className="text-sm text-base-content/60">
                📅 {book.yearOfPublishing}
              </span>
            </div>

            {/* Review */}
            <p className="mt-4 line-clamp-2 text-sm leading-6 text-base-content/60">
              {book.review}
            </p>

            {/* Bottom */}
            <div className="mt-5 flex flex-col gap-4 border-t border-base-200 pt-4 sm:flex-row sm:items-center sm:justify-between">
              {/* Publisher */}
              <div>
                <p className="text-xs text-base-content/40">Publisher</p>

                <p className="text-sm font-semibold text-base-content/80">
                  {book.publisher}
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-2">
                <Link href={`/books/${book.bookId}`}>
                  <button className="btn btn-primary btn-sm rounded-lg px-5">
                    View Details
                  </button>
                </Link>

                <button className="btn btn-outline btn-sm rounded-lg px-5">
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListedBooksCard;
