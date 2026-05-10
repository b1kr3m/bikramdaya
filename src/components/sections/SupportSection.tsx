import { Coffee } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { DonationCard } from "@/components/ui/DonationCard";
import { siteConfig } from "@/lib/utils";
import styles from "./SupportSection.module.css";

const impactItems = [
  { icon: "🏗️", title: "Build Schools", desc: "Create safe learning spaces" },
  { icon: "📖", title: "Educate Children", desc: "Provide quality education" },
  { icon: "🤝", title: "Uplift Communities", desc: "Build a stronger tomorrow" },
];

const waysToCo = ["🤝 Collaborate", "💼 Sponsor", "📈 Invest", "📢 Spread the Word"];

export function SupportSection() {
  return (
    <section id="support" className="relative overflow-hidden bg-dark px-5 pt-24 pb-20">
      <div className={`pointer-events-none absolute top-1/4 left-0 h-80 w-80 rounded-full ${styles.ambientLeft}`} />
      <div className={`pointer-events-none absolute right-0 bottom-1/4 h-64 w-64 rounded-full ${styles.ambientRight}`} />

      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="mb-16 grid items-center gap-16 md:grid-cols-2 lg:gap-24">
          <div className="reveal">
            <SectionLabel dark>Support My Mission</SectionLabel>
            <h2 className={`mb-6 font-serif font-bold leading-[1.2] text-white ${styles.heading}`}>
              Your Support,
              <br />
              <span className={styles.headingAccent}>Their Tomorrow.</span>
            </h2>
            <div className="max-w-[420px] space-y-4">
              <p className="text-[0.95rem] leading-[1.85] text-white/60">
                Every contribution — big or small — brings us one step closer to
                building schools, creating opportunities, and uplifting the next
                generation.
              </p>
              <p className="text-[0.95rem] leading-[1.85] text-white/60">
                Together, we can create a world where every child has access to
                quality education and a brighter future.
              </p>
            </div>
          </div>

          <div className={`reveal reveal-delay-2 flex min-h-[280px] flex-col items-center justify-center gap-6 rounded-3xl p-8 ${styles.statsCard}`}>
            <span className="text-4xl opacity-25">🏫</span>
            <p className="text-center font-handwrite text-lg text-white/30">
              Every rupee builds a dream
            </p>
            <div className="flex gap-8">
              <div className="text-center">
                <div className={`text-2xl font-bold ${styles.metric}`}>100%</div>
                <div className="mt-0.5 text-[0.7rem] text-white/30">Transparency</div>
              </div>
              <div className={`w-px self-stretch ${styles.metricDivider}`} />
              <div className="text-center">
                <div className={`text-2xl font-bold ${styles.metric}`}>80G</div>
                <div className="mt-0.5 text-[0.7rem] text-white/30">Tax Benefit</div>
              </div>
            </div>
          </div>
        </div>

        <div className="reveal mb-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {impactItems.map((item) => (
            <div
              key={item.title}
              className={`rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-green-primary/25 ${styles.impactCard}`}
            >
              <div className="mb-3 text-2xl">{item.icon}</div>
              <div className="mb-1 text-sm font-semibold text-white">{item.title}</div>
              <div className="text-xs text-white/35">{item.desc}</div>
            </div>
          ))}
        </div>

        <div className="reveal">
          <DonationCard />
        </div>

        <div className={`reveal mt-6 rounded-2xl p-6 text-center ${styles.supportCard}`}>
          <p className="mb-2 font-handwrite text-lg text-white/35">
            Every sip of coffee = one step closer to the dream
          </p>
          <p className="mb-5 text-sm text-white/35">
            You can also support casually — no pressure, just love.
          </p>
          <a
            href={siteConfig.coffeeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-6 py-2.5 text-sm text-white/70 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10 hover:text-white"
          >
            <Coffee size={16} />
            Buy Me a Coffee
          </a>
          <p className="mt-4 text-xs text-white/20">
            Every contribution helps move this dream forward.
          </p>
        </div>

        <div className="reveal mt-10 text-center">
          <p className="section-label mb-4 text-white/25">Other Ways to Help</p>
          <div className="flex flex-wrap justify-center gap-3">
            {waysToCo.map((w) => (
              <span key={w} className={`rounded-full px-5 py-2 text-sm text-white/45 ${styles.pill}`}>
                {w}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
