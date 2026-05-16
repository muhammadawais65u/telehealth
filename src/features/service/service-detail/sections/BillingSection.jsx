export default function BillingSection({ data }) {
  const billingCodes = data?.billingCodes || [
    {
      code: "99453",
      price: "~$19.32",
      title: "Remote Monitoring Setup & Patient Education",
      description: "Initial setup and patient education on the use of remote monitoring equipment.",
      frequency: "One-time (per episode of care)",
    },
    {
      code: "99454",
      price: "~$55.72",
      title: "Remote Monitoring Device Supply & Daily Recordings",
      description: "Supply of the remote monitoring device with daily recording(s) or programmed alert(s) transmission. Requires minimum 16 days of data collection.",
      frequency: "Monthly (per 30-day period)",
    },
    {
      code: "99445",
      price: "~$55.72",
      title: "Remote Monitoring Device Supply — 2–15 Days",
      description: "Supply of remote monitoring device(s) covering 2–15 days of data collection. New for 2026.",
      frequency: "Monthly (mutually exclusive with 99454)",
    },
    {
      code: "99457",
      price: "~$50.94",
      title: "Remote Physiologic Monitoring Treatment Management — First 20 Minutes",
      description: "Clinical time spent reviewing, interpreting, and acting on remote monitoring data. Requires minimum 20 minutes of interactive communication.",
      frequency: "Monthly (per calendar month)",
    },
    {
      code: "99470",
      price: "~$25.47",
      title: "Remote Physiologic Monitoring Treatment Management — First 10 Minutes",
      description: "Clinical time when total management time is 10–19 minutes per calendar month. New for 2026.",
      frequency: "Monthly (mutually exclusive with 99457)",
    },
    {
      code: "99458",
      price: "~$42.22",
      title: "Remote Physiologic Monitoring Treatment Management — Each Additional 20 Minutes",
      description: "Each additional 20 minutes of clinical time spent on RPM treatment management beyond the initial 20 minutes.",
      frequency: "Monthly (requires base 99457)",
    },
  ];

  return (
    <section id="billing" className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200 mb-6">
            <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm font-medium text-blue-800">Revenue</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            CPT Codes<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">& Billing</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Six CPT codes cover the full RPM workflow — from initial setup through monthly treatment management.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.isArray(billingCodes) ? billingCodes.map((item) => (
            <div key={item.code} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-lg bg-blue-100 text-blue-700 text-sm font-bold">
                  {item.code}
                </span>
                <span className="text-blue-600 font-semibold text-lg">{item.price}</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{item.description}</p>
              <div className="pt-3 border-t border-gray-100">
                <p className="text-xs text-gray-500">{item.frequency}</p>
              </div>
            </div>
          )) : null}
        </div>
      </div>
    </section>
  );
}
