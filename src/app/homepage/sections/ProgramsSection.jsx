"use client";

import { useState } from "react";

const organizationTypes = [
  { id: "solo", name: "Solo Practice", icon: "user" },
  { id: "multi", name: "Multi-Practice", icon: "building" },
  { id: "senior", name: "Senior Living", icon: "hospital" },
  { id: "home", name: "Home Health", icon: "house" }
];

const organizationData = {
  solo: {
    title: "Solo Practice",
    description: "A single provider managing their own patient panel with streamlined workflows and automated billing.",
    features: [
      "Patient enrollment automation",
      "Automated vitals collection",
      "Medicare billing support",
      "Mobile clinician app"
    ]
  },
  multi: {
    title: "Multi-Practice",
    description: "A physician group or MSO managing multiple practice locations. Organization-level analytics cascade into practice-level dashboards — each doctor sees only their patients.",
    features: [
      "Organization-wide analytics & reporting",
      "Practice-level dashboards with role-based access",
      "Cross-practice patient attribution",
      "Consolidated billing across all providers"
    ]
  },
  senior: {
    title: "Senior Living",
    description: "Senior living communities managing resident health across multiple care levels with centralized oversight.",
    features: [
      "Facility-wide resident monitoring",
      "Staff assignment workflows",
      "Family portal access",
      "Regulatory compliance reporting"
    ]
  },
  home: {
    title: "Home Health",
    description: "Home health agencies coordinating care across multiple patient homes with field staff management.",
    features: [
      "Field staff scheduling",
      "Patient visit tracking",
      "Medication adherence monitoring",
      "Outcome reporting"
    ]
  }
};

const Icons = {
  user: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
      <circle cx="12" cy="7" r="4"></circle>
    </svg>
  ),
  building: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 12h4"></path>
      <path d="M10 8h4"></path>
      <path d="M14 21v-3a2 2 0 0 0-4 0v3"></path>
      <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path>
      <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path>
    </svg>
  ),
  hospital: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 7v4"></path>
      <path d="M14 21v-3a2 2 0 0 0-4 0v3"></path>
      <path d="M14 9h-4"></path>
      <path d="M18 11h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2"></path>
      <path d="M18 21V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16"></path>
    </svg>
  ),
  house: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
      <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
    </svg>
  )
};

function OrgChart() {
  const [selectedOrg, setSelectedOrg] = useState("multi");

  const data = organizationData[selectedOrg];

  return (
    <div className="relative rounded-2xl bg-[#122a4e] border border-white/[0.08] overflow-hidden min-h-[340px]">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.05]" 
           style={{
             backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.5) 1px, transparent 1px)",
             backgroundSize: "40px 40px"
           }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#256eff]/[0.10] rounded-full blur-3xl pointer-events-none" />
      
      <div className="relative px-4 sm:px-8 py-8 sm:py-10">
        <div className="flex flex-col items-center">
          {/* Organization node */}
          <div className="relative rounded-xl border border-white/[0.12] bg-white/[0.06] shadow-[0_0_20px_rgba(37,110,255,0.08)] hover:border-white/20 hover:bg-white/[0.09] transition-all duration-300 px-6 py-4">
            <div className="flex items-center gap-2.5">
              <div className="shrink-0 flex items-center justify-center rounded-lg w-9 h-9 bg-[#256eff]/25">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#256eff]">
                  <path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"></path>
                  <path d="M5 21h14"></path>
                </svg>
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-white tracking-tight leading-tight">Organization</p>
                <p className="text-[10px] text-white/50 leading-tight mt-0.5">Admin Dashboard</p>
              </div>
            </div>
          </div>

          {/* Connection lines and practice nodes */}
          <div className="mt-4">
            <div className="w-px mx-auto h-5" style={{ background: "linear-gradient(rgba(37, 110, 255, 0.35), rgba(37, 110, 255, 0.35))", boxShadow: "rgba(37, 110, 255, 0.2) 0px 0px 6px" }} />
            
            <div className="grid grid-cols-2 gap-8 mt-4">
              {/* Practice A */}
              <div className="flex flex-col items-center">
                <div className="relative rounded-xl border border-white/[0.12] bg-white/[0.06] shadow-[0_0_20px_rgba(37,110,255,0.08)] hover:border-white/20 hover:bg-white/[0.09] transition-all duration-300 px-5 py-3.5">
                  <div className="flex items-center gap-2.5">
                    <div className="shrink-0 flex items-center justify-center rounded-lg w-7 h-7 bg-white/[0.08]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/70">
                        <path d="M10 12h4"></path>
                        <path d="M10 8h4"></path>
                        <path d="M14 21v-3a2 2 0 0 0-4 0v3"></path>
                        <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path>
                        <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path>
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <p className="text-[13px] font-semibold text-white tracking-tight leading-tight">Practice A</p>
                      <p className="text-[10px] text-white/50 leading-tight mt-0.5">Cardiology</p>
                    </div>
                  </div>
                  <span className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 whitespace-nowrap px-2 py-0.5 rounded-full text-[9px] font-bold tracking-wider uppercase bg-white/[0.08] text-white/60 border border-white/[0.10]">athenahealth</span>
                </div>
                
                <div className="w-px mx-auto h-6 mt-4" style={{ background: "linear-gradient(rgba(37, 110, 255, 0.35), rgba(37, 110, 255, 0.35))", boxShadow: "rgba(37, 110, 255, 0.2) 0px 0px 6px" }} />
                
                <div className="relative rounded-xl border border-white/[0.12] bg-white/[0.06] shadow-[0_0_20px_rgba(37,110,255,0.08)] hover:border-white/20 hover:bg-white/[0.09] transition-all duration-300 px-4 py-3">
                  <div className="flex items-center gap-2.5">
                    <div className="shrink-0 flex items-center justify-center rounded-lg w-7 h-7 bg-white/[0.08]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/70">
                        <path d="M11 2v2"></path>
                        <path d="M5 2v2"></path>
                        <path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"></path>
                        <path d="M8 15a6 6 0 0 0 12 0v-3"></path>
                        <circle cx="20" cy="10" r="2"></circle>
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <p className="text-[13px] font-medium text-white tracking-tight leading-tight">Dr. Jones</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Practice B */}
              <div className="flex flex-col items-center">
                <div className="relative rounded-xl border border-white/[0.12] bg-white/[0.06] shadow-[0_0_20px_rgba(37,110,255,0.08)] hover:border-white/20 hover:bg-white/[0.09] transition-all duration-300 px-5 py-3.5">
                  <div className="flex items-center gap-2.5">
                    <div className="shrink-0 flex items-center justify-center rounded-lg w-7 h-7 bg-white/[0.08]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/70">
                        <path d="M10 12h4"></path>
                        <path d="M10 8h4"></path>
                        <path d="M14 21v-3a2 2 0 0 0-4 0v3"></path>
                        <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path>
                        <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path>
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <p className="text-[13px] font-semibold text-white tracking-tight leading-tight">Practice B</p>
                      <p className="text-[10px] text-white/50 leading-tight mt-0.5">Endocrinology</p>
                    </div>
                  </div>
                  <span className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 whitespace-nowrap px-2 py-0.5 rounded-full text-[9px] font-bold tracking-wider uppercase bg-white/[0.08] text-white/60 border border-white/[0.10]">Epic</span>
                </div>
                
                <div className="w-px mx-auto h-6 mt-4" style={{ background: "linear-gradient(rgba(37, 110, 255, 0.35), rgba(37, 110, 255, 0.35))", boxShadow: "rgba(37, 110, 255, 0.2) 0px 0px 6px" }} />
                
                <div className="relative rounded-xl border border-white/[0.12] bg-white/[0.06] shadow-[0_0_20px_rgba(37,110,255,0.08)] hover:border-white/20 hover:bg-white/[0.09] transition-all duration-300 px-4 py-3">
                  <div className="flex items-center gap-2.5">
                    <div className="shrink-0 flex items-center justify-center rounded-lg w-7 h-7 bg-white/[0.08]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/70">
                        <path d="M11 2v2"></path>
                        <path d="M5 2v2"></path>
                        <path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"></path>
                        <path d="M8 15a6 6 0 0 0 12 0v-3"></path>
                        <circle cx="20" cy="10" r="2"></circle>
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <p className="text-[13px] font-medium text-white tracking-tight leading-tight">Dr. Lee</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProgramsSection() {
  const [selectedOrg, setSelectedOrg] = useState("multi");

  const data = organizationData[selectedOrg];

  return (
    <section className="relative bg-[#f1f5f9] overflow-hidden py-16">
      <div className="relative">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#6b7c93] mb-4">
              Platform
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a2540] mb-4">
              One platform for all five Medicare programs
            </h2>
            <p className="text-lg text-[#6b7c93] mx-auto max-w-3xl">
              RPM, CCM, PCM, BHI, and RTM — managed from a single dashboard whether you're a solo practice or a 50-facility operator.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-10">
            {/* Organization type selector and chart */}
            <div className="lg:col-span-3">
              <div className="flex flex-wrap gap-2 mb-6">
                {organizationTypes.map((type) => {
                  const IconComponent = Icons[type.icon];
                  return (
                    <button
                      key={type.id}
                      onClick={() => setSelectedOrg(type.id)}
                      className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold tracking-tight transition-all duration-200 cursor-pointer ${
                        selectedOrg === type.id
                          ? "bg-[#0a2540] text-white shadow-lg"
                          : "bg-[#0a2540]/[0.04] text-[#0a2540] hover:bg-[#0a2540]/[0.08]"
                      }`}
                    >
                      <IconComponent />
                      {type.name}
                    </button>
                  );
                })}
              </div>

              <OrgChart />
            </div>

            {/* Features list */}
            <div className="lg:col-span-2 flex flex-col justify-center">
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-1 h-5 rounded-full bg-[#256eff]" />
                    <h3 className="text-xl font-semibold tracking-tight text-[#0a2540]">{data.title}</h3>
                  </div>
                  <p className="text-[#425466] text-[15px] leading-relaxed">{data.description}</p>
                </div>

                <ul className="space-y-3">
                  {data.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#256eff] mt-0.5 shrink-0">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>
                      <span className="text-sm text-[#425466] leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
