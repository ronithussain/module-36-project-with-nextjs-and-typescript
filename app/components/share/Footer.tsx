import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-16 bg-slate-900 text-slate-300">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">

        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-white">
              Book<span className="text-primary">Shelf</span>
            </h2>

            <p className="mt-4 max-w-xs text-sm leading-6 text-slate-400">
              Discover amazing books, explore new stories, and find your next
              favorite read for your personal bookshelf.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex gap-3">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 transition hover:bg-primary hover:text-white"
                aria-label="Facebook"
              >
                f
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 transition hover:bg-primary hover:text-white"
                aria-label="Twitter"
              >
                𝕏
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 transition hover:bg-primary hover:text-white"
                aria-label="Instagram"
              >
                ◎
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 transition hover:bg-primary hover:text-white"
                aria-label="GitHub"
              >
                ◉
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/"
                  className="transition hover:text-primary"
                >
                  Home
                </Link>
              </li>

              <li>
                <a
                  href="/books"
                  className="transition hover:text-primary"
                >
                  Books
                </a>
              </li>

              <li>
                <a
                  href="/about"
                  className="transition hover:text-primary"
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="/contact"
                  className="transition hover:text-primary"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Categories
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="transition hover:text-primary">
                  Fiction
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-primary">
                  Classic
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-primary">
                  Fantasy
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-primary">
                  Mystery
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Stay Connected
            </h3>

            <p className="mb-4 text-sm leading-6 text-slate-400">
              Subscribe to get updates about new books and latest collections.
            </p>

            <div className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="input w-full rounded-lg border-slate-700 bg-slate-800 text-white placeholder:text-slate-500 focus:outline-none"
              />

              <button className="btn btn-primary w-full rounded-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-slate-800" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-3 text-center text-sm text-slate-500 md:flex-row md:text-left">
          <p>
            © {new Date().getFullYear()} BookShelf. All rights reserved.
          </p>

          <div className="flex gap-5">
            <a href="#" className="transition hover:text-primary">
              Privacy Policy
            </a>

            <a href="#" className="transition hover:text-primary">
              Terms & Conditions
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

