"use client";

import { motion } from "framer-motion";

export function AnimatedDivider() {
  return (
    <div className="flex items-center justify-center gap-2 my-12">
      <motion.div
        className="h-px w-24 bg-gradient-to-r from-transparent to-gray-300"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      />
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="w-2 h-2 rounded-full bg-gray-400"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 + 0.4, duration: 0.3 }}
        />
      ))}
      <motion.div
        className="h-px w-24 bg-gradient-to-l from-transparent to-gray-300"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      />
    </div>
  );
}
