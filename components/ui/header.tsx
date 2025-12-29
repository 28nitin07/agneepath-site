"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Policy & Guidelines", href: "/documentation" },
  { label: "Accommodation", href: "/accommodations" },
  { label: "Live Scores", href: "/live-scores" },
  { label: "Meet the Team", href: "/meet-the-team" },
  { label: "Sponsors", href: "/sponsors" },
  { label: "Brochure", href: "/brochure.pdf", external: true },
];

export default function Header() {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full bg-white shadow-md py-4 px-6"
    >
      <nav className="max-w-7xl mx-auto flex items-center gap-4 overflow-x-auto">
        {/* Logo */}
        <div className="flex items-center gap-2 mr-4">
          <Image
            src="/favicon/favicon-32x32.png"
            alt="Agneepath Logo"
            width={32}
            height={32}
          />
          <span className="font-semibold text-sm text-agni-dark">
            Agneepath
          </span>
        </div>

        {/* Buttons */}
        {navItems.map((item) => (
          <motion.div
            key={item.label}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {item.external ? (
              <a
                href={item.href}
                target="_blank"
                className="px-5 py-2 rounded-full bg-yellow-400 text-sm font-medium hover:bg-yellow-500 transition-colors whitespace-nowrap"
              >
                {item.label}
              </a>
            ) : (
              <Link
                href={item.href}
                className="px-5 py-2 rounded-full bg-yellow-400 text-sm font-medium hover:bg-yellow-500 transition-colors whitespace-nowrap"
              >
                {item.label}
              </Link>
            )}
          </motion.div>
        ))}
      </nav>
    </motion.header>
  );
}
