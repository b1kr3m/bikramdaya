import Image from "next/image";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { CurveDivider } from "@/components/ui/CurveDivider";
import { goalMedia } from "@/content/media";
import styles from "./GoalSection.module.css";

export function GoalSection() {
  return (
    <section id="goal" className="relative overflow-hidden bg-warm-white px-5 pt-24 pb-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 grid items-center gap-10 md:grid-cols-2 lg:gap-14">
          <div className="max-w-[500px]">
            <SectionLabel>My Goal</SectionLabel>

            <h2 className={`mb-6 font-sans font-bold leading-[1.18] text-[#171717] ${styles.heading}`}>
              A School Today,
              <br />
              <span className="text-green-primary">A Better Tomorrow.</span>
            </h2>

            <div className="max-w-[460px] space-y-3.5">
              <p className={styles.para}>
                My dream is simple — to build a school where every child, no
                matter where they come from, gets the chance to learn, grow, and
                dream big.
              </p>
              <p className={styles.para}>
                I believe education is the strongest tool we have to break
                barriers and create a better future.
              </p>
              <p className={styles.para}>
                This school will be more than a building; it will be a place of
                hope, values, and opportunities for the next generation.
              </p>
              <p className="pt-2 text-[0.95rem] font-semibold leading-[1.55] text-green-primary">
                I am working towards this dream.
                <br />
                Will you be a part of it?
              </p>
            </div>
          </div>

          <div>
            <div className="relative mx-auto h-[350px] w-full max-w-[640px] md:h-[430px] lg:h-[500px]">
              <div className={`absolute inset-0 ${styles.imageMask}`}>
                <Image
                  src={goalMedia.feature.src}
                  alt={goalMedia.feature.alt}
                  fill
                  className={styles.photo}
                />
              </div>
            </div>
          </div>
        </div>

        <div className={`rounded-[1.25rem] px-6 py-12 text-center md:px-10 ${styles.quoteBox}`}>
          <div className="mb-2 text-5xl leading-none text-green-primary">“</div>
          <p className={`mx-auto max-w-3xl ${styles.quoteText}`}>
            When we educate a child, we don&apos;t just change their life,
            we uplift entire communities and shape a stronger, brighter tomorrow.
          </p>
          <div className="mt-2 text-5xl leading-none text-green-primary">”</div>
        </div>
      </div>

      <CurveDivider fill="#0f1115" />
    </section>
  );
}
