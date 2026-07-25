"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { works, WorkCategory } from "@/lib/data";
import Drawer from "@/components/Drawer";

const categories: (WorkCategory | "All")[] = [
  "All",
  "Photography",
  "Videography",
  "Drone",
  "Website",
  "Brand Identity",
  "Social Media Campaign",
];

export default function SelectedWorks() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");
  const [activeSlug, setActiveSlug] = useState<string | null>(null);

  const filtered = useMemo(
    () => (filter === "All" ? works : works.filter((w) => w.category === filter)),
    [filter]
  );

  const active = works.find((w) => w.slug === activeSlug) ?? null;

  return (
    <section id="work" className="container-px py-24 sm:py-32">
      <div className="max-w-content mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div>
            <p className="eyebrow mb-3">Selected Works</p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-paper tracking-tight">
              A handful of the projects worth showing
            </h2>
          </div>
        </div>

        <div className="mt-8 flex gap-2 overflow-x-auto pb-2 -mx-1 px-1 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`shrink-0 rounded-full border px-4 py-2 text-sm transition-colors ${
                filter === cat
                  ? "border-accent bg-accent-soft text-accent"
                  : "border-ink-border text-paper-dim hover:text-paper hover:border-white/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((work) => (
            <button
              key={work.slug}
              onClick={() => setActiveSlug(work.slug)}
              className="group text-left rounded-2xl overflow-hidden card-border bg-ink-card focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={work.cover}
                  alt={work.title}
                  fill
                  loading="lazy"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-3 left-3 rounded-full bg-ink/80 backdrop-blur px-3 py-1 text-xs text-paper-dim border border-ink-border">
                  {work.category}
                </span>
              </div>
              <div className="p-5">
                <p className="text-xs text-paper-faint mb-1">{work.client} · {work.year}</p>
                <h3 className="font-display font-semibold text-lg text-paper group-hover:text-accent transition-colors">
                  {work.title}
                </h3>
              </div>
            </button>
          ))}
        </div>
      </div>

      <Drawer open={!!active} onClose={() => setActiveSlug(null)} labelledBy="work-drawer-title">
        {active && (
          <div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden card-border mb-6">
              <Image src={active.cover} alt={active.title} fill sizes="600px" className="object-cover" />
            </div>
            <p className="eyebrow mb-2">{active.category}</p>
            <h3 id="work-drawer-title" className="font-display font-bold text-2xl sm:text-3xl text-paper">
              {active.title}
            </h3>
            <p className="mt-3 text-paper-dim leading-relaxed">{active.summary}</p>

            <dl className="mt-8 grid grid-cols-2 gap-y-5 gap-x-4 text-sm">
              <div>
                <dt className="text-paper-faint">Client</dt>
                <dd className="mt-1 text-paper">{active.client}</dd>
              </div>
              <div>
                <dt className="text-paper-faint">Year</dt>
                <dd className="mt-1 text-paper">{active.year}</dd>
              </div>
              <div>
                <dt className="text-paper-faint">Role</dt>
                <dd className="mt-1 text-paper">{active.role}</dd>
              </div>
              <div>
                <dt className="text-paper-faint">Tools</dt>
                <dd className="mt-1 text-paper">{active.tools.join(", ")}</dd>
              </div>
            </dl>

            <div className="mt-8 rounded-xl bg-accent-soft border border-accent/20 p-4">
              <p className="text-xs text-accent font-medium mb-1">Outcome</p>
              <p className="text-sm text-paper">{active.outcome}</p>
            </div>

            <a
              href="#contact"
              onClick={() => setActiveSlug(null)}
              className="mt-8 inline-flex items-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-ink hover:bg-accent-dim transition-colors"
            >
              Start a similar project
            </a>
          </div>
        )}
      </Drawer>
    </section>
  );
}
