export default function KeyStats({ data }) {
  const keyStats = data?.keyStats || [
    { value: "16+", label: "Days of Data Required" },
    { value: "11", label: "Monitoring Types" },
    { value: "6", label: "Billable CPT Codes" },
    { value: "$168", label: "Avg Monthly Per Patient" },
  ];

  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-indigo-600 py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {Array.isArray(keyStats) ? keyStats.map((stat, index) => (
            <div key={index}>
              <p className="text-4xl sm:text-5xl font-bold text-white mb-2">{stat.value}</p>
              <p className="text-sm text-white/80 font-medium uppercase tracking-wider">{stat.label}</p>
            </div>
          )) : null}
        </div>
      </div>
    </section>
  );
}
