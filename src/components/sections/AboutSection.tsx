"use client";

import Image from "next/image";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { CurveDivider } from "@/components/ui/CurveDivider";
import { aboutMedia } from "@/content/media";
import styles from "./AboutSection.module.css";

export function AboutSection() {
  return (
    <section id="about" className={`relative bg-cream px-5 py-24 ${styles.section}`}>
      <div className="mx-auto max-w-6xl">
        <div className={`grid items-center gap-8 md:grid-cols-2 lg:gap-12 ${styles.content}`}>
          <div className={`max-w-[460px] ${styles.textCol}`}>
            <SectionLabel>About Me</SectionLabel>
            <h2 className={`mb-7 font-sans font-bold leading-[1.18] text-[#171717] ${styles.heading}`}>
              A Dreamer,
              <br />
              An Educator,
              <br />
              <span className="text-green-primary">A Changemaker.</span>
            </h2>

            <p className={`mb-4 max-w-[440px] ${styles.para}`}>
              I&apos;m Bikram, a web security researcher turned educator with a
              mission to bring change through education.
            </p>
            <p className={`max-w-[440px] ${styles.para}`}>
              At the age of 22, I chose to follow my heart — teaching children,
              building schools, and creating opportunities for a better
              tomorrow.
            </p>

            <button
              onClick={() => {
                document.getElementById("goal")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-green-primary px-7 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-green-dark hover:shadow-lg hover:shadow-green-primary/25"
            >
              Read My Full Story
              <span aria-hidden="true">→</span>
            </button>
          </div>

          <div className={styles.mediaCol}>
            <div className="relative mx-auto h-[340px] w-full max-w-[620px] md:h-[430px] lg:h-[500px]">
              <div className={`absolute inset-0 ${styles.imageMask}`}>
                <Image
                  src={aboutMedia.feature.src}
                  alt={aboutMedia.feature.alt}
                  fill
                  className={styles.photo}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <CurveDivider fill="#fafafa" flip />
    </section>
  );
}
