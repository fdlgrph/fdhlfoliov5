import { Mail, MessageCircle, Instagram, Linkedin, Github, Music2, Clock } from "lucide-react";
import { brand } from "@/lib/data";

const channels = [
  { label: "Email", value: brand.email, href: `mailto:${brand.email}`, Icon: Mail },
  {
    label: "WhatsApp",
    value: brand.whatsappDisplay,
    href: `https://wa.me/${brand.whatsapp}`,
    Icon: MessageCircle,
  },
  { label: "Instagram", value: "@fadhilgraphy", href: brand.instagram, Icon: Instagram },
  { label: "TikTok", value: "@fadhilgraphy", href: brand.tiktok, Icon: Music2 },
  { label: "LinkedIn", value: "fadhilgraphy", href: brand.linkedin, Icon: Linkedin },
  { label: "GitHub", value: "fadhilgraphy", href: brand.github, Icon: Github },
];

export default function Contact() {
  return (
    <section id="contact" className="container-px py-24 sm:py-32 border-t border-ink-border">
      <div className="max-w-content mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-14 items-start">
        <div>
          <p className="eyebrow mb-3">Contact</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-paper tracking-tight">
            Have a project in mind? Let&apos;s talk about it.
          </h2>
          <p className="mt-5 text-paper-dim leading-relaxed max-w-md">
            The fastest way to reach me is WhatsApp. For formal briefs or
            collaboration proposals, email works best.
          </p>

          <div className="mt-8 flex items-center gap-3 text-sm text-paper-dim">
            <Clock size={16} className="text-accent" />
            {brand.businessHours}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {channels.map(({ label, value, href, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group flex items-start gap-4 rounded-2xl card-border bg-ink-card p-5 hover:border-accent/40 transition-colors"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-accent-soft text-accent">
                <Icon size={17} />
              </span>
              <span>
                <span className="block text-xs text-paper-faint">{label}</span>
                <span className="block text-sm text-paper group-hover:text-accent transition-colors">
                  {value}
                </span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
