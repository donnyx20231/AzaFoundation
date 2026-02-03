// app/impact/page.tsx
import Image from 'next/image';
import SectionTitle from '../components/SectionTitle';

export default function ImpactPage() {
  return (
    <div className="bg-white text-2xl">
      <div className="bg-primary py-20 text-white">
        <div className="container mx-auto px-6">
          <SectionTitle title="Our Impact" subtitle="Real stories. Real change." title2={''} />
        </div>
      </div>

      <div className="container mx-auto px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-primary mb-4">HPV Vaccination Project</h2>
          <p className="text-2xl font-medium text-gray-700 mb-12">
            Protecting Girls from Cervical Cancer
          </p>

          <div className="prose text-gray-700 text-lg leading-relaxed mb-12">
            <p>This initiative aimed to protect young girls from cervical cancer through the Human Papilloma Virus (HPV) vaccine. It was a collaborative effort between the Cross River State Government and several NGOs, including Azariah Life Care Foundation.</p>
            <p>Targeting girls aged 9–14, the campaign vaccinated 1 million adolescents in just one month. Community sensitization was carried out in schools, markets, churches, and neighborhoods, with strong support from local stakeholders.</p>
          </div>

          {/* Project Impact Stats */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-secondary/10 p-8 rounded-2xl text-center">
              <div className="text-6xl font-bold text-secondary">1M</div>
              <div className="text-lg mt-2">Girls vaccinated</div>
            </div>
            <div className="bg-primary/10 p-8 rounded-2xl text-center">
              <div className="text-6xl font-bold text-primary">9–14</div>
              <div className="text-lg mt-2">Age range</div>
            </div>
            <div className="bg-accent/20 p-8 rounded-2xl text-center">
              <div className="text-6xl font-bold text-amber-700">1 Month</div>
              <div className="text-lg mt-2">Campaign duration</div>
            </div>
          </div>

          {/* Photo Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <Image src="/images/him.jpg" alt="Vaccination project" fill className="object-cover" />
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <Image src="/images/seth.jpg" alt="Vaccination project" fill className="object-cover" />
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <Image src="/images/yannis.jpg" alt="Vaccination project" fill className="object-cover" />
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <Image src="/images/Doctor.jpeg" alt="Vaccination project" fill className="object-cover" />
            </div>
          </div>

          <div className="prose text-gray-700">
            <h3 className="text-2xl font-semibold">Project Impact</h3>
            <ul className="list-disc pl-6 space-y-2 text-lg">
              <li>1 million girls (ages 9–14) vaccinated within one month</li>
              <li>Massive adolescent turnout demonstrating strong community acceptance</li>
              <li>Extensive sensitization across schools, markets, churches, and local communities</li>
              <li>Active involvement of community leaders in mobilizing support</li>
              <li>New hope for families, reducing the burden of cervical cancer among young girls</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}