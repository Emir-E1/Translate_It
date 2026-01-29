import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-4">
      <div className="max-w-xl text-center">
        <h1 className="mb-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Translate text in seconds.
        </h1>
        <p className="mb-6 text-sm text-gray-300 sm:text-base">
          Type your text, choose your source and target languages, and get an
          instant translation. Simple, clean, and focused on the essentials.
        </p>
        <Link
          to="/app"
          className="inline-flex items-center justify-center rounded-lg bg-cyan-500 px-4 py-2 text-sm font-medium text-black transition hover:bg-cyan-400"
        >
          Open the translator
        </Link>
      </div>
    </div>
  );
}

export default Home;
