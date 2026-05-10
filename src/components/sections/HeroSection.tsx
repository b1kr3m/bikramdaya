"use client";

import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { CurveDivider } from "@/components/ui/CurveDivider";
import { heroMedia } from "@/content/media";
import styles from "./HeroSection.module.css";

export function HeroSection() {
  return (
    <section
      id="hero"
      className={`relative flex flex-col items-center justify-center overflow-hidden px-5 pt-20 pb-20 text-center ${styles.section}`}
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={heroMedia.portrait.src}
          alt={heroMedia.portrait.alt}
          fill
          priority
          className={styles.photo}
        />
      </div>

      <div className={styles.edgeTop} />
      <div className={styles.edgeBottom} />
      <div className={styles.edgeLeft} />
      <div className={styles.edgeRight} />

      <div className={styles.overlay} />
      <div className="dot-pattern absolute inset-0 z-[1]" />
      <div className={styles.vignette} />

      <div className={`relative z-10 mx-auto max-w-2xl ${styles.titleWrap}`}>
        <h1 className={`font-serif font-black leading-none text-white ${styles.title}`}>
          Education
        </h1>
      </div>

      <div className="animate-bounce-slow absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20">
          <ChevronDown size={16} className="text-white/40" />
        </div>
      </div>

      <CurveDivider fill="#f6f3ee" />
    </section>
  );
}
