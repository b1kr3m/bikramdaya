export type GalleryItem = {
  src: string;
  alt: string;
  title?: string;
  date?: string;
};

export const heroMedia = {
  portrait: {
    src: "/images/bikram-daya.jpg",
    alt: "Bikram Daya",
  },
} as const;

export const aboutMedia = {
  feature: {
    // Replace this with your final image later (same folder: public/images)
    src: "/images/second_page.png",
    alt: "Bikram Daya portrait",
  },
} as const;

export const goalMedia = {
  feature: {
    // Replace this with your final image later (same folder: public/images).
    // Safe fallback avoids broken-image UI until a dedicated goal image is added.
    src: "/images/second_page.png",
    alt: "Bikram Daya with children",
  },
} as const;

// Add new gallery images by copying files into `public/images`
// and adding one item here.
export const galleryItems: GalleryItem[] = [
  {
    src: "/images/bikram-daya.jpg",
    alt: "Bikram Daya",
    title: "Founder",
  },
];
