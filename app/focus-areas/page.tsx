// app/focus-areas/page.tsx
import Image from 'next/image';
import SectionTitle from '../components/SectionTitle';

export default function FocusAreasPage() {
  return (
    <div>
      <div className="bg-neutral-light py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <SectionTitle title2="Focus Areas" subtitle="We channel our efforts into key areas that directly touch lives and restore dignity." title={''} />

          <div className="space-y-12 sm:space-y-14 md:space-y-16">
            {/* Healthcare */}
            <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5 md:mb-6">
                  <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-secondary/80">01</span>
                  <div>
                    <div className="uppercase text-secondary font-semibold tracking-widest text-xs sm:text-sm">Focus Area</div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold">Healthcare Support</h3>
                  </div>
                </div>
                <ul className="space-y-3 sm:space-y-4 text-gray-700 text-base sm:text-lg md:text-xl lg:text-2xl">
                  <li className="flex gap-2 sm:gap-3 leading-relaxed"><span className="text-secondary font-bold flex-shrink-0">•</span> <span>Free medical outreaches, health screenings, and awareness campaigns</span></li>
                  <li className="flex gap-2 sm:gap-3 leading-relaxed"><span className="text-secondary font-bold flex-shrink-0">•</span> <span>Maternal and child healthcare programs</span></li>
                  <li className="flex gap-2 sm:gap-3 leading-relaxed"><span className="text-secondary font-bold flex-shrink-0">•</span> <span>Support for people with chronic illnesses and disabilities</span></li>
                </ul>
              </div>
              <div className="relative h-64 sm:h-80 md:h-96 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl">
                <Image src="/images/hosp1.jpeg" alt="Healthcare" fill className="object-cover" />
              </div>
            </div>

            {/* Education */}
            <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
              <div className="order-2 md:order-1 relative h-64 sm:h-80 md:h-96 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl">
                <Image src="/images/hosp2.jpeg" alt="Education" fill className="object-cover" />
              </div>
              <div className="order-1 md:order-2">
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5 md:mb-6">
                  <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-primary/80">02</span>
                  <div>
                    <div className="uppercase text-primary font-semibold tracking-widest text-xs sm:text-sm">Focus Area</div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold">Education &amp; Skills Empowerment</h3>
                  </div>
                </div>
                <ul className="space-y-3 sm:space-y-4 text-gray-700 text-base sm:text-lg md:text-xl lg:text-2xl">
                  <li className="flex gap-2 sm:gap-3 leading-relaxed"><span className="text-primary font-bold flex-shrink-0">•</span> <span>Scholarships and learning support for children from low-income families</span></li>
                  <li className="flex gap-2 sm:gap-3 leading-relaxed"><span className="text-primary font-bold flex-shrink-0">•</span> <span>Vocational training and digital literacy programs for youth and women</span></li>
                  <li className="flex gap-2 sm:gap-3 leading-relaxed"><span className="text-primary font-bold flex-shrink-0">•</span> <span>Advocacy for inclusive and equitable access to education</span></li>
                </ul>
              </div>
            </div>

            {/* Community Development */}
            <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5 md:mb-6">
                  <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-secondary/80">03</span>
                  <div>
                    <div className="uppercase text-secondary font-semibold tracking-widest text-xs sm:text-sm">Focus Area</div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold">Community Development</h3>
                  </div>
                </div>
                <ul className="space-y-3 sm:space-y-4 text-gray-700 text-base sm:text-lg md:text-xl lg:text-2xl">
                  <li className="flex gap-2 sm:gap-3 leading-relaxed"><span className="text-secondary font-bold flex-shrink-0">•</span> <span>Livelihood programs including cooperative farming and small business support</span></li>
                  <li className="flex gap-2 sm:gap-3 leading-relaxed"><span className="text-secondary font-bold flex-shrink-0">•</span> <span>Infrastructure development in underserved communities</span></li>
                  <li className="flex gap-2 sm:gap-3 leading-relaxed"><span className="text-secondary font-bold flex-shrink-0">•</span> <span>Economic empowerment initiatives for vulnerable groups</span></li>
                </ul>
              </div>
              <div className="relative h-64 sm:h-80 md:h-96 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl">
                <Image src="/images/clasout.jpeg" alt="Community Development" fill className="object-cover" />
              </div>
            </div>

            {/* Advocacy */}
            <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
              <div className="order-2 md:order-1 relative h-64 sm:h-80 md:h-96 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl">
                <Image src="/images/classroom1.jpeg" alt="Advocacy" fill className="object-cover" />
              </div>
              <div className="order-1 md:order-2">
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5 md:mb-6">
                  <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-primary/80">04</span>
                  <div>
                    <div className="uppercase text-primary font-semibold tracking-widest text-xs sm:text-sm">Focus Area</div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold">Advocacy &amp; Social Justice</h3>
                  </div>
                </div>
                <ul className="space-y-3 sm:space-y-4 text-gray-700 text-base sm:text-lg md:text-xl lg:text-2xl">
                  <li className="flex gap-2 sm:gap-3 leading-relaxed"><span className="text-primary font-bold flex-shrink-0">•</span> <span>Campaigns against gender-based violence and child abuse</span></li>
                  <li className="flex gap-2 sm:gap-3 leading-relaxed"><span className="text-primary font-bold flex-shrink-0">•</span> <span>Mental health awareness and support programs</span></li>
                  <li className="flex gap-2 sm:gap-3 leading-relaxed"><span className="text-primary font-bold flex-shrink-0">•</span> <span>Promotion of human rights and social equity</span></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Target Beneficiaries */}
          <div className="mt-16 sm:mt-20 md:mt-24 bg-white p-8 sm:p-10 md:p-12 rounded-2xl sm:rounded-3xl shadow-lg">
            <SectionTitle title="Target Beneficiaries" title2={''} />
            <div className="grid sm:grid-cols-2 gap-x-10 sm:gap-x-12 md:gap-x-16 lg:gap-x-20 gap-y-3 sm:gap-y-4 text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700">
              <ul className="space-y-2 sm:space-y-3">
                <li className="flex gap-2"><span className="flex-shrink-0">•</span> <span>Vulnerable children &amp; orphans</span></li>
                <li className="flex gap-2"><span className="flex-shrink-0">•</span> <span>Elderly individuals in need of care</span></li>
                <li className="flex gap-2"><span className="flex-shrink-0">•</span> <span>Persons with disabilities</span></li>
              </ul>
              <ul className="space-y-2 sm:space-y-3">
                <li className="flex gap-2"><span className="flex-shrink-0">•</span> <span>Low-income families</span></li>
                <li className="flex gap-2"><span className="flex-shrink-0">•</span> <span>Rural and underserved communities</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}