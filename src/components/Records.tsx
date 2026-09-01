"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/experience";

const variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12 },
  }),
};

export default function Records() {
  return (
    <section id="records" className="relative py-24 md:py-32">
      <div className="container">
        <motion.div
          className="text-center mb-16"
          custom={0}
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="eyebrow tracking-[0.25em] mb-2">Experience</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3">
            Records
          </h2>
          <div className="section-divider" />
          <p className="text-text-muted text-sm tracking-[0.2em] uppercase">
            Professional timeline
          </p>
        </motion.div>

        {/* Education record */}
        <motion.div
          className="glass p-6 md:p-10 max-w-3xl mx-auto mb-12 text-center"
          custom={1}
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className="archive-stamp mb-4">Education</span>
          <h3 className="font-heading text-xl font-bold mb-2">{experience.education.degree}</h3>
          <p className="text-gold text-sm font-heading mb-1">{experience.education.institution}</p>
          <p className="text-text-muted text-sm">{experience.education.period} · {experience.education.status}</p>
        </motion.div>

        {/* Experience records */}
        {experience.records.map((record, i) => (
          <motion.div
            key={record.id}
            className="max-w-4xl mx-auto mb-12"
            custom={i + 2}
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="flex items-start gap-6">
              {/* Timeline */}
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-gold border-2 border-bg" />
                <div className="w-px flex-1 bg-gold/20 mt-2" />
              </div>
              <div className="glass p-6 md:p-8 flex-1 pb-8">
                <span className="archive-stamp mb-4">{record.id}</span>
                <h3 className="font-heading text-xl font-bold text-gold mb-1">
                  {record.role}
                </h3>
                <p className="text-text-muted text-sm mb-1">{record.organization}</p>
                <p className="text-gold-dim text-xs tracking-wider uppercase mb-6">{record.period}</p>
                <ul className="space-y-3">
                  {record.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-text-muted leading-relaxed">
                      <span className="text-gold mt-1 shrink-0">◆</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
