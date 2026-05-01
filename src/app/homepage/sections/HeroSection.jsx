"use client";

import Image from "next/image";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#0a2540]">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a2540] via-[#0d2d4d] to-[#113a63]" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#256eff]/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-20 w-60 h-60 bg-[#635bff]/10 rounded-full blur-3xl" />
      </div>

      <Container className="relative py-16 md:py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Left content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/[0.10] mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-sm text-white/60 font-medium">
                Your workflows are unique — we build around them
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tighter text-white leading-[0.95] mb-5">
              Remote Monitoring
              <br />
              Built for Growth
            </h1>

            {/* Description */}
            <p className="max-w-md text-white/65 text-base md:text-lg leading-relaxed font-light mb-8">
              The platform behind the highest-impact RPM, CCM, BHI, RTM, and PCM programs in the country.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button variant="onDark" size="lg" showArrow>
                Book a demo
              </Button>
              <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
                Explore programs
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-10 pt-8 border-t border-white/10">
              <p className="text-sm text-white/40 mb-4">Trusted by leading healthcare organizations</p>
              <div className="flex flex-wrap items-center gap-6 opacity-50">
                <span className="text-white/60 font-medium">Village Medical</span>
                <span className="text-white/60 font-medium">Laguna Cardiology</span>
                <span className="text-white/60 font-medium">Access Healthcare</span>
              </div>
            </div>
          </div>

          {/* Right content - Image */}
          <div className="relative hidden lg:block">
            <div className="relative flex items-center justify-center">
              <Image
                alt="CCN Health platform dashboard with RPM, CCM, RTM, PCM, and BHI program modules"
                width={700}
                height={700}
                className="w-full h-auto"
                src="/hero-asset.avif"
                priority
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
