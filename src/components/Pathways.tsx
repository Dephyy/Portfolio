"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/skills";

const variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08 },
  }),
};

const iconMap: Record<string, string> = {
  "book-open": "📖",
  "code": "⚙️",
  "server": "◆",
  "chart-line": "📊",
  "brain": "🧠",
  "map": "▦",
};

export default function Pathways() {
  return (
    <section id="pathways" className="relative py-24 md:py-32">
      <div className="container">
        <motion.div
          className="text-center mb-16"
          custom={0}
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="eyebrow tracking-[0.25em] mb-2">Skills</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3">
            Pathways of Knowledge
          </h2>
          <div className="section-divider" />
          <p className="text-text-muted text-sm tracking-[0.2em] uppercase">
            Technologies and disciplines shaping my practice
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((pathway, i) => (
            <motion.div
              key={pathway.pathway}
              className="glass p-6"
              custom={i + 1}
              variants={variants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{iconMap[pathway.icon] || "◆"}</span>
                <div>
                  <p className="text-gold-dim text-xs tracking-[0.25em] uppercase font-heading">
                    {pathway.pathway}
                  </p>
                  <h3 className="font-heading text-lg font-bold">{pathway.title}</h3>
                </div>
              </div>
              <ul className="flex flex-wrap gap-2">
                {pathway.items.map((item) => (
                  <li
                    key={item}
                    className="text-xs bg-bg-secondary border border-gold/10 rounded-full px-3 py-1 text-text-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Portfolio progression — atmospheric, not a certification */}
        <motion.div
          className="mt-20 text-center"
          custom={skills.length + 1}
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="text-text-muted/60 text-xs tracking-[0.3em] uppercase mb-6 font-heading">
            Current Development Journey
          </p>
          <div className="inline-flex flex-wrap justify-center gap-4 md:gap-8 text-text-muted/40 text-xs font-heading tracking-widest">
            <span>SEQUENCE 9 · Student</span>
            <span className="text-gold/20">◆</span>
            <span>SEQUENCE 8 · Developer</span>
            <span className="text-gold/20">◆</span>
            <span>SEQUENCE 7 · Systems Builder</span>
            <span className="text-gold/20">◆</span>
            <span>SEQUENCE 6 · Architect</span>
          </div>
          <p className="text-text-muted/30 text-xs mt-3">
            Atmospheric progression, not a professional certification.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
