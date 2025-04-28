import Image from 'next/image';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur border-b border-blue-50 dark:border-gray-800 shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <Image src="/logo_website.PNG" alt="Bili Lo" width={60} height={32} className="h-20 w-auto" priority />
        <a href="#contacto" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline transition-colors">Contacto</a>
      </div>
    </header>
  );
} 