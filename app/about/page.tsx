import Image from 'next/image';
import SectionTitle from '../components/SectionTitle';

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="relative h-[300px] sm:h-[400px] md:h-[500px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/yannis.jpg" 
            alt="Healthcare support"
            fill
            className="object-cover brightness-75"
            priority
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4">About Us</h1>
          <p className="text-lg sm:text-xl md:text-2xl max-w-xl">Compassion in action. Dignity restored.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        {/* About Us Section */}
        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center mb-16 sm:mb-20 md:mb-24">
          <div>
            <SectionTitle title="Our Story" centered={false} title2={''} />
            <div className="prose text-gray-700 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed space-y-4 sm:space-y-5">
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
          <div className="relative h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/room.jpeg"
              alt="Family with doctor"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 mb-16 sm:mb-20 md:mb-24">
          <div className="bg-secondary/10 p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-4 sm:mb-5 md:mb-6 text-black">Vision</h3>
            <p className="text-gray-700 leading-relaxed text-base sm:text-lg md:text-xl lg:text-2xl">
              To create a world where every vulnerable individual especially women, children, and underserved communities has equitable access to healthcare, education, and sustainable opportunities for a dignified life.
            </p>
          </div>
          <div className="bg-primary/10 p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4 sm:mb-5 md:mb-6 text-black">Mission</h3>
            <p className="text-gray-700 leading-relaxed text-base sm:text-lg md:text-xl lg:text-2xl">
              We work to improve lives and transform communities by expanding healthcare, advancing education, and supporting livelihoods, while advocating for justice, equality, and protection for the vulnerable.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <SectionTitle title="Core Values" title2={''}  />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8">
          {[
            { title: "Empathy", desc: "We listen, understand, and respond to the needs of those we serve with compassion." },
            { title: "Equity", desc: "We promote fairness, inclusion, and equal opportunities for all, especially the vulnerable." },
            { title: "Service", desc: "We are dedicated to selfless and compassionate care that improves lives." },
            { title: "Integrity", desc: "We operate with transparency, honesty, and accountability in all we do." },
            { title: "Resilience", desc: "We persevere through challenges to deliver sustainable impact." },
          ].map((value, i) => (
            <div key={i} className="bg-white border border-gray-300 p-6 sm:p-7 md:p-8 rounded-xl sm:rounded-2xl hover:shadow-xl transition">
              <div className="text-primary font-bold text-4xl sm:text-5xl md:text-6xl opacity-20 mb-3 sm:mb-4">{(i+1).toString().padStart(2, '0')}</div>
              <h4 className="text-xl sm:text-2xl md:text-3xl font-semibold text-black mb-3 sm:mb-4">{value.title}</h4>
              <p className="text-gray-700 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}