"use client";

import { motion } from "framer-motion";
import { developer } from "@/data/site";
import { skills } from "@/data/skills";

const variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12 },
  }),
};

export default function Developer() {
  const strengths = [
    "Analytical problem solving and structured thinking",
    "Adaptable — can match the client's required functionality",
    "Security-aware mindset for internal systems and data protection",
  ];

  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="container">
        <motion.div
          className="text-center mb-16"
          custom={0}
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="eyebrow tracking-[0.25em] mb-2">About</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3">
            The Developer
          </h2>
          <div className="section-divider" />
          <p className="text-text-muted text-sm tracking-[0.2em] uppercase">Personnel Record</p>
        </motion.div>

        {/* Personnel Record card */}
        <motion.div
          className="glass p-6 md:p-10 max-w-3xl mx-auto mb-16"
          custom={1}
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="archive-stamp mb-6">Personnel Record</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5 mb-8">
            <div>
              <p className="text-text-muted text-xs tracking-wider uppercase mb-1">Name</p>
              <p className="font-heading text-xl text-gold">{developer.name}</p>
            </div>
            <div>
              <p className="text-text-muted text-xs tracking-wider uppercase mb-1">Role</p>
              <p className="font-heading text-xl text-gold">{developer.role}</p>
            </div>
            <div>
              <p className="text-text-muted text-xs tracking-wider uppercase mb-1">Background</p>
              <p className="text-text">Information Technology · Business Analytics</p>
            </div>
            <div>
              <p className="text-text-muted text-xs tracking-wider uppercase mb-1">Focus</p>
              <p className="text-text">Practical systems · Secure workflows · Maintainable software</p>
            </div>
            <div>
              <p className="text-text-muted text-xs tracking-wider uppercase mb-1">Location</p>
              <p className="text-text">{developer.location}</p>
            </div>
            <div>
              <p className="text-text-muted text-xs tracking-wider uppercase mb-1">Availability</p>
              <p className="text-gold">Open to Remote</p>
            </div>
          </div>
          <p className="text-text-muted leading-relaxed">
            {developer.summary}
          </p>

          <div className="mt-8 pt-6 border-t border-gold/10">
            <p className="text-text-muted text-xs tracking-wider uppercase mb-3">Core Strengths</p>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {strengths.map((s, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-text-muted">
                  <span className="text-gold mt-0.5">◆</span>
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
