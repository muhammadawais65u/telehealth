import { Header } from "./sections/Header";
import { HeroSection } from "./sections/HeroSection";
import { StatsSection } from "./sections/StatsSection";
import { ProgramsSection } from "./sections/ProgramsSection";
import { ProcessSection } from "./sections/ProcessSection";
import { IntegrationsSection } from "./sections/IntegrationsSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import { BentoGridSection } from "./sections/BentoGridSection";
import { PartnersSection } from "./sections/PartnersSection";
import { CTASection } from "./sections/CTASection";
import { Footer } from "./sections/Footer";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <StatsSection />
        <ProgramsSection />
        <ProcessSection />
        <IntegrationsSection />
        <TestimonialsSection />
        <BentoGridSection />
        <PartnersSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
