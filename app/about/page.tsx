// app/about/page.tsx
import Image from 'next/image';
import SectionTitle from '../components/SectionTitle';

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero - responsive height */}
      <div className="relative h-[320px] sm:h-[400px] md:h-[480px] lg:h-[560px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/yannis.jpg"
            alt="Community support"
            fill
            className="object-cover brightness-75"
            priority
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3 sm:mb-4 drop-shadow-2xl">
            About Us
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl max-w-2xl drop-shadow-lg">
            Compassion in action. Dignity restored.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* About Us Section */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 lg:mb-24">
          <div>
            <SectionTitle title="Our Story" centered={false} title2={''} />
            <div className="prose prose-lg sm:prose-xl text-gray-700 leading-relaxed space-y-5 sm:space-y-6">
              <p>
                Azariah Life Care Foundation is a not-for-profit, non-political organization dedicated to improving lives through healthcare, empowerment, and community development.
              </p>
              <p>
                We work to expand access to quality healthcare, empower women and youth with education, vocational training, and digital skills, and promote social justice, gender equality, and child protection.
              </p>
              <p>
                Our initiatives include community health outreaches, scholarships for disadvantaged children, livelihood support such as cooperative farming and small businesses, and advocacy campaigns on issues like gender-based violence and mental wellness.
              </p>
            </div>
          </div>

          <div className="relative h-64 sm:h-80 md:h-96 lg:h-[420px] rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/images/Doctor.jpeg"
              alt="Healthcare team"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-16 lg:mb-24">
          <div className="bg-secondary/10 p-6 sm:p-8 lg:p-10 rounded-2xl lg:rounded-3xl">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary mb-4 sm:mb-6">
              Vision
            </h3>
            <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
              To create a world where every vulnerable individual especially women, children, and underserved communities has equitable access to healthcare, education, and sustainable opportunities for a dignified life.
            </p>
          </div>

          <div className="bg-primary/10 p-6 sm:p-8 lg:p-10 rounded-2xl lg:rounded-3xl">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4 sm:mb-6">
              Mission
            </h3>
            <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
              We work to improve lives and transform communities by expanding healthcare, advancing education, and supporting livelihoods, while advocating for justice, equality, and protection for the vulnerable.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <SectionTitle title="Core Values" title2={''} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {[
            { title: "Empathy", desc: "We listen, understand, and respond to the needs of those we serve with compassion." },
            { title: "Equity", desc: "We promote fairness, inclusion, and equal opportunities for all, especially the vulnerable." },
            { title: "Service", desc: "We are dedicated to selfless and compassionate care that improves lives." },
            { title: "Integrity", desc: "We operate with transparency, honesty, and accountability in all we do." },
            { title: "Resilience", desc: "We persevere through challenges to deliver sustainable impact." },
          ].map((value, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 p-6 sm:p-7 lg:p-8 rounded-2xl hover:shadow-xl transition-all duration-300"
            >
              <div className="text-primary font-bold text-5xl sm:text-6xl lg:text-7xl opacity-20 mb-3 sm:mb-4">
                {(i + 1).toString().padStart(2, '0')}
              </div>
              <h4 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3 sm:mb-4">
                {value.title}
              </h4>
              <p className="text-base sm:text-lg text-gray-700">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}