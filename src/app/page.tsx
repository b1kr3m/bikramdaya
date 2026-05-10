import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { GoalSection } from "@/components/sections/GoalSection";
import { SupportSection } from "@/components/sections/SupportSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { ContactSection } from "@/components/sections/ContactSection";
import { FooterBar } from "@/components/layout/FooterBar";
import { ScrollRevealInit } from "@/components/ui/ScrollRevealInit";

export default function HomePage() {
  return (
    <>
      {/* Initialises IntersectionObserver for .reveal elements */}
      <ScrollRevealInit />

      <HeroSection />
      <AboutSection />
      <GoalSection />
      <SupportSection />
      <GallerySection />
      <ContactSection />
      <FooterBar />
    </>
  );
}
