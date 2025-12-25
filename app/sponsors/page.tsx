"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { sponsors, sponsorTiers, type SponsorTier } from "@/lib/sponsors-data";
import { Building2, ExternalLink } from "lucide-react";
import { useState } from "react";

export default function SponsorsPage() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const getSponsorsByTier = (tier: SponsorTier) => {
    return sponsors.filter((sponsor) => sponsor.tier === tier);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <p className="text-sm font-medium text-gray-500 tracking-wide uppercase mb-4">
              Agneepath 7.0
            </p>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              Our Sponsors
            </h1>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Partnering with excellence to bring you the best sports fest experience at Ashoka University.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Sponsors Grid */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        {sponsorTiers.map((tierInfo, tierIndex) => {
          const tierSponsors = getSponsorsByTier(tierInfo.tier);
          
          if (tierSponsors.length === 0) return null;

          return (
            <motion.div
              key={tierInfo.tier}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4 }}
              className="mb-24 last:mb-0"
            >
              {/* Tier Header */}
              <div className="mb-10">
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2">
                  {tierInfo.tier}
                </h2>
                <p className="text-sm text-gray-500">{tierInfo.description}</p>
              </div>

              {/* Sponsors Cards Grid */}
              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className={`grid gap-5 ${
                  tierInfo.tier === "Title"
                    ? "grid-cols-1 max-w-2xl"
                    : tierInfo.tier === "Platinum"
                    ? "grid-cols-1 md:grid-cols-2"
                    : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                }`}
              >
                {tierSponsors.map((sponsor) => (
                  <motion.div
                    key={sponsor.id}
                    variants={item}
                    onHoverStart={() => setHoveredCard(sponsor.id)}
                    onHoverEnd={() => setHoveredCard(null)}
                  >
                    <Card
                      className={`group relative overflow-hidden border border-gray-200 hover:border-gray-300 transition-all duration-200 ${
                        tierInfo.tier === "Title" ? "p-2" : ""
                      }`}
                    >
                      <CardContent className={tierInfo.tier === "Title" ? "p-8" : "p-6"}>
                        {/* Logo placeholder */}
                        <div
                          className={`flex items-center justify-center mb-5 ${
                            tierInfo.tier === "Title" ? "h-28" : "h-20"
                          } bg-gray-50 rounded-lg`}
                        >
                          <Building2
                            className={`${
                              tierInfo.tier === "Title" ? "w-14 h-14" : "w-10 h-10"
                            } text-gray-300`}
                          />
                        </div>

                        {/* Sponsor name */}
                        <h3
                          className={`font-semibold text-gray-900 mb-2 ${
                            tierInfo.tier === "Title" ? "text-2xl" : "text-lg"
                          }`}
                        >
                          {sponsor.name}
                        </h3>

                        {/* Description */}
                        <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                          {sponsor.description}
                        </p>

                        {/* Industry badge and link */}
                        <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                          <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                            {sponsor.industry}
                          </span>

                          {sponsor.website && (
                            <a
                              href={sponsor.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-400 hover:text-gray-900 transition-colors"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* Call to Action Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="border-t border-gray-200 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
              Become a Sponsor
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Partner with Agneepath 7.0 and connect with thousands of passionate students and sports enthusiasts.
            </p>
            <a
              href="mailto:agneepath@ashoka.edu.in"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
            >
              Get in Touch
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </motion.div>

      {/* Footer */}
      <div className="border-t border-gray-200 py-8 px-6">
        <div className="max-w-7xl mx-auto text-center text-gray-500 text-sm">
          <p>© 2026 Agneepath. All rights reserved.</p>
          <p className="mt-1">Ashoka University</p>
        </div>
      </div>
    </div>
  );
}
