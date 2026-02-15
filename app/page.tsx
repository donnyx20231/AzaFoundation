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
            src="/images/celine.jpg"
            alt="Happy children"
            fill
            className="object-cover brightness-[0.65]"
            priority
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 drop-shadow-2xl">
            Azariah Life Care Foundation
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-6 sm:mb-8 md:mb-10 max-w-3xl lg:max-w-4xl mx-auto drop-shadow-lg leading-relaxed px-4">
            Restoring dignity through compassionate healthcare, education, and community empowerment
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4">
            <Link
              href="/get-involved"
              className="bg-pink-500 hover:bg-white hover:text-black px-8 sm:px-10 py-4 sm:py-5 rounded-lg text-lg sm:text-xl font-semibold transition-all duration-200 hover:scale-105"
            >
              Donate Now
            </Link>
            <Link
              href="/contact"
              className="bg-white hover:bg-pink-500 hover:text-white text-black px-8 sm:px-10 py-4 sm:py-5 rounded-lg text-lg sm:text-xl font-semibold transition-all duration-200 hover:scale-105"
            >
              Get Involved
            </Link>
          </div>
        </div>
      </section>

      {/* Quick About Teaser */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <SectionTitle
            title="Who We Are"
            subtitle="A non-profit dedicated to transforming lives in Cross River State and beyond" 
            title2={''}          
          />
          
          {/* Our Mission & Founder Story */}
          <div className="max-w-7xl mx-auto mt-12 sm:mt-16">
            <div className="grid md:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center mb-12 sm:mb-16">
              {/* Text Content */}
              <div className="space-y-5 sm:space-y-6">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                  Our Commitment to Children in Need
                </h3>
                <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
                  At Azariah Life Care Foundation, we believe every child deserves a chance at a healthy, dignified life. We are passionately committed to reaching vulnerable children across Cross River State and beyond—providing them with essential healthcare, quality education, and the resources they need to thrive.
                </p>
                <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
                  Our work extends beyond immediate relief. We partner with communities to create sustainable change, empowering families with livelihood support, advocating for children's rights, and building a future where no child is left behind. From free medical outreaches to scholarships for disadvantaged students, every initiative is driven by compassion and a commitment to restore dignity.
                </p>
                <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
                  Through healthcare access, education empowerment, livelihood support, and advocacy for justice and equality, we are transforming lives one child, one family, one community at a time.
                </p>
              </div>

              {/* Founder Image Placeholder */}
              <div className="relative h-[350px] sm:h-[450px] md:h-[550px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl bg-gray-200">
                <Image
                  src="/images/caleb.jpeg" // Replace with actual founder image path
                  alt="Mr. Caleb Asuquo - Founder"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Founder Story */}
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 mb-12 sm:mb-16">
              <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="w-1 sm:w-2 h-16 sm:h-20 bg-primary rounded-full flex-shrink-0"></div>
                <div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-3">
                    The Inspiration Behind Azariah
                  </h3>
                  <p className="text-base sm:text-lg text-primary font-semibold">Meet Our Founder: Mr. Caleb Asuquo</p>
                </div>
              </div>
              
              <div className="space-y-4 sm:space-y-5 text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
                <p>
                  In early 2024, <span className="font-semibold text-gray-900">Mr. Caleb Asuquo</span> witnessed firsthand the devastating impact of inadequate healthcare and limited educational opportunities on vulnerable communities in Cross River State. As a compassionate leader with a deep sense of social responsibility, he was moved by the stories of children denied basic medical care, mothers struggling without support, and young people trapped in cycles of poverty with no path forward.
                </p>
                <p>
                  These encounters ignited a vision: to create an organization that would not just provide temporary relief, but would fundamentally transform lives through sustained, compassionate intervention. Throughout 2024, Caleb worked tirelessly—researching, building partnerships, and assembling a team of dedicated professionals who shared his passion for social justice and community empowerment.
                </p>
                <p>
                  By late 2024, that vision became reality. <span className="font-semibold text-gray-900">Azariah Life Care Foundation</span> was officially launched, with a clear mission: to restore dignity to the most vulnerable through healthcare, education, livelihood support, and advocacy. The name "Azariah," meaning "God has helped," reflects the foundation's belief that positive change is possible when compassion meets action.
                </p>
                <p>
                  Since our launch, we have already made significant strides—conducting medical outreaches, providing scholarships to disadvantaged children, supporting women's empowerment programs, and advocating for the rights of the vulnerable. Under Caleb's leadership, Azariah Life Care Foundation continues to grow, driven by an unwavering commitment to create a world where every person, especially children and women, has access to the care and opportunities they deserve.
                </p>
              </div>

              <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-300">
                <p className="text-base sm:text-lg md:text-xl text-gray-800 italic leading-relaxed">
                  "Every child we reach, every life we touch, is a step toward the future we believe in—a future where dignity, opportunity, and hope are accessible to all."
                </p>
                <p className="text-base sm:text-lg text-gray-600 mt-3 sm:mt-4 font-medium">— Mr. Caleb Asuquo, Founder</p>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-12 sm:mt-16">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8 sm:mb-12">
              Our Impact So Far
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              <StatCard number="2,000+" label="Girls Vaccinated" icon={Heart} />
              <StatCard number="150+" label="Children Supported" icon={Users} />
              <StatCard number="10+" label="Outreaches" icon={Stethoscope} />
              <StatCard number="1 Year" label="Of Impact" icon={BookOpen} />
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas Teaser */}
      <section className="py-16 sm:py-20 bg-neutral-light">
        <div className="container mx-auto px-4 sm:px-6">
          <SectionTitle title2="Our Focus Areas" title={''} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <CauseCard
              number="01"
              title="Healthcare Support"
              bgColor="bg-secondary"
              description={
                <>
                  <ul className="list-disc pl-5 space-y-2 text-base sm:text-lg">
                    <li>Free medical outreaches & screenings</li>
                    <li>Maternal and child healthcare</li>
                    <li>Support for chronic illnesses & disabilities</li>
                  </ul>
                </>
              }
            />
            {/* Add more cards for Education, Community Dev, Advocacy */}
            <CauseCard
              number="02"
              title="Education "
              bgColor="bg-secondary"
              description={
                <>
                  <ul className="list-disc pl-5 space-y-2 text-base sm:text-lg">
                    <li>Free education for underprivileged children</li>
                    <li>Scholarships and learning materials</li>
                    <li>Teacher training and support programs</li>
                  </ul>
                </>
              }
            />
          </div>
          <div className="text-center mt-10 sm:mt-12">
            <Link href="/focus-areas" className="text-primary hover:underline text-lg sm:text-xl font-medium hover:text-primary/80 transition">
              See All Focus Areas →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-primary py-12 sm:py-16 text-white text-center">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Become Part of the Change</h2>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
            Your support helps us reach more vulnerable children, women, and communities.
          </p>
          <Link
            href="/get-involved"
            className="inline-flex bg-pink-500 hover:bg-pink-600 hover:scale-105 hover:shadow-lg text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-200 cursor-pointer"
          >
            Support Our Mission Today
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
    <div className="text-center p-4 sm:p-6 bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
      <Icon className="mx-auto text-black mb-3 sm:mb-4" size={40} />
      <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-2">{number}</div>
      <div className="text-black font-medium text-base sm:text-lg">{label}</div>
    </div>
  );
}