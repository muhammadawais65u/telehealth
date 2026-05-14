"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "./Button";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Services",
    href: "/services",
    hasDropdown: true,
    dropdownItems: [
      { name: "Remote Patient Monitoring", desc: "Real-time vital sign monitoring", icon: "monitor", color: "blue" },
      { name: "Chronic Care Management", desc: "Care coordination for chronic conditions", icon: "heart", color: "orange" },
      { name: "Remote Therapeutic Monitoring", desc: "Musculoskeletal & respiratory monitoring", icon: "bone", color: "green" },
      { name: "Principal Care Management", desc: "Single high-risk condition management", icon: "activity", color: "purple" },
      { name: "Behavioral Health Integration", desc: "Mental health integration", icon: "brain", color: "pink" },
      { name: "Device Integration", desc: "Connect various health devices", icon: "device", color: "teal" },
      { name: "Data Analytics", desc: "Health data insights and reporting", icon: "chart", color: "indigo" },
      { name: "Telehealth Consultations", desc: "Virtual doctor appointments", icon: "video", color: "red" },
    ],
  },
  {
    label: "Articles",
    href: "/articles",
    hasDropdown: true,
    dropdownItems: [
      { name: "Latest Articles", desc: "Most recent healthcare insights", icon: "article", color: "blue" },
      { name: "Patient Success Stories", desc: "Real patient experiences", icon: "story", color: "green" },
      { name: "Healthcare Tips", desc: "Expert health advice", icon: "tips", color: "orange" },
      { name: "Technology Updates", desc: "Latest in telehealth tech", icon: "tech", color: "purple" },
    ],
  },
  { label: "Contact Us", href: "/contact" },
  { label: "FAQ", href: "/faqs" },
  { label: "Press Kit", href: "/press-kit" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200/60 bg-white/95 backdrop-blur-xl shadow-sm">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-[80px] items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <span className="text-white font-bold text-lg font-sans">CC</span>
              </div>
              <div>
                <span className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 font-sans">CCN Health</span>
                <p className="text-xs text-gray-500 hidden sm:block font-sans">Telehealth Solutions</p>
              </div>
            </Link>
          </div>

          {/* Centered Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:justify-center lg:flex-1 lg:mx-8">
            <div className="flex items-center gap-1">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className="relative inline-flex items-center gap-1.5 px-4 xl:px-5 py-3 text-[0.9rem] xl:text-[0.95rem] font-medium transition-all duration-300 text-gray-700 hover:text-blue-600 hover:bg-blue-50/50 rounded-lg group font-sans"
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
                        className={`transition-all duration-300 text-gray-400 group-hover:text-blue-600 ${
                          activeDropdown === item.label ? "rotate-180" : ""
                        }`}
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    )}
                  </Link>

                  {/* Enhanced Dropdown */}
                  {item.hasDropdown && activeDropdown === item.label && item.dropdownItems && (
                    <div className="absolute left-1/2 transform -translate-x-1/2 top-full z-40 pt-3">
                      <div className="border border-gray-200/60 bg-white/98 backdrop-blur-xl shadow-2xl shadow-gray-900/10 rounded-2xl min-w-[400px] p-6 border-t-2 border-t-blue-500">
                        <div className="mb-4">
                          <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-3 font-sans">{item.label}</h3>
                        </div>
                        <div className="space-y-1">
                          {item.dropdownItems.map((dropItem) => (
                            <Link
                              key={dropItem.name}
                              href="#"
                              className="group flex items-start gap-4 rounded-xl px-4 py-3.5 transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:shadow-md"
                            >
                              <div className={`mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg bg-gradient-to-br from-${dropItem.color}-50 to-${dropItem.color}-100 border border-${dropItem.color}-200`}>
                                <span className="text-lg font-semibold text-${dropItem.color}-600 font-sans">●</span>
                              </div>
                              <div className="min-w-0">
                                <p className="text-[0.875rem] font-semibold text-gray-900 transition-colors duration-300 group-hover:text-blue-600 font-sans">
                                  {dropItem.name}
                                </p>
                                <p className="mt-1 text-[0.8125rem] leading-relaxed text-gray-600 font-sans">
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
          <div className="hidden lg:flex lg:items-center lg:gap-4 flex-shrink-0">
            <Button href="https://app.ccnhealth.com" variant="ghost" size="sm" className="text-gray-700 hover:text-blue-600 hover:bg-transparent transition-all duration-300 font-sans px-4 py-2">
              Log In
            </Button>
            <Button variant="primary" size="sm" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl transition-all duration-300 font-sans">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center p-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50/50 rounded-lg transition-all duration-300"
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
          <div className="lg:hidden py-6 border-t border-gray-200/60 bg-white/95 backdrop-blur-xl">
            <div className="space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50/50 rounded-lg transition-all duration-300 font-sans"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-gray-200/60 space-y-3">
              <Button href="https://app.ccnhealth.com" variant="ghost" className="w-full justify-center text-gray-700 hover:text-blue-600 hover:bg-transparent transition-all duration-300 font-sans">
                Log In
              </Button>
              <Button variant="primary" className="w-full justify-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl transition-all duration-300 font-sans">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
