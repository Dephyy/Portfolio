"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { navItems } from "@/data/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-bg/90 backdrop-blur-md border-b border-gold/10"
          : "bg-transparent"
      }`}
    >
      <nav className="container flex items-center justify-between h-16 md:h-20 px-4">
        <Link href="#home" className="flex items-center gap-2">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
            <circle cx="14" cy="14" r="13" stroke="#c9b98a" strokeWidth="1" />
            <circle cx="14" cy="14" r="7" stroke="#a88b4a" strokeWidth="0.75" />
            <line x1="14" y1="1" x2="14" y2="27" stroke="#c9b98a" strokeWidth="0.5" />
            <line x1="1" y1="14" x2="27" y2="14" stroke="#c9b98a" strokeWidth="0.5" />
          </svg>
          <span className="font-heading font-bold text-lg tracking-wider text-gold">
            RJ
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-6 lg:gap-8">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                className="relative font-heading text-xs tracking-widest uppercase text-text-muted hover:text-gold transition-colors duration-300"
              >
                {item.tarot}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-text-muted hover:text-gold transition-colors p-2"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-bg/95 backdrop-blur-lg border-b border-gold/10">
          <ul className="flex flex-col items-center gap-4 py-8">
            {navItems.map((item, i) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block font-heading text-sm tracking-widest uppercase text-text-muted hover:text-gold transition-colors"
                >
                  {item.tarot}
                  <span className="block text-xs tracking-normal text-gold-dim mt-0.5">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
