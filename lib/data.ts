export const brand = {
  name: "Ahmad Nur Fadhil",
  handle: "Fadhil Graphy",
  parentBrand: "Visivine.id",
  roles: [
    "Creative Director",
    "Content Creator",
    "Photographer",
    "Videographer",
    "Graphic Designer",
    "Social Media Specialist",
    "Web Developer",
  ],
  intro:
    "I build the visual and digital identity for brands across Central Java — from a single photograph to a full ecosystem of platforms under Visivine.id.",
  mascotUrl: "https://c.termai.cc/i118/wkZY.png",
  photoUrl: "https://c.termai.cc/i121/Nsk0.jpeg",
  email: "hello@fadhilgraphy.com",
  whatsapp: "6281234567890",
  whatsappDisplay: "+62 812-3456-7890",
  instagram: "https://instagram.com/fadhilgraphy",
  tiktok: "https://tiktok.com/@fadhilgraphy",
  linkedin: "https://linkedin.com/in/fadhilgraphy",
  github: "https://github.com/fadhilgraphy",
  cvUrl: "/cv-ahmad-nur-fadhil.pdf",
  businessHours: "Mon–Sat, 09.00–21.00 WIB",
};

export type WorkCategory =
  | "Photography"
  | "Videography"
  | "Drone"
  | "Website"
  | "Brand Identity"
  | "Social Media Campaign";

export interface WorkItem {
  slug: string;
  title: string;
  client: string;
  category: WorkCategory;
  year: string;
  cover: string;
  summary: string;
  role: string;
  tools: string[];
  outcome: string;
}

export const works: WorkItem[] = [
  {
    slug: "klatenspot-visual-identity",
    title: "Klatenspot Visual Identity",
    client: "Klatenspot",
    category: "Brand Identity",
    year: "2024",
    cover: "https://c.termai.cc/i121/Nsk0.jpeg",
    summary:
      "A full identity system for Klaten's regional discovery platform, from wordmark to on-ground signage.",
    role: "Creative Director, Brand Designer",
    tools: ["Illustrator", "Photoshop", "Figma"],
    outcome: "Consistent identity now used across 40+ published features.",
  },
  {
    slug: "sowan-yogyakarta-launch-film",
    title: "Sowan Yogyakarta — Launch Film",
    client: "Sowan Yogyakarta",
    category: "Videography",
    year: "2024",
    cover: "https://c.termai.cc/i121/Nsk0.jpeg",
    summary:
      "A cinematic two-minute launch film introducing Sowan Yogyakarta's cultural travel platform.",
    role: "Director, Cinematographer, Editor",
    tools: ["Sony A7 IV", "DaVinci Resolve", "DJI Mini"],
    outcome: "180K organic views across Instagram and TikTok in the first month.",
  },
  {
    slug: "explore-kemalang-drone-series",
    title: "Explore Kemalang — Aerial Series",
    client: "Explore Kemalang",
    category: "Drone",
    year: "2023",
    cover: "https://c.termai.cc/i121/Nsk0.jpeg",
    summary:
      "An aerial documentation series covering the highland routes and villages around Kemalang.",
    role: "Drone Pilot, Editor",
    tools: ["DJI Air 2S", "Lightroom", "Premiere Pro"],
    outcome: "Footage adopted as the region's official tourism reel.",
  },
  {
    slug: "placethify-product-site",
    title: "Placethify — Product Website",
    client: "Placethify",
    category: "Website",
    year: "2024",
    cover: "https://c.termai.cc/i121/Nsk0.jpeg",
    summary: "A fast, map-first website for Placethify's local venue directory.",
    role: "Web Developer, UI Designer",
    tools: ["Next.js", "Tailwind", "Figma"],
    outcome: "Sub-1s load time, 98 Lighthouse performance score.",
  },
  {
    slug: "info-event-soloraya-campaign",
    title: "Info Event Soloraya — Weekly Campaign",
    client: "Info Event Soloraya",
    category: "Social Media Campaign",
    year: "2023–ongoing",
    cover: "https://c.termai.cc/i121/Nsk0.jpeg",
    summary:
      "Ongoing content direction and design system for a weekly regional events feed.",
    role: "Content Director, Designer",
    tools: ["Illustrator", "After Effects", "Notion"],
    outcome: "Grew following from 4K to 61K across two years.",
  },
  {
    slug: "wedding-of-arka-naya",
    title: "The Wedding of Arka & Naya",
    client: "Private Client",
    category: "Photography",
    year: "2024",
    cover: "https://c.termai.cc/i121/Nsk0.jpeg",
    summary: "Full-day documentation, from morning preparation to the closing reception.",
    role: "Lead Photographer",
    tools: ["Sony A7 IV", "Lightroom"],
    outcome: "Delivered a 400-frame edited gallery within 5 business days.",
  },
];

export interface ServiceItem {
  slug: string;
  title: string;
  category: "Visual" | "Digital" | "Growth";
  short: string;
  workflow: string[];
  deliverables: string[];
  faq: { q: string; a: string }[];
}

export const services: ServiceItem[] = [
  {
    slug: "photography",
    title: "Photography",
    category: "Visual",
    short: "Portrait, product, and event photography with a clean, editorial finish.",
    workflow: ["Brief & mood board", "On-location shoot", "Culling & color grade", "Delivery"],
    deliverables: ["Edited high-resolution files", "Web-ready export set", "Private online gallery"],
    faq: [
      { q: "How many edited photos do I receive?", a: "Typically 40–120 edited frames depending on the package and session length." },
      { q: "How long is turnaround?", a: "3–7 business days for standard sessions, 24-hour rush available." },
    ],
  },
  {
    slug: "videography",
    title: "Videography",
    category: "Visual",
    short: "Narrative-driven video production for brands, events, and products.",
    workflow: ["Concept & script", "Production day", "Edit & color", "Sound design", "Delivery"],
    deliverables: ["Master edit", "Social cutdowns (9:16, 1:1)", "Raw footage on request"],
    faq: [
      { q: "Do you write the script?", a: "Yes, concept and script development are included in every video package." },
    ],
  },
  {
    slug: "drone-documentation",
    title: "Drone Documentation",
    category: "Visual",
    short: "Licensed aerial photography and video for landscapes and large venues.",
    workflow: ["Airspace check", "Flight plan", "Capture", "Edit & stabilize"],
    deliverables: ["Aerial photo set", "Aerial video clips", "4K raw footage"],
    faq: [{ q: "Is the pilot licensed?", a: "Yes, all flights follow local aviation regulations and venue permissions." }],
  },
  {
    slug: "wedding-documentation",
    title: "Wedding Documentation",
    category: "Visual",
    short: "Full-day photo and video coverage designed around how your day actually unfolds.",
    workflow: ["Pre-wedding consultation", "Full-day coverage", "Edit & grade", "Album design"],
    deliverables: ["Edited gallery", "Highlight film", "Printed album (optional)"],
    faq: [{ q: "Can you cover two locations in one day?", a: "Yes, with an additional travel and second-shooter allowance." }],
  },
  {
    slug: "event-documentation",
    title: "Event Documentation",
    category: "Visual",
    short: "Photo and video coverage for corporate events, festivals, and launches.",
    workflow: ["Run-of-show review", "Live coverage", "Same-day highlights", "Full delivery"],
    deliverables: ["Edited photo set", "Same-day teaser reel", "Full recap video"],
    faq: [{ q: "Can you deliver same-day content?", a: "Yes, a same-day highlight reel is available as an add-on." }],
  },
  {
    slug: "commercial-video",
    title: "Commercial Video",
    category: "Visual",
    short: "Product and brand films built for paid media and landing pages.",
    workflow: ["Creative brief", "Storyboard", "Production", "Edit & versioning"],
    deliverables: ["Hero cut", "Ad variants by platform", "Thumbnail frames"],
    faq: [{ q: "Do you handle paid ad specs?", a: "Yes, deliverables are sized for Meta, TikTok, and YouTube ad placements." }],
  },
  {
    slug: "graphic-design",
    title: "Graphic Design",
    category: "Digital",
    short: "Editorial and marketing design across print and digital formats.",
    workflow: ["Brief", "Concept exploration", "Refinement", "Final files"],
    deliverables: ["Print-ready files", "Digital assets", "Source files"],
    faq: [{ q: "How many concepts do I see first?", a: "Two initial directions, refined into one final based on your feedback." }],
  },
  {
    slug: "brand-identity",
    title: "Brand Identity",
    category: "Digital",
    short: "Logo, visual system, and guidelines built to hold up across every touchpoint.",
    workflow: ["Discovery", "Positioning", "Logo & system design", "Brand guideline"],
    deliverables: ["Logo suite", "Color & type system", "Brand guideline PDF"],
    faq: [{ q: "Do you offer stationery design?", a: "Yes, business cards, letterheads, and social templates are available as add-ons." }],
  },
  {
    slug: "website-development",
    title: "Website Development",
    category: "Digital",
    short: "Fast, modern websites built on Next.js with a focus on real performance.",
    workflow: ["Discovery", "Wireframe", "Design", "Build", "QA & launch"],
    deliverables: ["Production website", "CMS setup (optional)", "Performance report"],
    faq: [{ q: "What's your typical stack?", a: "Next.js, TypeScript, and Tailwind, hosted on Vercel." }],
  },
  {
    slug: "landing-page-development",
    title: "Landing Page Development",
    category: "Digital",
    short: "Conversion-focused single pages for launches and campaigns.",
    workflow: ["Brief", "Copy & wireframe", "Design", "Build", "Launch"],
    deliverables: ["Live landing page", "Analytics setup", "Editable copy blocks"],
    faq: [{ q: "How fast can this launch?", a: "Standard landing pages ship within 5–7 business days." }],
  },
  {
    slug: "social-media-management",
    title: "Social Media Management",
    category: "Growth",
    short: "Ongoing content strategy, design, and scheduling for brand accounts.",
    workflow: ["Content strategy", "Monthly content calendar", "Production", "Scheduling & reporting"],
    deliverables: ["Monthly content calendar", "Designed posts & captions", "Monthly performance report"],
    faq: [{ q: "Is content creation included?", a: "Yes, photography and design for feed content are part of the retainer." }],
  },
  {
    slug: "content-creation",
    title: "Content Creation",
    category: "Growth",
    short: "Short-form video and photo content built for how each platform is actually watched.",
    workflow: ["Content plan", "Shoot day", "Edit", "Delivery & scheduling"],
    deliverables: ["Short-form video set", "Photo content set", "Caption drafts"],
    faq: [{ q: "How many pieces per shoot day?", a: "8–15 pieces of content depending on format and complexity." }],
  },
  {
    slug: "instagram-visit",
    title: "Instagram Visit",
    category: "Growth",
    short: "On-site content visits designed to boost a venue or product's Instagram presence.",
    workflow: ["Schedule visit", "On-site shoot", "Post design", "Publish"],
    deliverables: ["Feed posts", "Story set", "Optional reel"],
    faq: [{ q: "How long does a visit take?", a: "Most visits run 1–2 hours on location." }],
  },
  {
    slug: "instagram-endorsement",
    title: "Instagram Endorsement",
    category: "Growth",
    short: "Authentic endorsement content matched to a brand's tone and audience.",
    workflow: ["Brand brief", "Content angle", "Production", "Publish & report"],
    deliverables: ["Endorsement post or reel", "Performance screenshot report"],
    faq: [{ q: "Can you follow brand guidelines?", a: "Yes, all endorsement content follows your provided tone and messaging guide." }],
  },
  {
    slug: "monthly-content",
    title: "Monthly Content",
    category: "Growth",
    short: "A recurring content package for brands that need consistent monthly output.",
    workflow: ["Monthly plan", "Production days", "Editing", "Delivery in batches"],
    deliverables: ["Photo & video batch", "Content calendar", "Usage-ready exports"],
    faq: [{ q: "Can the plan change month to month?", a: "Yes, the content plan is revisited every month based on performance." }],
  },
  {
    slug: "ai-automation",
    title: "AI Automation",
    category: "Digital",
    short: "Practical automation for content pipelines, reporting, and repetitive workflows.",
    workflow: ["Workflow audit", "Tool selection", "Build & test", "Handover & training"],
    deliverables: ["Working automation", "Documentation", "Handover session"],
    faq: [{ q: "What kind of tasks can be automated?", a: "Common examples are content scheduling, report generation, and lead follow-ups." }],
  },
];

export interface EcosystemProject {
  slug: string;
  name: string;
  description: string;
  role: string;
  category: string;
  stats: { label: string; value: string }[];
  url: string;
  gallery: string[];
  achievements: string[];
  responsibilities: string[];
}

export const ecosystem: EcosystemProject[] = [
  {
    slug: "klatenspot",
    name: "Klatenspot",
    description: "A discovery platform surfacing places, food, and events across Klaten Regency.",
    role: "Founder & Creative Director",
    category: "Local Discovery",
    stats: [
      { label: "Followers", value: "58K" },
      { label: "Places featured", value: "600+" },
      { label: "Since", value: "2021" },
    ],
    url: "https://instagram.com/klatenspot",
    gallery: ["https://c.termai.cc/i121/Nsk0.jpeg", "https://c.termai.cc/i121/Nsk0.jpeg"],
    achievements: ["Regional media partner for two Klaten tourism events", "600+ places documented and published"],
    responsibilities: ["Content direction", "Photography & videography", "Community management"],
  },
  {
    slug: "info-event-soloraya",
    name: "Info Event Soloraya",
    description: "A weekly feed of events happening across the greater Solo Raya region.",
    role: "Content Director",
    category: "Events Media",
    stats: [
      { label: "Followers", value: "61K" },
      { label: "Events listed / month", value: "80+" },
      { label: "Since", value: "2022" },
    ],
    url: "https://instagram.com/infoeventsoloraya",
    gallery: ["https://c.termai.cc/i121/Nsk0.jpeg", "https://c.termai.cc/i121/Nsk0.jpeg"],
    achievements: ["Grew audience from 4K to 61K in two years", "Official promotion partner for 15+ events"],
    responsibilities: ["Weekly content calendar", "Poster & feed design", "Organizer partnerships"],
  },
  {
    slug: "sowan-yogyakarta",
    name: "Sowan Yogyakarta",
    description: "A cultural travel platform introducing Yogyakarta's heritage sites and traditions.",
    role: "Creative Director",
    category: "Cultural Travel",
    stats: [
      { label: "Followers", value: "34K" },
      { label: "Launch film views", value: "180K" },
      { label: "Since", value: "2023" },
    ],
    url: "https://instagram.com/sowanyogyakarta",
    gallery: ["https://c.termai.cc/i121/Nsk0.jpeg", "https://c.termai.cc/i121/Nsk0.jpeg"],
    achievements: ["Launch film reached 180K organic views", "Featured by two regional tourism boards"],
    responsibilities: ["Brand identity", "Film direction", "Social strategy"],
  },
  {
    slug: "info-event-jogjakarta",
    name: "Info Event Jogjakarta",
    description: "Daily event listings and coverage for Yogyakarta's cultural and entertainment scene.",
    role: "Content Director",
    category: "Events Media",
    stats: [
      { label: "Followers", value: "45K" },
      { label: "Posts / month", value: "60+" },
      { label: "Since", value: "2022" },
    ],
    url: "https://instagram.com/infoeventjogjakarta",
    gallery: ["https://c.termai.cc/i121/Nsk0.jpeg", "https://c.termai.cc/i121/Nsk0.jpeg"],
    achievements: ["Daily publishing cadence maintained for 3 years", "Partnered with 20+ local organizers"],
    responsibilities: ["Editorial calendar", "Graphic templates", "Organizer outreach"],
  },
  {
    slug: "placethify",
    name: "Placethify",
    description: "A map-first venue directory helping people find places that fit what they're looking for.",
    role: "Product Designer & Developer",
    category: "Web Product",
    stats: [
      { label: "Venues listed", value: "1,200+" },
      { label: "Lighthouse score", value: "98" },
      { label: "Since", value: "2024" },
    ],
    url: "https://placethify.com",
    gallery: ["https://c.termai.cc/i121/Nsk0.jpeg", "https://c.termai.cc/i121/Nsk0.jpeg"],
    achievements: ["Sub-1s average load time", "1,200+ venues indexed at launch"],
    responsibilities: ["Product design", "Frontend development", "Performance optimization"],
  },
  {
    slug: "explore-kemalang",
    name: "Explore Kemalang",
    description: "An aerial and ground documentation project covering the highland district of Kemalang.",
    role: "Drone Pilot & Editor",
    category: "Tourism Media",
    stats: [
      { label: "Followers", value: "22K" },
      { label: "Locations covered", value: "35+" },
      { label: "Since", value: "2023" },
    ],
    url: "https://instagram.com/explorekemalang",
    gallery: ["https://c.termai.cc/i121/Nsk0.jpeg", "https://c.termai.cc/i121/Nsk0.jpeg"],
    achievements: ["Footage adopted as the district's official tourism reel", "35+ locations documented aerially"],
    responsibilities: ["Aerial capture", "Editing", "Route planning"],
  },
];

export interface PricingPackage {
  slug: string;
  title: string;
  group: "Visual" | "Digital" | "Growth";
  startingFrom: string | null;
  unit: string;
  includes: string[];
  note: string;
}

export const pricing: PricingPackage[] = [
  { slug: "photography", title: "Photography", group: "Visual", startingFrom: "Rp 800,000", unit: "per session", includes: ["Up to 2 hours on location", "40+ edited photos", "Private online gallery"], note: "Extra hours and locations billed separately." },
  { slug: "videography", title: "Videography", group: "Visual", startingFrom: "Rp 2,500,000", unit: "per project", includes: ["Concept & script", "1 shoot day", "1 master edit + 2 cutdowns"], note: "Multi-day shoots quoted individually." },
  { slug: "wedding", title: "Wedding Documentation", group: "Visual", startingFrom: "Rp 6,000,000", unit: "per event", includes: ["Full-day photo & video coverage", "Edited gallery", "Highlight film"], note: "Album printing available as an add-on." },
  { slug: "event-documentation", title: "Event Documentation", group: "Visual", startingFrom: "Rp 3,000,000", unit: "per event", includes: ["Live photo & video coverage", "Same-day teaser", "Full recap video"], note: "Pricing scales with event duration and crew size." },
  { slug: "commercial-promotion", title: "Commercial Promotion", group: "Visual", startingFrom: null, unit: "custom", includes: ["Creative brief & storyboard", "Full production", "Platform-specific ad cuts"], note: "Scoped per campaign — contact for quote." },
  { slug: "business-profile", title: "Business Profile", group: "Visual", startingFrom: "Rp 3,500,000", unit: "per video", includes: ["On-site filming", "Interview direction", "3–5 minute final cut"], note: "Includes one round of revisions." },
  { slug: "instagram-visit", title: "Instagram Visit", group: "Growth", startingFrom: "Rp 500,000", unit: "per visit", includes: ["1–2 hour on-site shoot", "Feed posts + story set", "Delivered within 48 hours"], note: "Reel add-on available." },
  { slug: "instagram-endorsement", title: "Instagram Endorsement", group: "Growth", startingFrom: "Rp 750,000", unit: "per post", includes: ["Content angle & script", "Production & editing", "Performance report"], note: "Rates vary by content format." },
  { slug: "monthly-content", title: "Monthly Content", group: "Growth", startingFrom: "Rp 4,000,000", unit: "per month", includes: ["Monthly content calendar", "2 production days", "12+ pieces of content"], note: "Custom volume available on request." },
  { slug: "website-development", title: "Website Development", group: "Digital", startingFrom: "Rp 5,000,000", unit: "per project", includes: ["Discovery & wireframe", "Custom Next.js build", "Performance-optimized launch"], note: "Scope depends on page count and features." },
  { slug: "landing-page", title: "Landing Page", group: "Digital", startingFrom: "Rp 2,000,000", unit: "per page", includes: ["Copy & wireframe support", "Custom design", "5–7 day delivery"], note: "Additional revisions billed hourly." },
  { slug: "graphic-design", title: "Graphic Design", group: "Digital", startingFrom: "Rp 300,000", unit: "per asset", includes: ["Two initial concepts", "One refinement round", "Print & digital-ready files"], note: "Volume discounts for asset bundles." },
  { slug: "drone-documentation", title: "Drone Documentation", group: "Visual", startingFrom: "Rp 1,200,000", unit: "per session", includes: ["Licensed flight & capture", "Edited photo & video set", "Raw footage on request"], note: "Subject to airspace approval." },
  { slug: "custom-package", title: "Custom Package", group: "Digital", startingFrom: null, unit: "custom", includes: ["Combine services across visual & digital", "Dedicated project timeline", "Single point of contact"], note: "Built around your specific scope — contact for quote." },
];

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
}

export const testimonials: Testimonial[] = [
  { name: "Rani Puspita", role: "Owner, Klatenspot Partner Cafe", quote: "The photos captured exactly the mood we wanted for our launch — clean, warm, and unmistakably ours." },
  { name: "Bagas Wirawan", role: "Event Organizer, Soloraya", quote: "Same-day highlight reels from our events have become something our audience actually waits for." },
  { name: "Dinda Ayu", role: "Bride, Wedding Client", quote: "Every important moment of our day was there in the gallery, without ever feeling staged." },
  { name: "Yoga Pratama", role: "Founder, Placethify", quote: "The site loads instantly even on our team's oldest test phones. That mattered more than we expected." },
];

export const navLinks = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Ecosystem", href: "#ecosystem" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];
