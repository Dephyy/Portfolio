"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { projects } from "@/data/projects";

const variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12 },
  }),
};

export default function Artifacts() {
  return (
    <section id="artifacts" className="relative py-24 md:py-32">
      <div className="container">
        <motion.div
          className="text-center mb-16"
          custom={0}
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="eyebrow tracking-[0.25em] mb-2">Projects</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3">
            Artifacts
          </h2>
          <div className="section-divider" />
          <p className="text-text-muted text-sm tracking-[0.2em] uppercase">
            Selected Systems &amp; Experiments
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.article
              key={project.id}
              className="glass p-6 md:p-8"
              custom={i + 1}
              variants={variants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="archive-stamp">{project.artifact}</span>
                <span className="text-xs text-gold-dim border border-gold/10 rounded px-2 py-0.5">
                  {project.status}
                </span>
              </div>
              <h3 className="font-heading text-2xl font-bold text-gold mb-1">
                {project.name}
              </h3>
              <p className="text-text-muted text-sm mb-3">{project.subtitle}</p>
              <p className="text-text-muted text-sm leading-relaxed mb-5">
                {project.description}
              </p>

              <div className="mb-5">
                <p className="text-text-muted text-xs tracking-wider uppercase mb-2">
                  My Contribution
                </p>
                <ul className="space-y-1.5">
                  {project.contribution.map((c, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-text-muted">
                      <span className="text-gold mt-1">—</span>
                      {c}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <p className="text-text-muted text-xs tracking-wider uppercase mb-2">
                  Technology
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] bg-bg-secondary border border-gold/10 rounded px-2 py-0.5 text-text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {project.repo && (
                  <Link
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline text-sm"
                  >
                    View Repository
                  </Link>
                )}
                {project.demo && (
                  <Link
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold text-sm"
                  >
                    Live Demo
                  </Link>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
