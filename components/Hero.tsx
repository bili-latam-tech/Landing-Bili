import { useState } from 'react';
import Image from 'next/image';

export default function Hero() {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwURVAf8-WhRbKgh8z2F1m9eeq9KJwrInYSUkQ7v-vuAbhCFygfB15_euR0ny98ZkK8/exec';
    try {
      await fetch(scriptURL, {
        method: 'POST',
        body: new FormData(e.target as HTMLFormElement)
      });
      alert("¡Gracias por ser parte de nuestra beta!");
      window.location.reload();
    } catch (error) {
      console.error('Error!', error);
    }
  };

  return (
    <section className="w-full py-16 bg-gradient-to-br from-[#f8fbff] via-[#f0f4ff] to-[#eaf0ff] dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-200">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 px-4">
        {/* Left: Text & Form */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-start gap-8">
          <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 font-semibold px-4 py-1 rounded-full mb-2 animate-fade-in">¡Nuevo! Prueba la beta exclusiva</span>
          <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight mb-4 text-gray-900 dark:text-white">
            Tú tomas la foto y <br />
            <span className="bg-gradient-to-r from-blue-500 via-blue-400 to-blue-700 dark:from-blue-400 dark:via-blue-300 dark:to-blue-600 bg-clip-text text-transparent animate-gradient-move">nosotros hacemos el resto</span>
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 max-w-xl">
            Registra tus gastos, fija tus metas de ahorro y descubre patrones que te permitan mejorar tu vida financiera.
          </p>

          {/* Signup Form */}
          <div
            className="w-full max-w-lg p-px rounded-2xl bg-gradient-to-r from-blue-500 via-blue-400 to-blue-700 dark:from-blue-400 dark:via-blue-300 dark:to-blue-600 animate-gradient-move"
            style={{ backgroundSize: '200% 200%' }}
          >
            <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 rounded-2xl p-6 flex flex-col sm:flex-row gap-4 items-center">
              <input
                type="email"
                name="your-email"
                placeholder="jhon@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-900 outline-none text-lg transition-all text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-700 dark:from-blue-400 dark:to-blue-600 hover:from-blue-600 hover:to-blue-800 dark:hover:from-blue-500 dark:hover:to-blue-700 text-white font-bold rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105"
              >
                Regístrate
              </button>
            </form>
          </div>
          <span className="text-xs text-gray-400 dark:text-gray-500 mt-1 ml-1">No compartimos tu correo. Sin spam.</span>
        </div>

        {/* Right: Phone Mockup */}
        <div className="w-full lg:w-1/2 flex justify-center items-center relative mt-12 lg:mt-0">
          <Image
            src="/mockup.png"
            alt="Phone Image"
            width={702}
            height={439}
            className="rounded-[2.5rem]"
            priority
          />
        </div>
      </div>
    </section>
  );
} 