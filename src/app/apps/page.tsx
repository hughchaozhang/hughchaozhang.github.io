import Link from "next/link";

interface AppCard {
  title: string;
  description: string;
  link: string;
  emoji: string;
}

const apps: AppCard[] = [
  {
    title: "App 1",
    description: "A cool web app that does something awesome",
    link: "https://app1.example.com",
    emoji: "🎮",
  },
  {
    title: "App 2",
    description: "Another fantastic creation from the seafloor",
    link: "https://app2.example.com",
    emoji: "🎲",
  },
  // Add more apps as needed
];

export default function Apps() {
  return (
    <div className="min-h-screen p-8 pb-20">
      <header className="mb-12 text-center">
        <Link 
          href="/" 
          className="text-2xl font-bold text-red-600 hover:text-red-700 transition-colors"
        >
          🦞 Bored Lobster
        </Link>
        <h1 className="mt-8 text-3xl md:text-4xl font-bold">My Apps Collection</h1>
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          Hand-crafted web apps from under the sea
        </p>
      </header>

      <main className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {apps.map((app) => (
          <a
            key={app.title}
            href={app.link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-lg border-2 border-gray-200 dark:border-gray-700 hover:border-red-600 dark:hover:border-red-600 transition-all hover:shadow-lg"
          >
            <div className="text-3xl mb-4">{app.emoji}</div>
            <h2 className="text-xl font-bold mb-2">{app.title}</h2>
            <p className="text-gray-600 dark:text-gray-300">{app.description}</p>
          </a>
        ))}
      </main>

      <footer className="fixed bottom-0 left-0 right-0 p-6 text-center text-sm text-gray-500">
        <p>Built with Next.js by a very bored lobster 🦞</p>
      </footer>
    </div>
  );
} 