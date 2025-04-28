export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-blue-50 py-6 text-center text-gray-400 text-sm mt-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 gap-2">
        <span>© {new Date().getFullYear()} Bili App &mdash; Hecho con ❤️ para tu bienestar financiero</span>
      </div>
    </footer>
  );
} 