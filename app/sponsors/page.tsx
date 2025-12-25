"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { sponsors } from "@/lib/sponsors-data";
import { Building2 } from "lucide-react";
import Image from "next/image";

export default function SponsorsPage() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
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
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {sponsors.map((sponsor) => {
          const Component = sponsor.website ? motion.a : motion.div;
          const linkProps = sponsor.website ? {
            href: sponsor.website,
            target: "_blank",
            rel: "noopener noreferrer",
            "aria-label": `Visit ${sponsor.name} website`
          } : {};
          
          return (
            <Component
              key={sponsor.id}
              {...linkProps}
              variants={item}
              whileHover={sponsor.website ? { y: -8, scale: 1.02 } : { scale: 1.02 }}
              whileTap={sponsor.website ? { scale: 0.98 } : undefined}
              className={sponsor.website ? "cursor-pointer" : "cursor-default"}
            >
              <Card className="group relative overflow-hidden border border-gray-200 hover:border-gray-400 hover:shadow-lg transition-all duration-300">
                <div className="relative aspect-square bg-gray-50 flex items-center justify-center overflow-hidden">
                  {/* Animated gradient overlay on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-gray-900/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  />
                  
                  {sponsor.logo ? (
                    <Image
                      src={sponsor.logo}
                      alt={`${sponsor.name} logo`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-contain p-8 group-hover:scale-110 transition-transform duration-300"
                      priority={false}
                    />
                  ) : (
                    <Building2 className="w-16 h-16 text-gray-300 group-hover:text-gray-400 transition-colors duration-300" />
                  )}
                </div>
                
                {/* Sponsor name overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white font-medium text-sm">{sponsor.name}</p>
                </div>
              </Card>
            </Component>
          );
        })}
        </motion.div>
      </div>
    </div>
  );
}
