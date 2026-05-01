"use client";

import Link from "next/link";
import { Container } from "@/components/Container";

const footerLinks = {
  Programs: [
    { label: "Remote Patient Monitoring", href: "/programs/rpm" },
    { label: "Chronic Care Management", href: "/programs/ccm" },
    { label: "Remote Therapeutic Monitoring", href: "/programs/rtm" },
    { label: "Principal Care Management", href: "/programs/pcm" },
    { label: "Behavioral Health Integration", href: "/programs/bhi" },
  ],
  Devices: [
    { label: "Blood Pressure Monitors", href: "/devices/bpm" },
    { label: "Blood Glucose Monitors", href: "/devices/bgm" },
    { label: "Weight Scales", href: "/devices/weight-scale" },
    { label: "Pulse Oximeters", href: "/devices/pulse-oximeter" },
    { label: "CGM Devices", href: "/devices/cgm" },
  ],
  Integrations: [
    { label: "PointClickCare", href: "/integrations/pointclickcare" },
    { label: "athenahealth", href: "/integrations/athenahealth" },
    { label: "Epic", href: "/integrations/epic" },
    { label: "ALIS", href: "/integrations/alis" },
    { label: "View All EHRs", href: "/integrations" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Articles", href: "/articles" },
    { label: "Contact", href: "/contact" },
    { label: "Careers", href: "/careers" },
    { label: "Privacy Policy", href: "/privacy" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-[#0a2540] border-t border-white/10">
      <Container className="py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-8 lg:mb-0">
            <Link href="/" className="text-xl font-bold text-white mb-4 block">
              CCN Health
            </Link>
            <p className="text-sm text-white/50 leading-relaxed max-w-xs">
              Powering the highest-impact remote patient monitoring and care management programs across all 50 states.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href="https://www.linkedin.com/company/ccn-health/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Links columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} CCN Health. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-sm text-white/40 hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-sm text-white/40 hover:text-white transition-colors">
              Terms
            </Link>
            <Link href="/hipaa" className="text-sm text-white/40 hover:text-white transition-colors">
              HIPAA
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
