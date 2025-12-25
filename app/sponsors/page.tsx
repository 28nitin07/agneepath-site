"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { sponsors, sponsorTiers, type SponsorTier } from "@/lib/sponsors-data";
import { Building2, ExternalLink, Sparkles } from "lucide-react";
import { useState } from "react";
import { ParticleBackground } from "@/components/particle-background";

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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden bg-gradient-to-r from-black via-gray-900 to-black py-24 px-6"
      >
        <ParticleBackground />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
          >
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span className="text-sm text-white font-medium">Agneepath 7.0</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Our Sponsors
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Partnering with excellence to bring you the best sports fest experience
          </motion.p>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-transparent via-white to-transparent mt-8 max-w-md mx-auto"
          ></motion.div>
        </div>
      </motion.div>

      {/* Sponsors Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {sponsorTiers.map((tierInfo, tierIndex) => {
          const tierSponsors = getSponsorsByTier(tierInfo.tier);
          
          if (tierSponsors.length === 0) return null;

          return (
            <motion.div
              key={tierInfo.tier}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: tierIndex * 0.1 }}
              className="mb-20"
            >
              {/* Tier Header */}
              <div className="flex items-center gap-4 mb-8">
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`h-1 w-16 bg-gradient-to-r ${tierInfo.color} rounded-full`}
                ></motion.div>
                
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    {tierInfo.tier} Sponsors
                  </h2>
                  <p className="text-sm text-gray-600 mt-1">{tierInfo.description}</p>
                </div>
              </div>

              {/* Sponsors Cards Grid */}
              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
                className={`grid gap-6 ${
                  tierInfo.tier === "Title"
                    ? "grid-cols-1"
                    : tierInfo.tier === "Platinum"
                    ? "grid-cols-1 md:grid-cols-2"
                    : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                }`}
              >
                {tierSponsors.map((sponsor) => (
                  <motion.div
                    key={sponsor.id}
                    variants={item}
                    whileHover={{ y: -8 }}
                    onHoverStart={() => setHoveredCard(sponsor.id)}
                    onHoverEnd={() => setHoveredCard(null)}
                  >
                    <Card
                      className={`group relative overflow-hidden border-2 transition-all duration-300 ${
                        hoveredCard === sponsor.id
                          ? "border-gray-900 shadow-2xl"
                          : "border-gray-200 hover:border-gray-400"
                      } ${tierInfo.tier === "Title" ? "md:p-8" : ""}`}
                    >
                      {/* Gradient overlay on hover */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hoveredCard === sponsor.id ? 0.05 : 0 }}
                        className={`absolute inset-0 bg-gradient-to-br ${tierInfo.color} pointer-events-none`}
                      ></motion.div>

                      <CardContent className="p-6 relative">
                        {/* Logo placeholder or icon */}
                        <div
                          className={`flex items-center justify-center mb-6 ${
                            tierInfo.tier === "Title" ? "h-32" : "h-24"
                          } bg-gradient-to-br ${tierInfo.color} rounded-lg shadow-inner`}
                        >
                          <Building2
                            className={`${
                              tierInfo.tier === "Title" ? "w-16 h-16" : "w-12 h-12"
                            } text-white opacity-80`}
                          />
                        </div>

                        {/* Sponsor name */}
                        <h3
                          className={`font-bold text-gray-900 mb-2 ${
                            tierInfo.tier === "Title" ? "text-3xl" : "text-xl"
                          }`}
                        >
                          {sponsor.name}
                        </h3>

                        {/* Description */}
                        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                          {sponsor.description}
                        </p>

                        {/* Industry badge */}
                        <div className="flex items-center justify-between">
                          <Badge variant="outline" className="bg-white">
                            {sponsor.industry}
                          </Badge>

                          {sponsor.website && (
                            <motion.a
                              href={sponsor.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                              className="text-gray-400 hover:text-gray-900 transition-colors"
                            >
                              <ExternalLink className="w-5 h-5" />
                            </motion.a>
                          )}
                        </div>

                        {/* Shine effect on hover */}
                        <motion.div
                          initial={{ x: "-100%", opacity: 0 }}
                          animate={{
                            x: hoveredCard === sponsor.id ? "100%" : "-100%",
                            opacity: hoveredCard === sponsor.id ? 0.3 : 0,
                          }}
                          transition={{ duration: 0.6 }}
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent pointer-events-none"
                        ></motion.div>
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
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-black py-16 px-6"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Interested in Sponsoring?
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            Partner with Agneepath 7.0 and reach thousands of enthusiastic students and sports
            enthusiasts
          </p>
          <motion.a
            href="mailto:agneepath@ashoka.edu.in"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Get in Touch
            <ExternalLink className="w-5 h-5" />
          </motion.a>
        </div>
      </motion.div>

      {/* Footer */}
      <div className="bg-gray-900 py-8 px-6">
        <div className="max-w-7xl mx-auto text-center text-gray-400 text-sm">
          <p>© 2026 Agneepath. All rights reserved.</p>
          <p className="mt-2">Ashoka University • Sports Fest</p>
        </div>
      </div>
    </div>
  );
}
