import Hero from "@/components/sections/Hero";
import { Training } from "@/components/sections/Training";
import { Companies } from "@/components/sections/Companies";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <Training />
      <Companies />
      <Testimonials />
      <FAQ />
      <CTA />
    </main>
  );
}
