"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/data";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-[80] transition-colors duration-300 ${
        scrolled ? "bg-ink/85 backdrop-blur-md border-b border-ink-border" : "bg-transparent"
      }`}
    >
      <div className="container-px max-w-content mx-auto flex h-16 sm:h-20 items-center justify-between">
        <a href="#main" className="font-display font-bold tracking-tight text-lg text-paper">
          Fadhil<span className="text-accent">Graphy</span>
        </a>

        <nav aria-label="Primary" className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-paper-dim hover:text-paper transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-ink hover:bg-accent-dim transition-colors"
          >
            Contact Me
          </a>
        </div>

        <button
          className="md:hidden grid h-10 w-10 place-items-center rounded-full border border-ink-border text-paper"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-ink border-t border-ink-border">
          <nav aria-label="Mobile" className="container-px flex flex-col py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-3 text-base text-paper-dim hover:text-paper border-b border-ink-border last:border-none"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center rounded-full bg-accent px-5 py-3 text-sm font-semibold text-ink"
            >
              Contact Me
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
