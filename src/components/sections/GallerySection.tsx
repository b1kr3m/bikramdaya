import Image from "next/image";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { galleryItems } from "@/content/media";
import styles from "./GallerySection.module.css";

export function GallerySection() {
  return (
    <section id="gallery" className="bg-cream px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="reveal mb-10">
          <SectionLabel>Gallery</SectionLabel>
          <h2 className={`font-serif text-3xl font-bold ${styles.title}`}>
            Moments From The Mission
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item) => (
            <article
              key={`${item.src}-${item.alt}`}
              className={`reveal overflow-hidden rounded-2xl bg-white ${styles.card}`}
            >
              <div className="relative aspect-[4/3]">
                <Image src={item.src} alt={item.alt} fill className="object-cover" />
              </div>
              {(item.title || item.date) && (
                <div className="px-4 py-3">
                  {item.title && <p className="text-sm font-semibold text-[#1a1a1a]">{item.title}</p>}
                  {item.date && <p className="text-xs text-[#555]">{item.date}</p>}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
