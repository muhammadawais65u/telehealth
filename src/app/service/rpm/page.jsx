"use client";

import { Layout } from "@/components/Layout";
import { useEffect, useState } from "react";
import HeroSection from "../../../features/service/service-detail/sections/HeroSection";
import StatsBanner from "../../../features/service/service-detail/sections/StatsBanner";
import OverviewSection from "../../../features/service/service-detail/sections/OverviewSection";
import EligibilitySection from "../../../features/service/service-detail/sections/EligibilitySection";
import ProcessSection from "../../../features/service/service-detail/sections/ProcessSection";
import PlatformSection from "../../../features/service/service-detail/sections/PlatformSection";
import KeyStats from "../../../features/service/service-detail/sections/KeyStats";
import BillingSection from "../../../features/service/service-detail/sections/BillingSection";
import WhyCCNSection from "../../../features/service/service-detail/sections/WhyCCNSection";
import ComplianceSection from "../../../features/service/service-detail/sections/ComplianceSection";
import FAQSection from "../../../features/service/service-detail/sections/FAQSection";

const defaultRPMData = {
  title: "Remote Patient Monitoring",
  badge: "Medicare Programs",
  heroDescription: "Real-time vital sign monitoring with FDA-cleared cellular devices. Generate $175–220 per patient per month with automated compliance tracking and documentation.",
  tags: JSON.stringify(["FDA Cleared Devices", "Cellular Connectivity", "6 CPT Codes", "Zero Upfront Cost"]),
  stats: [
    { value: "$175–220", label: "Monthly Revenue Per Patient" },
    { value: "6", label: "Billable CPT Codes" },
    { value: "6", label: "Qualifying Conditions" },
  ],
  overview: "RPM enables clinicians to monitor patient health data collected via FDA-cleared devices outside traditional clinical settings. Vital signs like blood pressure, weight, glucose, and SpO2 are captured automatically and transmitted via cellular connectivity.",
  overviewFeatures: [
    "Automated 16-day compliance tracking",
    "Real-time vital sign alerts for clinical staff",
    "Integrated billing documentation in EHR",
    "Multi-condition monitoring per patient",
  ],
  eligibilityDescription: "Medicare and many private insurers cover RPM for patients with chronic or acute conditions. Requirements include a face-to-face visit and patient consent.",
  eligibilityConditions: [
    "Hypertension",
    "Diabetes",
    "Heart Failure",
    "COPD",
    "Chronic Kidney Disease",
    "Obesity",
  ],
};

export default function RPMServicePage() {
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchService() {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/services/slug/rpm`);
        if (response.ok) {
          const data = await response.json();
          setService(data);
        } else {
          setService(defaultRPMData);
        }
      } catch (error) {
        console.error("Error fetching service:", error);
        setService(defaultRPMData);
      } finally {
        setLoading(false);
      }
    }

    fetchService();
  }, []);

  if (loading) {
    return (
      <Layout>
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      </Layout>
    );
  }

  const displayData = service || defaultRPMData;

  return (
    <Layout>
      <HeroSection data={displayData} />
      <StatsBanner data={displayData} />
      <OverviewSection data={displayData} />
      <EligibilitySection data={displayData} />
      <ProcessSection data={displayData} />
      <PlatformSection data={displayData} />
      <KeyStats data={displayData} />
      <BillingSection data={displayData} />
      <WhyCCNSection data={displayData} />
      <ComplianceSection data={displayData} />
      <FAQSection data={displayData} />
    </Layout>
  );
}
