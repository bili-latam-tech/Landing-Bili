'use client';

import { useState } from 'react';
import Image from 'next/image';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Footer from '../components/Footer';

export default function Home() {
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
    <div className="bg-gradient-to-br from-[#f8fbff] via-[#f0f4ff] to-[#eaf0ff] min-h-screen flex flex-col">
      <Header />
      <Hero />
      <Features />
      <Footer />
      {/* Animations */}
      <style jsx global>{`
        @keyframes gradient-move {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-move {
          background-size: 200% 200%;
          animation: gradient-move 3s ease-in-out infinite;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: none; }
        }
        .animate-fade-in {
          animation: fade-in 1.2s cubic-bezier(0.4,0,0.2,1) both;
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.7; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
} 