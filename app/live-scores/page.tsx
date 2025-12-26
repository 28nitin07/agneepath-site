"use client";

import { motion } from "framer-motion";
import { ScrollProgress } from "@/components/scroll-progress";
import { Badge } from "@/components/ui/badge";
import { Trophy, Clock, Flame, Zap, Target, Award } from "lucide-react";

export default function LiveScoresPage() {
  const stats = [
    { icon: Trophy, label: "Events", value: "15+", color: "from-red-500 to-orange-500" },
    { icon: Target, label: "Teams", value: "100+", color: "from-orange-500 to-yellow-500" },
    { icon: Award, label: "Prizes", value: "₹50K+", color: "from-yellow-500 to-red-500" },
    { icon: Zap, label: "Participants", value: "500+", color: "from-red-600 to-orange-600" },
  ];

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
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
      }
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50">
      <ScrollProgress />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Enhanced animated background shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute -top-20 -left-20 w-80 h-80 bg-gradient-to-br from-red-400/20 to-orange-400/20 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 15, repeat: Infinity }}
          />
          <motion.div
            className="absolute top-1/3 -right-20 w-96 h-96 bg-gradient-to-br from-yellow-400/20 to-red-400/20 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 20, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 left-1/3 w-64 h-64 bg-gradient-to-br from-orange-400/15 to-red-400/15 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.4, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 18, repeat: Infinity }}
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <Badge className="mb-4 px-4 py-2 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 text-white border-0 hover:shadow-lg hover:shadow-orange-500/50 transition-shadow">
              <Flame className="w-4 h-4 mr-2" />
              Live Updates
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 bg-clip-text text-transparent mb-6 tracking-tight leading-tight">
              Live Scores
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              Track real-time scores and updates from all events at Agneepath 7.0.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-12">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.label} 
              variants={item}
              className="group relative overflow-hidden rounded-xl border-2 border-gray-200 bg-white hover:border-orange-400 hover:shadow-xl hover:shadow-orange-200/50 transition-all duration-300"
            >
              <div className="p-6 relative">
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-red-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className={`inline-flex items-center justify-center w-12 h-12 mb-3 bg-gradient-to-br ${stat.color} rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-1">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-600 group-hover:text-orange-600 transition-colors">
                    {stat.label}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Live Scores Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="group relative overflow-hidden rounded-3xl border-2 border-gray-200 bg-white shadow-2xl shadow-orange-200/50"
        >
          {/* Animated gradient background */}
          <div className="absolute inset-0">
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50"
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
              }}
              transition={{ duration: 20, repeat: Infinity }}
            />
            {/* Radial gradient overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,107,53,0.1),transparent_50%)]" />
          </div>
          
          <div className="relative z-10 p-12 md:p-20 text-center">
            {/* Animated icon */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200, damping: 15 }}
              className="relative inline-block mb-8"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-orange-500 rounded-full blur-xl opacity-50 animate-pulse" />
              <div className="relative inline-flex items-center justify-center w-28 h-28 bg-gradient-to-br from-red-500 via-orange-500 to-yellow-500 rounded-full shadow-2xl">
                <Trophy className="w-14 h-14 text-white" />
              </div>
            </motion.div>

            {/* Coming Soon Text with enhanced animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 bg-clip-text text-transparent mb-6">
                Coming Soon
              </h2>

              <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
                Live score tracking will be available during the event. Stay tuned for real-time updates on all matches and competitions!
              </p>

              {/* Enhanced badge with animation */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 }}
                whileHover={{ scale: 1.05 }}
                className="inline-block"
              >
                <Badge className="px-6 py-3 bg-gradient-to-r from-orange-100 to-red-100 text-orange-700 border-2 border-orange-200 hover:border-orange-400 hover:shadow-lg hover:shadow-orange-200/50 transition-all">
                  <Clock className="w-5 h-5 mr-2" />
                  <span className="text-base font-semibold">Live during Agneepath 7.0</span>
                </Badge>
              </motion.div>
            </motion.div>
          </div>

          {/* Decorative corner accents with animation */}
          <motion.div 
            className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-red-500/20 to-transparent rounded-br-full"
            animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-orange-500/20 to-transparent rounded-tl-full"
            animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
            transition={{ duration: 4, repeat: Infinity, delay: 2 }}
          />
          </Card>

          {/* Iframe placeholder (commented out for later use) */}
          {/* 
          <div className="bg-white rounded-3xl shadow-2xl shadow-orange-200/50 border-2 border-gray-200 overflow-hidden">
            <iframe
              src="YOUR_LIVE_SCORE_TRACKER_URL"
              className="w-full h-[800px]"
              title="Live Score Tracker"
              frameBorder="0"
              allowFullScreen
            />
          </div>
          */}
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-black">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <p className="text-center text-sm text-gray-400">
            Developed by{" "}
            <a
              href="https://github.com/28nitin07"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-white hover:text-orange-400 hover:underline transition-colors"
            >
              Nitin S
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
