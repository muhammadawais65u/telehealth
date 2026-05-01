"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/Button";

const navItems = [
  { label: "Features", href: "/features" },
  {
    label: "Devices",
    href: "/devices",
    hasDropdown: true,
    dropdownItems: [
      { name: "XK300 Radar", desc: "Contactless vital sign monitoring", icon: "radar", color: "purple" },
      { name: "Tenovi Gateway", desc: "4G LTE cellular hub", icon: "wifi", color: "teal" },
      { name: "Blood Glucose Monitors", desc: "Diabetes management meters", icon: "droplet", color: "orange" },
      { name: "Dexcom CGMs", desc: "Continuous glucose monitors", icon: "activity", color: "green" },
      { name: "Neteera CPPM", desc: "Contactless patient monitoring", icon: "radio", color: "purple" },
      { name: "Weight Scales", desc: "Connected digital scales", icon: "scale", color: "teal" },
    ],
  },
  {
    label: "Programs",
    href: "/programs",
    hasDropdown: true,
    dropdownItems: [
      { name: "Remote Patient Monitoring (RPM)", desc: "Real-time vital sign monitoring", icon: "monitor", color: "blue" },
      { name: "Chronic Care Management (CCM)", desc: "Care coordination for 2+ chronic conditions", icon: "heart", color: "orange" },
      { name: "Remote Therapeutic Monitoring (RTM)", desc: "Musculoskeletal & respiratory monitoring", icon: "bone", color: "green" },
      { name: "Principal Care Management (PCM)", desc: "Single high-risk condition management", icon: "activity", color: "purple" },
      { name: "Behavioral Health Integration (BHI)", desc: "Mental health integration", icon: "brain", color: "pink" },
    ],
  },
  {
    label: "Integrations",
    href: "/integrations",
    hasDropdown: true,
  },
  { label: "Articles", href: "/articles" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#e6ebf1]/60 bg-white/80 backdrop-blur-xl">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-[72px] items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-6 xl:gap-10">
            <Link href="/" className="flex items-center gap-3">
              <span className="text-xl font-bold text-[#0a2540]">CCN Health</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex lg:items-center lg:gap-0.5">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className="relative inline-flex items-center gap-1 px-3 xl:px-4 py-2 text-[0.875rem] xl:text-[0.9375rem] font-medium transition-colors text-[#425466] hover:text-[#0a2540]"
                  >
                    {item.label}
                    {item.hasDropdown && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`transition-transform duration-200 ${
                          activeDropdown === item.label ? "rotate-180" : ""
                        }`}
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    )}
                  </Link>

                  {/* Dropdown */}
                  {item.hasDropdown && activeDropdown === item.label && item.dropdownItems && (
                    <div className="absolute left-0 top-full z-40 pt-1">
                      <div className="border-t border-[#e6ebf1]/60 bg-white/95 backdrop-blur-xl shadow-xl shadow-black/[0.08] rounded-b-xl min-w-[320px] p-4">
                        <div className="space-y-1">
                          {item.dropdownItems.map((dropItem) => (
                            <Link
                              key={dropItem.name}
                              href="#"
                              className="group flex items-start gap-3.5 rounded-xl px-3 py-2.5 transition-all hover:bg-gradient-to-r hover:from-[#f6f9fc] hover:to-[#f0f4ff] hover:shadow-sm"
                            >
                              <div className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-all duration-200 group-hover:scale-110 bg-${dropItem.color}-100`}>
                                <span className="text-lg">●</span>
                              </div>
                              <div className="min-w-0">
                                <p className="text-[0.8125rem] font-medium text-[#0a2540] transition-colors group-hover:text-[#256eff]">
                                  {dropItem.name}
                                </p>
                                <p className="mt-0.5 text-[0.75rem] leading-snug text-[#6b7c93]">
                                  {dropItem.desc}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right side actions */}
          <div className="hidden lg:flex lg:items-center lg:gap-3">
            <Button href="https://app.ccnhealth.com" variant="ghost" size="sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-1"
              >
                <path d="m10 17 5-5-5-5" />
                <path d="M15 12H3" />
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
              </svg>
              Login
            </Button>
            <div className="h-5 w-px bg-[#e6ebf1]" />
            <Button variant="primary" size="sm" showArrow>
              Schedule a Demo
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center p-2.5 text-[#425466] hover:text-[#0a2540] transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-[#e6ebf1]/60">
            <div className="space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-[#425466] hover:text-[#0a2540] hover:bg-[#f6f9fc] rounded-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-[#e6ebf1]/60 space-y-2">
              <Button href="https://app.ccnhealth.com" variant="ghost" className="w-full justify-center">
                Login
              </Button>
              <Button variant="primary" className="w-full justify-center" showArrow>
                Schedule a Demo
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
