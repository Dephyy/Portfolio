"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { developer } from "@/data/site";
import { experience } from "@/data/experience";

const variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

const skillGroups = [
  { label: "Programming", items: ["Python", "JavaScript", "Java", "C#", "C++", "SQL"] },
  { label: "Web Development", items: ["React", "Next.js", "Django", "HTML", "CSS", "Tailwind CSS"] },
  { label: "Databases", items: ["PostgreSQL", "MySQL", "Data Modeling", "Secure Access"] },
  { label: "Analytics", items: ["Power BI", "Excel", "Microsoft Office", "Google Workspace"] },
  { label: "AI / ML", items: ["NLP", "Hugging Face Transformers", "LLM Applications", "Prompt Engineering"] },
  { label: "Tools & Practices", items: ["Git", "GitHub", "VS Code", "System Analysis", "Testing", "Debugging", "Deployment"] },
];

export default function Dossier() {
  return (
    <section id="dossier" className="relative py-24 md:py-32">
      <div className="container">
        <motion.div
          className="text-center mb-16"
          custom={0}
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="eyebrow tracking-[0.25em] mb-2">Resume</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3">
            Personnel Dossier
          </h2>
          <div className="section-divider" />
          <p className="text-text-muted text-sm tracking-[0.2em] uppercase">
            Full professional overview
          </p>
        </motion.div>

        {/* Summary card */}
        <motion.div
          className="glass p-6 md:p-10 max-w-3xl mx-auto mb-12"
          custom={1}
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className="archive-stamp mb-4">Professional Summary</span>
          <p className="text-text leading-relaxed">{developer.summary}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Skills matrix */}
          <motion.div
            className="glass p-6 md:p-8"
            custom={2}
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <span className="archive-stamp mb-4">Skills</span>
            <h3 className="font-heading text-lg font-bold mb-4 text-gold">Technical Skill Set</h3>
            <div className="space-y-4">
              {skillGroups.map((group) => (
                <div key={group.label}>
                  <p className="text-text-muted text-xs tracking-wider uppercase mb-1">{group.label}</p>
                  <p className="text-sm text-text">{group.items.join(" · ")}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Quick facts */}
          <motion.div
            className="glass p-6 md:p-8"
            custom={3}
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <span className="archive-stamp mb-4">Quick Facts</span>
            <h3 className="font-heading text-lg font-bold mb-4 text-gold">At a Glance</h3>
            <dl className="space-y-4">
              <div>
                <dt className="text-text-muted text-xs tracking-wider uppercase">Name</dt>
                <dd className="text-text font-heading">{developer.name}</dd>
              </div>
              <div>
                <dt className="text-text-muted text-xs tracking-wider uppercase">Role</dt>
                <dd className="text-text">{developer.role}</dd>
              </div>
              <div>
                <dt className="text-text-muted text-xs tracking-wider uppercase">Location</dt>
                <dd className="text-text">{developer.location}</dd>
              </div>
              <div>
                <dt className="text-text-muted text-xs tracking-wider uppercase">Availability</dt>
                <dd className="text-gold">Open to Remote</dd>
              </div>
              <div>
                <dt className="text-text-muted text-xs tracking-wider uppercase">Education</dt>
                <dd className="text-text text-sm">{experience.education.degree}</dd>
                <dd className="text-text-muted text-xs">{experience.education.institution} · {experience.education.period}</dd>
              </div>
              <div>
                <dt className="text-text-muted text-xs tracking-wider uppercase">Experience</dt>
                <dd className="text-text text-sm">{experience.records[0].role}</dd>
                <dd className="text-text-muted text-xs">{experience.records[0].organization} · {experience.records[0].period}</dd>
              </div>
            </dl>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          custom={4}
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <a
            href="/RyanJeremyPatricio_Resume.pdf"
            download
            className="btn-gold"
          >
            Download Dossier
          </a>
        </motion.div>
      </div>
    </section>
  );
}
