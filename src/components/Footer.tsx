import Link from "next/link";
import { developer } from "@/data/site";
import { navItems } from "@/data/site";

export default function Footer() {
  return (
    <footer className="relative border-t border-gold/10 pt-16 pb-10">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
          <div className="text-center md:text-left">
            <p className="font-heading text-xl font-bold text-gold tracking-wider mb-1">
              {developer.name}
            </p>
            <p className="text-text-muted text-sm">{developer.role}</p>
          </div>
          <nav className="flex gap-6 text-text-muted text-sm">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="hover:text-gold transition-colors font-heading tracking-wider uppercase text-xs"
              >
                {item.tarot}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          <p className="text-text-muted text-xs tracking-wider">
            THE ARCHIVE REMAINS OPEN
          </p>
          <div className="flex gap-6">
            <a href={developer.github} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-gold transition-colors text-sm">
              GitHub
            </a>
            <a href={developer.linkedin} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-gold transition-colors text-sm">
              LinkedIn
            </a>
            <a href="/RyanJeremyPatricio_Resume.pdf" download className="text-text-muted hover:text-gold transition-colors text-sm">
              Resume
            </a>
          </div>
        </div>

        <div className="border-t border-gold/5 pt-6 text-center">
          <p className="text-text-muted/50 text-xs">
            © {new Date().getFullYear()} {developer.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
