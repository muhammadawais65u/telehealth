"use client";

import HeroSection from "./sections/HeroSection";
import StatsBanner from "./sections/StatsBanner";
import OverviewSection from "./sections/OverviewSection";
import EligibilitySection from "./sections/EligibilitySection";
import ProcessSection from "./sections/ProcessSection";
import PlatformSection from "./sections/PlatformSection";
import KeyStats from "./sections/KeyStats";
import BillingSection from "./sections/BillingSection";
import WhyCCNSection from "./sections/WhyCCNSection";
import ComplianceSection from "./sections/ComplianceSection";
import FAQSection from "./sections/FAQSection";

export default function ServiceDetailPage() {
  return (
    <main>
      <HeroSection />
      <StatsBanner />
      <OverviewSection />
      <EligibilitySection />
      <ProcessSection />
      <PlatformSection />
      <KeyStats />
      <BillingSection />
      <WhyCCNSection />
      <ComplianceSection />
      <FAQSection />
     
    </main>
  );
}
