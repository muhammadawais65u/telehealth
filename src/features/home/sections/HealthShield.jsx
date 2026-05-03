import { Card } from "../../../components/Card";
import { BgImageCard } from "../../../components/BgImageCard";
import { ImageCard } from "../../../components/ImageCard";

export function HealthShield() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200 mb-6">
            <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span className="text-sm font-medium text-blue-800">Health Shield</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            One Fully Integrated Platform
          </h2>
        </div>

        {/* Three Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <ImageCard 
            image="/api/placeholder/400/250"
            title="FDA-Cleared Devices"
            description="Continuous RPM & RTM hardware capturing real-time physiologic and therapeutic data at home."
            padding="lg"
            hover={true}
            imageHeight="h-48"
          />

          {/* Card 2 */}
          <ImageCard 
            image="/api/placeholder/400/250"
            title="BettrAI Engagement"
            description="Predictive AI sends smart texts, calls, and app nudges — identifying dropout risk before it happens."
            padding="lg"
            hover={true}
            imageHeight="h-48"
          />

          {/* Card 3 */}
          <ImageCard 
            image="/api/placeholder/400/250"
            title="End-to-End Workflows"
            description="Full CCM & TCM support — care planning, post-discharge coordination, and 24/7 clinical oversight."
            padding="lg"
            hover={true}
            imageHeight="h-48"
          />
        </div>

        {/* Outcomes Section */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-green-100">
            <div className="flex items-center gap-6">
              <div className="flex-shrink-0">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 border border-green-200">
                  <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  <span className="text-sm font-medium text-green-800">Early outcomes</span>
                </div>
              </div>
              <div className="flex-1">
                <p className="text-lg font-semibold text-gray-900">
                  Up to <span className="text-2xl font-bold text-green-600">87</span>% reduction in hospitalizations with significantly higher patient compliance rates
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
