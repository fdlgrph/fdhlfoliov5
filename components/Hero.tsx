import Image from "next/image";
import { brand } from "@/lib/data";
import RoleTicker from "@/components/RoleTicker";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 sm:pt-40 sm:pb-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 noise-surface"
      />
      <div className="container-px max-w-content mx-auto relative grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-14 lg:gap-10 items-center">
        <div className="animate-fade-up">
          <p className="eyebrow mb-5">{brand.parentBrand} · Creative Studio</p>

          <h1 className="font-display font-extrabold leading-[0.98] tracking-tightest text-[13vw] sm:text-6xl lg:text-7xl text-paper">
            {brand.name}
          </h1>
          <p className="mt-3 font-display font-semibold text-2xl sm:text-3xl text-accent">
            {brand.handle}
          </p>

          <div className="mt-6">
            <RoleTicker roles={brand.roles} />
          </div>

          <p className="mt-6 max-w-xl text-base sm:text-lg text-paper-dim leading-relaxed">
            {brand.intro}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="inline-flex items-center rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-ink hover:bg-accent-dim transition-colors"
            >
              View Portfolio
            </a>
            <a
              href={brand.cvUrl}
              download
              className="inline-flex items-center rounded-full border border-ink-border px-6 py-3.5 text-sm font-semibold text-paper hover:border-accent/60 hover:text-accent transition-colors"
            >
              Download CV
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-2 py-3.5 text-sm font-semibold text-paper-dim hover:text-paper transition-colors underline underline-offset-4 decoration-ink-border"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[28px] card-border bg-ink-card">
            <Image
              src={brand.photoUrl}
              alt={`${brand.name}, ${brand.handle}`}
              fill
              priority
              sizes="(min-width: 1024px) 420px, 80vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-8 h-24 w-24 sm:h-32 sm:w-32 rounded-2xl bg-ink-raised card-border p-2 shadow-2xl shadow-black/40">
            <div className="relative h-full w-full overflow-hidden rounded-xl">
              <Image
                src={brand.mascotUrl}
                alt={`${brand.handle} mascot`}
                fill
                sizes="128px"
                className="object-contain p-1.5"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
