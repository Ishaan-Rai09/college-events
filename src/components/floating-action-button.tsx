"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpCircle } from 'lucide-react';

export function FloatingActionButton() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.2 }}
      className="fixed bottom-10 right-10 z-40"
    >
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="bg-gradient-to-r from-cyan-400 to-violet-600 text-white flex items-center justify-center p-4 rounded-full shadow-lg hover:scale-110 transform transition-all duration-300 focus:outline-none glow"
      >
        <ArrowUpCircle className="w-8 h-8" />
      </button>
    </motion.div>
  );
}

