export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 p-6 text-center transition-opacity duration-1000 opacity-100">
      <div className="bg-white p-8 rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-500">
        <h1 className="text-5xl font-extrabold text-red-600 mb-4 animate-pulse">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-6 max-w-sm mx-auto">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>
        <a
          href="/"
          className="inline-block px-6 py-3 bg-black text-white rounded-full font-medium hover:bg-white hover:text-black border-2 border-black transition-colors duration-300"
        >
          Go Home
        </a>
      </div>

      <div className="mt-8">
        <svg
          className="w-48 h-48 text-red-400 animate-bounce"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3m0 4h.01M21 12c0 4.9706-4.0294 9-9 9s-9-4.0294-9-9 4.0294-9 9-9 9 4.0294 9 9z"
          />
        </svg>
      </div>
    </div>
  );
}
