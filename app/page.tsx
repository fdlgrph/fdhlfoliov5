import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import SectionSkeleton from "@/components/SectionSkeleton";

const SelectedWorks = dynamic(() => import("@/components/SelectedWorks"), {
  loading: () => <SectionSkeleton id="work" />,
});
const About = dynamic(() => import("@/components/About"), {
  loading: () => <SectionSkeleton id="about" />,
});
const Services = dynamic(() => import("@/components/Services"), {
  loading: () => <SectionSkeleton id="services" />,
});
const VisivineEcosystem = dynamic(() => import("@/components/VisivineEcosystem"), {
  loading: () => <SectionSkeleton id="ecosystem" />,
});
const Pricing = dynamic(() => import("@/components/Pricing"), {
  loading: () => <SectionSkeleton id="pricing" />,
});
const Testimonials = dynamic(() => import("@/components/Testimonials"), {
  loading: () => <SectionSkeleton id="testimonials" />,
});
const Contact = dynamic(() => import("@/components/Contact"), {
  loading: () => <SectionSkeleton id="contact" />,
});

export default function Home() {
  return (
    <>
      <Hero />
      <SelectedWorks />
      <About />
      <Services />
      <VisivineEcosystem />
      <Pricing />
      <Testimonials />
      <Contact />
    </>
  );
}
