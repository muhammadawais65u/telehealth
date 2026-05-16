"use client";

import { useState } from "react";

export default function FAQSection({ data }) {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = data?.faqs || [
    {
      question: "Can RPM be billed for the same patient receiving CCM services?",
      answer: "Yes, RPM and CCM can be billed concurrently for the same patient in the same month.",
    },
    {
      question: "What counts as a 'day of data' for the 16-day requirement under 99454?",
      answer: "A qualifying day of data requires at least one physiologic reading to be collected and electronically transmitted.",
    },
    {
      question: "Does the 20-minute requirement for 99457 need to be a single continuous session?",
      answer: "No, the 20 minutes can be accumulated across multiple interactions throughout the calendar month.",
    },
  ];

  return (
    <section id="faq" className="relative bg-white py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200 mb-6">
            <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm font-medium text-blue-800">FAQ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Questions</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Answers to the most common questions about RPM billing, eligibility, and compliance.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          {Array.isArray(faqs) ? faqs.map((faq, index) => (
            <div
              key={index}
              className="mb-4 border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between p-6 bg-white hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
              >
                <span className="font-medium text-gray-900 text-left pr-4">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    index === openIndex ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {index === openIndex && (
                <div className="p-6 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          )) : null}
        </div>
      </div>
    </section>
  );
}
