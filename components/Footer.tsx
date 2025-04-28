export default function Footer() {
  return (
    <footer className="w-full bg-white dark:bg-gray-900 border-t border-blue-50 dark:border-gray-800 py-6 text-center text-gray-400 dark:text-gray-500 text-sm transition-colors duration-200">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 gap-2">
        <span>© {new Date().getFullYear()} Bili App &mdash; Hecho con ❤️ para tu bienestar financiero</span>
      </div>
    </footer>
  );
} 