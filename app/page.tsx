"use client";

import { motion } from "framer-motion";
import AboutUsSection from "./home-components/about-us";
import Contact from "./home-components/Contact";
import CampusMap from "./home-components/CampusMap";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-200 flex flex-col items-center">
  <motion.div
    initial={{ opacity: 0, scale: 0.96 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="w-full max-w-6xl px-6 my-8"
  >
    <video
      src="/hero-reel.mp4"
      autoPlay
      muted
      loop
      playsInline
      className="w-full rounded-2xl shadow-xl"
    />
  </motion.div>

  <div className="w-full max-w-6xl px-6">
    <AboutUsSection />
    <div className="p-3"></div>
    <CampusMap />
    <div className="p-30"></div>
    <Contact />
    {/* Events, Map, Contact will follow same pattern */}
  </div>
</main>

  );
}
