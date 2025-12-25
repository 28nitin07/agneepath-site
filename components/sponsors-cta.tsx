"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Award } from "lucide-react";

export function SponsorsCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="mt-8"
    >
      <Link
        href="/sponsors"
        className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
      >
        <Award className="w-5 h-5" />
        View Our Sponsors
      </Link>
    </motion.div>
  );
}
