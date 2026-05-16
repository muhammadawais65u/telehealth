export default function StatsBanner({ data }) {
  const stats = data?.stats || [
    { value: "$175–220", label: "Monthly Revenue Per Patient" },
    { value: "6", label: "Billable CPT Codes" },
    { value: "6", label: "Qualifying Conditions" },
  ];

  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-indigo-600 py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-3 gap-8 text-center">
          {Array.isArray(stats) ? stats.map((stat, index) => (
            <div key={index}>
              <p className="text-4xl sm:text-5xl font-bold text-white mb-2">
                {stat.value}
              </p>
              <p className="text-sm text-white/80 font-medium uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          )) : null}
        </div>
      </div>
    </section>
  );
}
