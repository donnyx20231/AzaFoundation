// components/Footer.tsx
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-secondary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top padding increased slightly on larger screens */}
        <div className="py-12 sm:py-14 lg:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 lg:gap-16">
            {/* Brand & Mission */}
            <div className="space-y-5 sm:space-y-6">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="relative w-14 h-14 sm:w-16 sm:h-16">
                  <Image
                    src="/images/Logo.png"
                    alt="Azariah Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-accent font-bold text-2xl sm:text-3xl tracking-tight">
                  AZARIAH
                </span>
              </div>
              <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                Restoring dignity through compassionate healthcare, education, and community empowerment.
              </p>
              <p className="text-sm sm:text-base text-gray-300 pt-2">
                © {new Date().getFullYear()} Azariah Life Care Foundation. All rights reserved.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-5 sm:space-y-6">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-accent">
                Quick Links
              </h3>
              <ul className="space-y-3 sm:space-y-4 text-base sm:text-lg">
                <li>
                  <Link href="/about" className="hover:text-accent hover:underline transition">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/focus-areas" className="hover:text-accent hover:underline transition">
                    Focus Areas
                  </Link>
                </li>
                <li>
                  <Link href="/impact" className="hover:text-accent hover:underline transition">
                    Our Impact
                  </Link>
                </li>
                <li>
                  <Link href="/get-involved" className="hover:text-accent hover:underline transition">
                    Get Involved
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-accent hover:underline transition">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-5 sm:space-y-6">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-accent">
                Contact Us
              </h3>
              <ul className="space-y-5 sm:space-y-6 text-base sm:text-lg">
                <li className="flex items-start gap-3 sm:gap-4">
                  <MapPin size={22} className="mt-1 text-accent flex-shrink-0" />
                  <span>
                    No. 7 Ikot Uduak, Off MCC,<br />
                    Calabar, Cross River State, Nigeria.
                  </span>
                </li>
                <li className="flex items-center gap-3 sm:gap-4">
                  <Mail size={22} className="text-accent flex-shrink-0" />
                  <a
                    href="mailto:azariahllcf@gmail.com"
                    className="hover:text-accent hover:underline transition"
                  >
                    azariahllcf@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-3 sm:gap-4">
                  <Phone size={22} className="text-accent flex-shrink-0" />
                  <div>
                    <p>+234 803 226 9519</p>
                    <p>+234 814 000 1359</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div className="space-y-5 sm:space-y-6">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-accent">
                Support Us
              </h3>
              <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                Your generous support helps us reach more vulnerable children, women, and communities.
              </p>
              <Link
                href="/get-involved"
                className="inline-flex items-center gap-3 bg-accent hover:bg-yellow-400 text-secondary px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-200 hover:scale-105 hover:shadow-lg"
              >
                <Heart size={22} fill="currentColor" /> Donate Today
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}