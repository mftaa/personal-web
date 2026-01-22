import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Timeline } from './components/Timeline';
import { Gallery } from './components/Gallery';

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black selection:bg-indigo-200 dark:selection:bg-indigo-900">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <Hero />
        <Skills />
        <Timeline />
        <Gallery />
        <footer className="py-10 text-center text-sm text-zinc-500 border-t border-zinc-100 dark:border-zinc-800">
          <p>&copy; {new Date().getFullYear()} Miftachussurur. Built with Next.js & Tailwind CSS.</p>
        </footer>
      </div>
    </main>
  );
}