import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section id="testimonials" className="container-px py-24 sm:py-32 border-t border-ink-border">
      <div className="max-w-content mx-auto">
        <p className="eyebrow mb-3">Testimonials</p>
        <h2 className="font-display font-bold text-3xl sm:text-4xl text-paper tracking-tight max-w-2xl">
          What clients say after the delivery
        </h2>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded-2xl card-border bg-ink-card p-7">
              <blockquote className="text-paper leading-relaxed font-display text-lg">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5 text-sm">
                <span className="text-paper font-medium">{t.name}</span>
                <span className="text-paper-faint"> — {t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
