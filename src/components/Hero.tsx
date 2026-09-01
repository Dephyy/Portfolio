"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useCallback } from "react";
import { developer } from "@/data/site";

const cardVariants = {
  initial: { opacity: 0, scale: 0.85, rotate: -5 },
  animate: { opacity: 1, scale: 1, rotate: 0 },
  exit: { opacity: 0, scale: 0.85, rotate: 5 },
};

export default function Hero() {
  const [entered, setEntered] = useState(false);
  const [showCard, setShowCard] = useState(false);

  const handleEnter = useCallback(() => {
    setShowCard(true);
    const timer = setTimeout(() => setEntered(true), 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle symbols */}
      <div className="absolute top-[10%] left-[5%] w-[300px] h-[300px] rounded-full border border-gold/5 rotate-45 pointer-events-none" />
      <div className="absolute bottom-[15%] right-[8%] w-[200px] h-[200px] rounded-full border border-gold/5 pointer-events-none" />

      <div className="container relative z-10 flex flex-col items-center justify-center text-center px-4 pt-24 pb-16">
        {/* THE FOOL symbol */}
        <motion.div
          className="relative mx-auto mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <svg
            width="80"
            height="96"
            viewBox="0 0 80 96"
            fill="none"
            className="mx-auto"
            aria-hidden="true"
          >
            <circle cx="40" cy="48" r="40" stroke="#c9b98a" strokeWidth="1" opacity="0.6" />
            <circle cx="40" cy="48" r="28" stroke="#a88b4a" strokeWidth="0.75" opacity="0.5" />
            <circle cx="40" cy="48" r="16" stroke="#c9b98a" strokeWidth="0.5" opacity="0.4" />
            <line x1="40" y1="4" x2="40" y2="92" stroke="#c9b98a" strokeWidth="0.5" opacity="0.3" />
            <line x1="4" y1="48" x2="76" y2="48" stroke="#c9b98a" strokeWidth="0.5" opacity="0.3" />
            <line x1="16" y1="16" x2="64" y2="80" stroke="#a88b4a" strokeWidth="0.5" opacity="0.3" />
            <line x1="64" y1="16" x2="16" y2="80" stroke="#a88b4a" strokeWidth="0.5" opacity="0.3" />
            <circle cx="40" cy="48" r="4" fill="#c9b98a" opacity="0.5" />
          </svg>
        </motion.div>

        <motion.p
          className="eyebrow tracking-[0.25em] mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Seer Pathway Portfolio
        </motion.p>

        {!entered ? (
          <motion.h1
            className="font-heading text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <span className="block text-text-muted">{developer.name.split(" ")[0]}</span>
            <span className="block text-gold">{developer.name.split(" ").slice(1).join(" ")}</span>
          </motion.h1>
        ) : (
          <AnimatePresence mode="wait">
            <motion.h1
              key="fullname"
              variants={cardVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="font-heading text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight mb-6"
            >
              <span className="block text-text-muted">{developer.name.split(" ")[0]}</span>
              <span className="block text-gold">{developer.name.split(" ").slice(1).join(" ")}</span>
            </motion.h1>
          </AnimatePresence>
        )}

        <motion.p
          className="text-text-muted text-lg sm:text-xl max-w-xl mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          {developer.role}
        </motion.p>

        <motion.p
          className="text-text-muted/70 text-sm max-w-md mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          {developer.summary.slice(0, 90)}...
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <a href="#artifacts" className="btn-gold">
            View Projects
          </a>
          <a href="#dossier" className="btn-outline">
            Resume
          </a>
        </motion.div>

        {/* CTA — triggers archive transition */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.3 }}
        >
          <button
            onClick={handleEnter}
            className="font-heading text-xs tracking-[0.3em] uppercase text-gold-dim border border-gold/20 px-8 py-3 rounded-full hover:border-gold hover:text-gold transition-all duration-500 hover:shadow-lg hover:shadow-gold/5"
          >
            Enter the Archive
          </button>
        </motion.div>

        <motion.p
          className="mt-8 text-text-muted/50 text-xs tracking-wider"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          Lipa City, Batangas, Philippines · Open to remote
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted/40 text-xs tracking-widest"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span>Scroll</span>
        <div className="w-px h-8 bg-gold/20" />
      </motion.div>

      {/* Overlay + archive card transition */}
      <AnimatePresence>
        {showCard && (
          <motion.div
            className="fixed inset-0 z-40 flex items-center justify-center bg-bg/95 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="glass p-8 md:p-16 max-w-lg text-center mx-4"
              variants={cardVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <svg
                width="64"
                height="76"
                viewBox="0 0 80 96"
                fill="none"
                className="mx-auto mb-6"
                aria-hidden="true"
              >
                <circle cx="40" cy="48" r="40" stroke="#c9b98a" strokeWidth="1" />
                <circle cx="40" cy="48" r="24" stroke="#a88b4a" strokeWidth="0.75" />
                <circle cx="40" cy="48" r="10" stroke="#c9b98a" strokeWidth="0.5" />
                <line x1="40" y1="4" x2="40" y2="92" stroke="#c9b98a" strokeWidth="0.5" />
                <line x1="4" y1="48" x2="76" y2="48" stroke="#c9b98a" strokeWidth="0.5" />
                <circle cx="40" cy="48" r="4" fill="#c9b98a" opacity="0.7" />
              </svg>
              <h2 className="font-heading text-2xl font-bold text-gold tracking-wider mb-2">
                {developer.name}
              </h2>
              <p className="text-text-muted mb-4">{developer.role}</p>
              <p className="text-text-muted/70 text-sm leading-relaxed mb-6">
                {developer.summary}
              </p>
              <button
                onClick={() => {
                  setShowCard(false);
                  setEntered(true);
                }}
                className="btn-gold"
              >
                Proceed
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
