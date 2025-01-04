import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen p-8 pb-20 flex flex-col items-center justify-center gap-8">
      <main className="max-w-2xl text-center">
        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-red-600">
            🦞 Bored Lobster
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
            Just a curious crustacean crafting cool web apps
          </p>
        </div>

        <div className="flex gap-6 justify-center flex-wrap">
          <Link
            href="/apps"
            className="rounded-full bg-red-600 hover:bg-red-700 transition-colors text-white px-8 py-3 text-lg font-medium"
          >
            View My Apps 🚀
          </Link>
          <a
            href="https://github.com/hughchaozhang"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border-2 border-gray-300 dark:border-gray-600 hover:border-red-600 dark:hover:border-red-600 transition-colors px-8 py-3 text-lg font-medium"
          >
            GitHub 🦀
          </a>
        </div>
      </main>

      <footer className="fixed bottom-0 left-0 right-0 p-6 text-center text-sm text-gray-500">
        <p>Built with Next.js by a very bored lobster 🦞</p>
      </footer>
    </div>
  );
}
