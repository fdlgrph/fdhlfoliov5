"use client";

import { useState } from "react";
import { services, ServiceItem } from "@/lib/data";
import Drawer from "@/components/Drawer";

const groups: ServiceItem["category"][] = ["Visual", "Digital", "Growth"];

export default function Services() {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const active = services.find((s) => s.slug === activeSlug) ?? null;

  return (
    <section id="services" className="container-px py-24 sm:py-32 border-t border-ink-border">
      <div className="max-w-content mx-auto">
        <p className="eyebrow mb-3">Services</p>
        <h2 className="font-display font-bold text-3xl sm:text-4xl text-paper tracking-tight max-w-2xl">
          Everything a brand needs to look and move like itself
        </h2>

        <div className="mt-12 space-y-14">
          {groups.map((group) => (
            <div key={group}>
              <p className="text-sm font-semibold text-paper-faint uppercase tracking-wide mb-5">
                {group}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {services
                  .filter((s) => s.category === group)
                  .map((s) => (
                    <button
                      key={s.slug}
                      onClick={() => setActiveSlug(s.slug)}
                      className="group text-left rounded-2xl card-border bg-ink-card p-6 hover:border-accent/40 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
                    >
                      <h3 className="font-display font-semibold text-lg text-paper group-hover:text-accent transition-colors">
                        {s.title}
                      </h3>
                      <p className="mt-2 text-sm text-paper-dim leading-relaxed">{s.short}</p>
                      <span className="mt-4 inline-flex text-xs text-accent">View details →</span>
                    </button>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Drawer open={!!active} onClose={() => setActiveSlug(null)} labelledBy="service-drawer-title">
        {active && (
          <div>
            <p className="eyebrow mb-2">{active.category}</p>
            <h3 id="service-drawer-title" className="font-display font-bold text-2xl sm:text-3xl text-paper">
              {active.title}
            </h3>
            <p className="mt-3 text-paper-dim leading-relaxed">{active.short}</p>

            <div className="mt-8">
              <p className="text-sm font-semibold text-paper mb-4">Workflow</p>
              <ol className="space-y-3">
                {active.workflow.map((step, i) => (
                  <li key={step} className="flex gap-3 text-sm text-paper-dim">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent-soft text-xs text-accent font-medium">
                      {i + 1}
                    </span>
                    <span className="pt-0.5">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-8">
              <p className="text-sm font-semibold text-paper mb-4">Deliverables</p>
              <ul className="space-y-2.5">
                {active.deliverables.map((d) => (
                  <li key={d} className="flex gap-3 text-sm text-paper-dim">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-accent shrink-0" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <p className="text-sm font-semibold text-paper mb-4">FAQ</p>
              <div className="space-y-4">
                {active.faq.map((f) => (
                  <div key={f.q} className="border-b border-ink-border pb-4">
                    <p className="text-sm text-paper font-medium">{f.q}</p>
                    <p className="mt-1.5 text-sm text-paper-dim">{f.a}</p>
                  </div>
                ))}
              </div>
            </div>

            <a
              href="#contact"
              onClick={() => setActiveSlug(null)}
              className="mt-8 inline-flex items-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-ink hover:bg-accent-dim transition-colors"
            >
              Request a quote
            </a>
          </div>
        )}
      </Drawer>
    </section>
  );
}
