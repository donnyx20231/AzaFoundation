export default function SectionTitle({
  title,
  subtitle,
  title2,
  centered = true,
}: {
  title: string;
  title2:string;
  subtitle?: string;
  centered?: boolean;
}) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 className="text-4xl md:text-5xl font-bold text-grey mb-4">
        {title2}
      </h2>
      <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-2xl text-gray-700 max-w-3xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
}