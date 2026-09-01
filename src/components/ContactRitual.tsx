"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { developer } from "@/data/site";

const variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

export default function ContactRitual() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget as HTMLFormElement;
    const name = (form.elements.namedItem("name") as HTMLInputElement)?.value.trim() ?? "";
    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value.trim() ?? "";
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)?.value.trim() ?? "";

    if (!name || !email || !message) {
      setStatus("idle");
      return;
    }

    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    const mailto = `mailto:${developer.email}?subject=${subject}&body=${body}`;
    window.location.href = mailto;
    setStatus("sent");

    setTimeout(() => setStatus("idle"), 4000);
  }

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="container">
        <motion.div
          className="text-center mb-16"
          custom={0}
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="eyebrow tracking-[0.25em] mb-2">Contact</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3">
            Initiate Contact
          </h2>
          <div className="section-divider" />
          <p className="text-text-muted text-sm tracking-[0.2em] uppercase max-w-lg mx-auto">
            If you have a problem worth solving, let&apos;s build something practical.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Form */}
          <motion.form
            className="glass p-6 md:p-8"
            onSubmit={handleSubmit}
            custom={1}
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="mb-4">
              <label htmlFor="contact-name" className="text-text-muted text-xs tracking-wider uppercase block mb-1">
                Name
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                className="w-full bg-bg-secondary border border-gold/10 rounded-lg px-4 py-3 text-text placeholder-text-muted/50 focus:border-gold/40 focus:outline-none transition-colors"
                placeholder="Your name"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="contact-email" className="text-text-muted text-xs tracking-wider uppercase block mb-1">
                Email
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                className="w-full bg-bg-secondary border border-gold/10 rounded-lg px-4 py-3 text-text placeholder-text-muted/50 focus:border-gold/40 focus:outline-none transition-colors"
                placeholder="your@email.com"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="contact-message" className="text-text-muted text-xs tracking-wider uppercase block mb-1">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                required
                className="w-full bg-bg-secondary border border-gold/10 rounded-lg px-4 py-3 text-text placeholder-text-muted/50 focus:border-gold/40 focus:outline-none transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <button type="submit" className="btn-gold w-full" disabled={status === "sending"}>
              {status === "sending" ? "Transmitting..." : "Send Message"}
            </button>

            {status === "sent" && (
              <motion.p
                className="mt-4 text-center text-gold text-sm font-heading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                THE MESSAGE HAS BEEN TRANSMITTED.
              </motion.p>
            )}
            <p className="mt-3 text-text-muted/60 text-xs text-center">
              This uses your email app to send a message (free, no account required).
            </p>
          </motion.form>

          {/* Contact links */}
          <motion.aside
            className="glass p-6 md:p-8 flex flex-col justify-center"
            custom={2}
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="font-heading text-lg font-bold mb-6 text-gold">
              Contact Details
            </h3>
            <ul className="space-y-4">
              <li>
                <a href={`mailto:${developer.email}`} className="text-text hover:text-gold transition-colors">
                  {developer.email}
                </a>
              </li>
              <li>
                <a href={`tel:${developer.phone}`} className="text-text hover:text-gold transition-colors">
                  {developer.phone}
                </a>
              </li>
              <li>
                <a href={developer.linkedin} target="_blank" rel="noopener noreferrer" className="text-text hover:text-gold transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={developer.github} target="_blank" rel="noopener noreferrer" className="text-text hover:text-gold transition-colors">
                  GitHub
                </a>
              </li>
            </ul>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
