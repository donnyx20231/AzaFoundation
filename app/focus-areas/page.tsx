// app/focus-areas/page.tsx
import Image from 'next/image';
import SectionTitle from '../components/SectionTitle';

export default function FocusAreasPage() {
  return (
    <div>
      <div className="bg-neutral-light py-20">
        <div className="container mx-auto px-6">
          <SectionTitle title2="Focus Areas" subtitle="We channel our efforts into key areas that directly touch lives and restore dignity." title={''} />

          <div className="space-y-16">
            {/* Healthcare */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-8xl font-bold text-secondary/30">01</span>
                  <div>
                    <div className="uppercase text-secondary font-semibold tracking-widest">Focus Area</div>
                    <h3 className="text-4xl font-bold">Healthcare Support</h3>
                  </div>
                </div>
                <ul className="space-y-4 text-gray-700 text-2xl">
                  <li className="flex gap-3"><span className="text-secondary font-bold">•</span> Free medical outreaches, health screenings, and awareness campaigns</li>
                  <li className="flex gap-3"><span className="text-secondary font-bold">•</span> Maternal and child healthcare programs</li>
                  <li className="flex gap-3"><span className="text-secondary font-bold">•</span> Support for people with chronic illnesses and disabilities</li>
                </ul>
              </div>
              <div className="relative h-96 rounded-3xl overflow-hidden shadow-xl">
                <Image src="/images/seth.jpg" alt="Healthcare" fill className="object-cover" />
              </div>
            </div>

            {/* Add similar blocks for Education, Community Development, Advocacy */}
            {/* Education */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 relative h-96 rounded-3xl overflow-hidden shadow-xl">
                <Image src="/images/yannis.jpg" alt="Education" fill className="object-cover" />
              </div>
              <div className="order-1 md:order-2">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-8xl font-bold text-primary/30">02</span>
                  <div>
                    <div className="uppercase text-primary font-semibold tracking-widest">Focus Area</div>
                    <h3 className="text-4xl font-bold">Education &amp; Skills Empowerment</h3>
                  </div>
                </div>
                <ul className="space-y-4 text-gray-700 text-2xl">
                  <li className="flex gap-3"><span className="text-primary font-bold">•</span> Scholarships and learning support for children from low-income families</li>
                  <li className="flex gap-3"><span className="text-primary font-bold">•</span> Vocational training and digital literacy programs for youth and women</li>
                  <li className="flex gap-3"><span className="text-primary font-bold">•</span> Advocacy for inclusive and equitable access to education</li>
                </ul>
              </div>
            </div>

            {/* Continue for 03 & 04 similarly */}
          </div>

          {/* Target Beneficiaries */}
          <div className="mt-24 bg-white p-12 rounded-3xl shadow">
            <SectionTitle title="Target Beneficiaries" title2={''} />
            <div className="grid md:grid-cols-2 gap-x-20 gap-y-4 text-2xl text-gray-700">
              <ul className="space-y-3">
                <li>• Vulnerable children &amp; orphans</li>
                <li>• Elderly individuals in need of care</li>
                <li>• Persons with disabilities</li>
              </ul>
              <ul className="space-y-3">
                <li>• Low-income families</li>
                <li>• Rural and underserved communities</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}