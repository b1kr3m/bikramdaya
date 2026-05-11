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
    src: "/images/about_me.png",
    alt: "Bikram Daya portrait",
  },
} as const;

export const goalMedia = {
  feature: {
    src: "/images/about_me.png",
    alt: "Bikram Daya in a wheat field",
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
