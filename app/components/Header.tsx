
import Link from 'next/link';
import Image from 'next/image';
import { Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
         <div className="relative w-16 h-16 md:w-30 md:h-30">
                         <Image
             src="/images/Logo.png"
             alt="Azariah Logo"
             fill
             className="object-contain"  
             priority                             
           />
                         </div>
          <div className="flex flex-col">
            <span className="text-primary font-bold text-xl">AZARIAH</span>
            <span className="text-secondary text-sm font-medium">Life Care Foundation</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-23">
         <Link href="/" className="text-gray-700 hover:text-primary font-medium text-2xl hover:text-3xl hover:font-bold transition">Home</Link>
          <Link href="/about" className="text-gray-700 hover:text-primary font-medium text-2xl hover:text-3xl hover:font-bold transition">About</Link>
          <Link href="/focus-areas" className="text-gray-700 hover:text-primary font-medium text-2xl hover:text-3xl hover:font-bold transition">Focus Areas</Link>
          <Link href="/impact" className="text-gray-700 hover:text-primary font-medium text-2xl hover:text-3xl hover:font-bold transition">Impact</Link>
          <Link href="/get-involved" className="text-gray-700 hover:text-primary font-medium text-2xl hover:text-3xl hover:font-bold transition">Get Involved</Link>
          <Link href="/contact" className="text-gray-700 hover:text-primary font-medium text-2xl hover:text-3xl hover:font-bold transition">Contact</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-primary">
          <Menu size={28} />
        </button>

        {/* Donate CTA */}
        <Link
  href="/get-involved"
  className="hidden md:inline-flex bg-pink-500 hover:bg-pink-600 hover:scale-105 hover:shadow-lg text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 cursor-pointer"
>
  Donate Now
</Link>
      </div>
    </header>
  );
}