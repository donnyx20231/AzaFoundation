import Image from 'next/image';
import Link from 'next/link';
import { Heart, Users, Stethoscope, BookOpen, type LucideIcon } from 'lucide-react';

import SectionTitle from './components/SectionTitle';
import CauseCard from './components/CauseCard';

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/celine.jpg" // replace with your image
            alt="Happy children"
            fill
            className="object-cover brightness-[0.65]"
            priority
          />
        </div>
        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 drop-shadow-2xl">
  Azariah Life Care Foundation
</h1>
<p className="text-lg sm:text-2xl md:text-3xl lg:text-4xl mb-8 sm:mb-10 max-w-3xl lg:max-w-4xl mx-auto drop-shadow-lg">
  Restoring dignity through compassionate healthcare, education, and community empowerment
</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/get-involved"
              className="bg-primary hover:bg-primary-dark text-white px-10 py-5 rounded-lg text-xl font-semibold transition"
            >
              Donate Now
            </Link>
            <Link
              href="/contact"
              className="bg-accent hover:bg-yellow-400 text-neutral-dark px-10 py-5 rounded-lg text-xl font-semibold transition"
            >
              Get Involved
            </Link>
          </div>
        </div>
      </section>

      {/* Quick About Teaser */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <SectionTitle
            title="Who We Are"
            subtitle="A non-profit dedicated to transforming lives in Cross River State and beyond" title2={''}          />
          <p className="text-lg text-gray-700 max-w-4xl mx-auto text-center leading-relaxed">
            Azariah Life Care Foundation is committed to improving lives through healthcare access, education empowerment, livelihood support, and advocacy for justice and equality...
          </p>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StatCard number="1M+" label="Girls Vaccinated" icon={Heart} />
            <StatCard number="1000s" label="Children Supported" icon={Users} />
            <StatCard number="50+" label="Outreaches" icon={Stethoscope} />
            <StatCard number="Years" label="Of Impact" icon={BookOpen} />
          </div>
        </div>
      </section>

      {/* Focus Areas Teaser */}
      <section className="py-20 bg-neutral-light">
        <div className="container mx-auto px-6">
          <SectionTitle title2="Our Focus Areas" title={''} />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CauseCard
              number="01"
              title="Healthcare Support"
              bgColor="bg-secondary"
              description={
                <>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Free medical outreaches & screenings</li>
                    <li>Maternal and child healthcare</li>
                    <li>Support for chronic illnesses & disabilities</li>
                  </ul>
                </>
              }
            />
            {/* Add more cards for Education, Community Dev, Advocacy */}
          </div>
          <div className="text-center mt-12">
            <Link href="/focus-areas" className="text-primary hover:underline text-xl font-medium">
              See All Focus Areas →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-primary py-16 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Become Part of the Change</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Your support helps us reach more vulnerable children, women, and communities.
          </p>
         <Link
  href="/get-involved"
  className="hidden md:inline-flex bg-yellow-400 hover:bg-yellow-500 hover:scale-105 hover:shadow-lg text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 cursor-pointer"
>
  Support our Mission today
</Link>
        </div>
      </section>
    </main>
  );
}

// Simple Stat component
function StatCard({
  number,
  label,
  icon: Icon,
}: {
  number: string;
  label: string;
  icon: LucideIcon;
}) {
  return (
    <div className="mt-8 sm:mt-12 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
      <Icon className="mx-auto text-primary mb-4" size={48} />
      <div className="text-4xl font-bold text-primary mb-2">{number}</div>
      <div className="text-gray-600 font-medium">{label}</div>
    </div>
  );
}