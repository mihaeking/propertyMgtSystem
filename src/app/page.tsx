'use client'

import Image from "next/image";
import Link from "next/link";
import { Montserrat } from 'next/font/google';
import dynamic from 'next/dynamic';

const montserrat = Montserrat({ subsets: ['latin'] });

const Scene = dynamic(() => import('@/app/components/scene'), { ssr: false });

export default function Home() {
  return (
    <div className={`relative flex flex-col items-center justify-center min-h-screen p-8 overflow-hidden ${montserrat.className}`}>
      <div className="absolute inset-0 z-0">
        <Scene />
      </div>
      <div className="relative z-10 w-full max-w-4xl text-white">
        <header className="flex justify-between items-center mb-16">
          <Image
            src="/globe.svg?height=40&width=40"
            alt="Logo"
            width={40}
            height={40}
            className="rounded-full bg-white p-1"
          />
          <nav className="space-x-4">
            <Link href="auth/login" className="text-sm hover:underline">Login</Link>
            <Link href="auth/register" className="text-sm bg-white text-purple-600 px-4 py-2 rounded-full hover:bg-opacity-90 transition-colors">
              Register
            </Link>
          </nav>
        </header>

        <main className="text-center">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6 animate-fade-in-up">
            Welcome to Our RealEstate Platform
          </h1>
          <p className="text-xl mb-12 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            Discover a world of possibilities in different dimensions. Join our community and start your immersive journey today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-in-up animation-delay-400">
            <Link href="auth/register" className="w-full sm:w-auto bg-white text-purple-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-colors">
              Get Started
            </Link>
            <Link href="#learn-more" className="w-full sm:w-auto bg-transparent border-2 border-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
              Learn More
            </Link>
          </div>
        </main>

        <footer className="mt-16 text-center text-sm opacity-75">
          © {new Date().getFullYear()} Our Real Estate Platform. All rights reserved.
        </footer>
      </div>
    </div>
  );
}

