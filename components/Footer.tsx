import { brand, navLinks } from "@/lib/data";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-ink-border">
      <div className="container-px max-w-content mx-auto py-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
        <div>
          <p className="font-display font-bold text-lg text-paper">
            Fadhil<span className="text-accent">Graphy</span>
          </p>
          <p className="mt-1 text-sm text-paper-faint">
            Part of {brand.parentBrand} · Central Java, Indonesia
          </p>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-paper-dim hover:text-paper transition-colors">
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#main"
          className="inline-flex items-center gap-2 text-sm text-paper-dim hover:text-accent transition-colors"
        >
          Back to top <ArrowUp size={14} />
        </a>
      </div>
      <div className="container-px max-w-content mx-auto pb-8 text-xs text-paper-faint">
        © {year} {brand.name} — {brand.handle}. All rights reserved.
      </div>
    </footer>
  );
}
