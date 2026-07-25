const timeline = [
  { year: "2019", title: "Started freelance photography", detail: "First paid shoots around Klaten while studying." },
  { year: "2021", title: "Founded Klatenspot", detail: "Began building a local discovery platform from scratch." },
  { year: "2022", title: "Expanded into video & events", detail: "Added videography and live event coverage to the practice." },
  { year: "2023", title: "Launched Visivine.id", detail: "Brought multiple regional platforms under one creative ecosystem." },
  { year: "2024", title: "Added web development", detail: "Started designing and building sites for clients and own platforms." },
];

const education = [
  { title: "Informatics Engineering", place: "Universitas — Central Java", period: "2019–2023" },
  { title: "Self-directed study, cinematography & color grading", place: "Independent", period: "2021–ongoing" },
];

const achievements = [
  "Grew Info Event Soloraya from 4K to 61K followers",
  "600+ places documented for Klatenspot",
  "Regional tourism partner for two Central Java districts",
  "98 average Lighthouse performance score across client websites",
];

export default function About() {
  return (
    <section id="about" className="container-px py-24 sm:py-32 border-t border-ink-border">
      <div className="max-w-content mx-auto grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-14">
        <div>
          <p className="eyebrow mb-3">About</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-paper tracking-tight">
            Building visual identities for how a place actually feels
          </h2>
          <p className="mt-5 text-paper-dim leading-relaxed">
            I started documenting small cafés and events around Klaten with a
            borrowed camera. That habit grew into Fadhil Graphy — a practice
            that now spans photography, film, brand design, and web
            development — and Visivine.id, the ecosystem of platforms I run
            alongside it.
          </p>
          <p className="mt-4 text-paper-dim leading-relaxed">
            My approach stays the same at any scale: understand what makes
            the subject specific, then get out of the way of it. No stock
            filters, no templated brand kits — every project starts from what
            the client or place actually is.
          </p>

          <div className="mt-10">
            <p className="text-sm font-semibold text-paper mb-4">Education</p>
            <ul className="space-y-4">
              {education.map((e) => (
                <li key={e.title} className="flex justify-between gap-4 border-b border-ink-border pb-4">
                  <div>
                    <p className="text-sm text-paper">{e.title}</p>
                    <p className="text-xs text-paper-faint mt-1">{e.place}</p>
                  </div>
                  <p className="text-xs text-paper-faint whitespace-nowrap">{e.period}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10">
            <p className="text-sm font-semibold text-paper mb-4">Achievements</p>
            <ul className="space-y-2.5">
              {achievements.map((a) => (
                <li key={a} className="flex gap-3 text-sm text-paper-dim">
                  <span className="mt-1.5 h-1 w-1 rounded-full bg-accent shrink-0" />
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold text-paper mb-6">Timeline</p>
          <ol className="relative border-l border-ink-border pl-8 space-y-10">
            {timeline.map((t) => (
              <li key={t.year} className="relative">
                <span className="absolute -left-[38px] top-1 h-3 w-3 rounded-full bg-accent ring-4 ring-ink" />
                <p className="text-xs text-accent font-medium">{t.year}</p>
                <p className="mt-1 font-display font-semibold text-paper">{t.title}</p>
                <p className="mt-1 text-sm text-paper-dim">{t.detail}</p>
              </li>
            ))}
          </ol>

          <div className="mt-10 rounded-2xl card-border bg-ink-card p-6 sm:p-8">
            <p className="text-sm font-semibold text-accent mb-2">Creative Philosophy</p>
            <p className="font-display text-xl text-paper leading-snug">
              &ldquo;Good work is specific. It could only belong to this
              subject, this brand, this place — nowhere else.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
