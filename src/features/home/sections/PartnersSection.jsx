"use client";

const partners = [
  { name: "PointClickCare", logo: "/assets/partners/facility/pointclickcare.svg" },
  { name: "ALIS", logo: "/assets/partners/facility/alis-vertical.svg" },
  { name: "Ethizo", logo: "/assets/partners/facility/ethizo.svg" },
  { name: "athenahealth", logo: "/assets/partners/practice/athenahealth.svg" },
  { name: "Charm Health", logo: "/assets/partners/practice/charmhealth.svg" },
  { name: "MatrixCare", logo: "/assets/partners/facility/matrixcare.svg" },
  { name: "Epic", logo: "/assets/partners/practice/epic.svg" },
  { name: "August Health", logo: "/assets/partners/facility/augusthealth.svg" },
  { name: "Tenovi", logo: "/assets/partners/manufacturer/tenovi.svg" },
  { name: "Omron", logo: "/assets/partners/manufacturer/omron.svg" },
  { name: "Trividia", logo: "/assets/partners/manufacturer/trividia.svg" },
  { name: "BodyTrace", logo: "/assets/partners/manufacturer/bodytrace.svg" },
];

const partners2 = [
  { name: "SmartMeter", logo: "/assets/partners/manufacturer/smartmeter.svg" },
  { name: "Norbert Health", logo: "/assets/partners/manufacturer/norberthealth.svg" },
  { name: "Neteera", logo: "/assets/partners/manufacturer/neteera.svg" },
  { name: "TellHealth", logo: "/assets/partners/manufacturer/tellhealth.svg" },
  { name: "Dexcom", logo: "/assets/partners/manufacturer/dexcom.svg" },
  { name: "FreeStyle Libre", logo: "/assets/partners/manufacturer/freestyle-libre.svg" },
  { name: "Xandar Kardian", logo: "/assets/partners/manufacturer/xandarkardian.svg" },
  { name: "Jumper", logo: "/assets/partners/manufacturer/jumper.svg" },
  { name: "ECP", logo: "/assets/partners/manufacturer/ecp.svg" },
  { name: "LiveMetric", logo: "/assets/partners/manufacturer/livemetric.svg" },
  { name: "Withings", logo: "/assets/partners/manufacturer/withings.svg" },
];

function PartnerCard({ partner }) {
  return (
    <div className="flex-shrink-0 flex items-center justify-center w-44 md:w-52 h-20 rounded-xl bg-white border border-gray-100 shadow-sm px-5">
      <img
        src={partner.logo}
        alt={partner.name}
        className="max-h-10 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
      />
    </div>
  );
}

export function PartnersSection() {
  // Duplicate partners for seamless infinite scroll
  const allPartners1 = [...partners, ...partners, ...partners];
  const allPartners2 = [...partners2, ...partners2, ...partners2];

  return (
    <section className="relative bg-white overflow-hidden py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-wider text-[#6b7c93] mb-8">
          Integration & Technology Partners
        </p>
      </div>

      <div className="space-y-4">
        {/* Row 1 - Right to Left */}
        <div className="overflow-hidden">
          <div className="flex gap-4 animate-marquee-right">
            {allPartners1.map((partner, index) => (
              <PartnerCard key={`row1-${index}`} partner={partner} />
            ))}
          </div>
        </div>

        {/* Row 2 - Left to Right */}
        <div className="overflow-hidden">
          <div className="flex gap-4 animate-marquee-left">
            {allPartners2.map((partner, index) => (
              <PartnerCard key={`row2-${index}`} partner={partner} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
