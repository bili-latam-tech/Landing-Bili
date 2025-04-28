import Image from 'next/image';
import DarkModeToggle from './DarkModeToggle';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur border-b border-blue-200 dark:border-gray-800 shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <Image src="/logo_website.PNG" alt="Bili Lo" width={60} height={32} className="h-16 w-auto" priority />
        <div className="flex items-center gap-4">
          <DarkModeToggle />
        </div>
      </div>
    </header>
  );
} 