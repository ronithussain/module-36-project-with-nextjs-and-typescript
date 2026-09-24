"use client";
import Image from "next/image";
import logo from "@/app/assets/book.ico";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-base-100  shadow-sm">
      <div className="container mx-auto navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link
                  href={"/books"}
                  className={
                    pathname === "/books"
                      ? "bg-primary text-primary-content"
                      : ""
                  }
                >
                  Books
                </Link>
              </li>
              <li>
                <Link
                  href={"/listed-books"}
                  className={
                    pathname === "/listed-books"
                      ? "bg-primary text-primary-content"
                      : ""
                  }
                >
                  LIsted-Books
                </Link>
              </li>
              <li>
                <Link
                  href={"/read-books"}
                  className={
                    pathname === "/read-books"
                      ? "bg-primary text-primary-content"
                      : ""
                  }
                >
                  Read Books Charts
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex gap-2 items-center">
            <Image src={logo} alt="web page logo" />
            <Link href={"/"} className="btn btn-ghost text-xl">
              Book Vibe
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link
                href={"/books"}
                className={
                  pathname === "/books" ? "bg-primary text-primary-content" : ""
                }
              >
                Books
              </Link>
            </li>
            <li>
              <Link
                href={"/listed-books"}
                className={
                  pathname === "/listed-books"
                    ? "bg-primary text-primary-content"
                    : ""
                }
              >
                LIsted-Books
              </Link>
            </li>
            <li>
              <Link
                href={"/read-books"}
                className={
                  pathname === "/read-books"
                    ? "bg-primary text-primary-content"
                    : ""
                }
              >
                Read Books Charts
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-1">
          <a className="btn btn-success">Sign In</a>
          <a className="btn btn-accent">Sign Up</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
