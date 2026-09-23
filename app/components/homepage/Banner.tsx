import Image from "next/image";
import bannerImg from "@/app/assets/hero_img.jpg";

const Banner = () => {
  return (
    <section className="container mx-auto px-1 py-8 md:py-12">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300 shadow-lg">
        <div className="grid grid-cols-1 items-center gap-8 px-6 py-10 sm:px-10 md:grid-cols-2 md:px-12 lg:px-16 lg:py-14">
          
          {/* Content */}
          <div className="order-2 space-y-5 text-center md:order-1 md:text-left">
            <span className="inline-block rounded-full bg-secondary/10 px-4 py-1.5 text-sm font-semibold text-secondary">
              Discover Your Next Read
            </span>

            <h1 className="text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Books to freshen up
              <br />
              <span className="text-secondary">your bookshelf</span>
            </h1>

            <p className="mx-auto max-w-lg text-sm leading-6 text-slate-600 sm:text-base md:mx-0">
              Discover amazing books, explore new stories, and find your next
              favorite read for your personal bookshelf.
            </p>

            <div className="flex flex-col justify-center gap-3 sm:flex-row md:justify-start">
              <button className="btn btn-secondary rounded-full px-7 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg">
                View The Task
              </button>

              <button className="btn btn-outline rounded-full px-7 transition-all duration-300 hover:scale-105">
                Explore Books
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 flex justify-center md:order-2">
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-4 rounded-3xl bg-secondary/20 blur-2xl" />

              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src={bannerImg}
                  alt="Books on a bookshelf"
                  className="h-auto w-full object-cover transition-transform duration-500 hover:scale-105"
                  priority
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;