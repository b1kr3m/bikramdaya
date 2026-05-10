import { SectionLabel } from "@/components/ui/SectionLabel";
import { siteConfig } from "@/lib/utils";
import styles from "./ContactSection.module.css";

export function ContactSection() {
  return (
    <section id="contact" className="bg-warm-white px-5 py-20">
      <div className="reveal mx-auto max-w-4xl text-center">
        <SectionLabel>Contact</SectionLabel>
        <h2 className={`font-serif text-3xl font-bold ${styles.title}`}>Let&apos;s Build This Together</h2>
        <p className={`mx-auto mt-4 max-w-xl text-sm ${styles.subtext}`}>
          For collaborations, sponsorships, and support, reach out anytime.
        </p>
        <a
          href={`mailto:${siteConfig.email}`}
          className="mt-7 inline-flex rounded-full bg-green-primary px-6 py-3 text-sm font-medium text-white hover:bg-green-light"
        >
          {siteConfig.email}
        </a>
      </div>
    </section>
  );
}
