"use client";

import { useState } from "react";
import { pricing, PricingPackage } from "@/lib/data";
import Drawer from "@/components/Drawer";

const groups: PricingPackage["group"][] = ["Visual", "Digital", "Growth"];

export default function Pricing() {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const active = pricing.find((p) => p.slug === activeSlug) ?? null;

  return (
    <section id="pricing" className="container-px py-24 sm:py-32 border-t border-ink-border">
      <div className="max-w-content mx-auto">
        <p className="eyebrow mb-3">Pricing</p>
        <h2 className="font-display font-bold text-3xl sm:text-4xl text-paper tracking-tight max-w-2xl">
          Clear starting points, scoped for the actual project
        </h2>

        <div className="mt-12 space-y-14">
          {groups.map((group) => (
            <div key={group}>
              <p className="text-sm font-semibold text-paper-faint uppercase tracking-wide mb-5">
                {group}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {pricing
                  .filter((p) => p.group === group)
                  .map((p) => (
                    <button
                      key={p.slug}
                      onClick={() => setActiveSlug(p.slug)}
                      className="group flex flex-col text-left rounded-2xl card-border bg-ink-card p-6 hover:border-accent/40 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
                    >
                      <h3 className="font-display font-semibold text-lg text-paper group-hover:text-accent transition-colors">
                        {p.title}
                      </h3>
                      <div className="mt-3">
                        {p.startingFrom ? (
                          <>
                            <p className="text-xs text-paper-faint">Starting from</p>
                            <p className="font-display font-bold text-xl text-paper">{p.startingFrom}</p>
                            <p className="text-xs text-paper-faint">{p.unit}</p>
                          </>
                        ) : (
                          <p className="font-display font-bold text-xl text-accent">Contact for Quote</p>
                        )}
                      </div>
                      <span className="mt-5 inline-flex text-xs text-accent">See what's included →</span>
                    </button>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Drawer open={!!active} onClose={() => setActiveSlug(null)} labelledBy="pricing-drawer-title">
        {active && (
          <div>
            <p className="eyebrow mb-2">{active.group}</p>
            <h3 id="pricing-drawer-title" className="font-display font-bold text-2xl sm:text-3xl text-paper">
              {active.title}
            </h3>

            <div className="mt-5 rounded-2xl bg-accent-soft border border-accent/20 p-6">
              {active.startingFrom ? (
                <>
                  <p className="text-xs text-accent">Starting from</p>
                  <p className="font-display font-bold text-3xl text-paper mt-1">{active.startingFrom}</p>
                  <p className="text-xs text-paper-faint mt-1">{active.unit}</p>
                </>
              ) : (
                <p className="font-display font-bold text-2xl text-accent">Contact for Quote</p>
              )}
            </div>

            <div className="mt-8">
              <p className="text-sm font-semibold text-paper mb-4">What's included</p>
              <ul className="space-y-2.5">
                {active.includes.map((i) => (
                  <li key={i} className="flex gap-3 text-sm text-paper-dim">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-accent shrink-0" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-6 text-xs text-paper-faint">{active.note}</p>

            <a
              href="#contact"
              onClick={() => setActiveSlug(null)}
              className="mt-8 inline-flex items-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-ink hover:bg-accent-dim transition-colors"
            >
              Request this package
            </a>
          </div>
        )}
      </Drawer>
    </section>
  );
}
