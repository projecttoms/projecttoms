'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-2xl font-bold text-gray-800">
          ProjectToms
        </Link>

        <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
          <Link href="#tjenester" className="hover:text-pink-500 transition">Tjenester</Link>
          <Link href="#ommeg" className="hover:text-pink-500 transition">Om meg</Link>
          <Link href="#kontakt" className="hover:text-pink-500 transition">Kontakt</Link>
          <Link href="#start" className="bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600 transition">
            Start nå
          </Link>
        </nav>
      </div>
    </header>
  );
}
