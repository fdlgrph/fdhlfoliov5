"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { ecosystem } from "@/lib/data";
import Drawer from "@/components/Drawer";

export default function VisivineEcosystem() {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const active = ecosystem.find((p) => p.slug === activeSlug) ?? null;

  return (
    <section id="ecosystem" className="container-px py-24 sm:py-32 border-t border-ink-border">
      <div className="max-w-content mx-auto">
        <p className="eyebrow mb-3">Visivine Digital Ecosystem</p>
        <h2 className="font-display font-bold text-3xl sm:text-4xl text-paper tracking-tight max-w-2xl">
          One creative practice, six regional platforms
        </h2>
        <p className="mt-4 max-w-2xl text-paper-dim leading-relaxed">
          Visivine.id is the parent ecosystem behind Fadhil Graphy — a group
          of media and product platforms built and run across Central Java
          and Yogyakarta.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {ecosystem.map((p) => (
            <button
              key={p.slug}
              onClick={() => setActiveSlug(p.slug)}
              className="group text-left rounded-2xl overflow-hidden card-border bg-ink-card focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={p.gallery[0]}
                  alt={p.name}
                  fill
                  loading="lazy"
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <p className="text-xs text-accent">{p.category}</p>
                <h3 className="mt-1.5 font-display font-semibold text-xl text-paper group-hover:text-accent transition-colors">
                  {p.name}
                </h3>
                <p className="mt-2 text-sm text-paper-dim leading-relaxed">{p.description}</p>
                <div className="mt-5 flex gap-6">
                  {p.stats.slice(0, 2).map((s) => (
                    <div key={s.label}>
                      <p className="font-display font-bold text-paper">{s.value}</p>
                      <p className="text-xs text-paper-faint">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <Drawer open={!!active} onClose={() => setActiveSlug(null)} labelledBy="ecosystem-drawer-title">
        {active && (
          <div>
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden card-border mb-6">
              <Image src={active.gallery[0]} alt={active.name} fill sizes="600px" className="object-cover" />
            </div>
            <p className="eyebrow mb-2">{active.category}</p>
            <h3 id="ecosystem-drawer-title" className="font-display font-bold text-2xl sm:text-3xl text-paper">
              {active.name}
            </h3>
            <p className="mt-3 text-paper-dim leading-relaxed">{active.description}</p>

            <div className="mt-6 grid grid-cols-3 gap-4">
              {active.stats.map((s) => (
                <div key={s.label} className="rounded-xl card-border bg-ink p-4 text-center">
                  <p className="font-display font-bold text-lg text-paper">{s.value}</p>
                  <p className="text-xs text-paper-faint mt-1">{s.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <p className="text-sm font-semibold text-paper mb-3">Role & Responsibilities</p>
              <p className="text-sm text-accent mb-3">{active.role}</p>
              <ul className="space-y-2.5">
                {active.responsibilities.map((r) => (
                  <li key={r} className="flex gap-3 text-sm text-paper-dim">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-accent shrink-0" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <p className="text-sm font-semibold text-paper mb-3">Achievements</p>
              <ul className="space-y-2.5">
                {active.achievements.map((a) => (
                  <li key={a} className="flex gap-3 text-sm text-paper-dim">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-accent shrink-0" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>

            {active.gallery.length > 1 && (
              <div className="mt-8 grid grid-cols-2 gap-3">
                {active.gallery.map((g, i) => (
                  <div key={i} className="relative aspect-square rounded-xl overflow-hidden card-border">
                    <Image src={g} alt={`${active.name} gallery ${i + 1}`} fill sizes="280px" className="object-cover" />
                  </div>
                ))}
              </div>
            )}

            <a
              href={active.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-ink hover:bg-accent-dim transition-colors"
            >
              Visit {active.name} <ExternalLink size={15} />
            </a>
          </div>
        )}
      </Drawer>
    </section>
  );
}
