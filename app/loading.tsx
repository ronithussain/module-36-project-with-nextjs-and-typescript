
const Loading = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-base-100">
      <div className="flex flex-col items-center gap-5">

        {/* Spinner */}
        <div className="relative h-16 w-16">
          <div className="absolute inset-0 rounded-full border-4 border-primary/20" />

          <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-primary border-r-secondary" />
        </div>

        {/* Loading Text */}
        <div className="text-center">
          <h2 className="text-lg font-bold text-base-content">
            Loading...
          </h2>

          <p className="mt-1 text-sm text-base-content/50">
            Please wait a moment
          </p>
        </div>

      </div>
    </div>
  );
};

export default Loading;