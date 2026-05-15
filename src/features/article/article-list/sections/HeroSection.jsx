export default function HeroSection() {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="relative py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-blue-600 mb-4 tracking-wide uppercase">Resources</p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-light tracking-tight text-gray-900 leading-[0.95] mb-5">
            Articles & Guides
          </h1>
          <p className="max-w-2xl text-lg text-gray-600 leading-relaxed font-light">
            168 blog articles on RPM, CCM, and Medicare billing plus 3,614+ integration guides across 8 EHR platforms, 11 care settings, and 9 specialties.
          </p>
        </div>
      </div>
    </section>
  );
}
