import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Merge Tailwind classes safely */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Scroll to a section by ID */
export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

/** Donation amount options */
export const donationAmounts = [
  { label: "₹500", value: 500 },
  { label: "₹1,000", value: 1000 },
  { label: "₹2,500", value: 2500 },
  { label: "₹5,000", value: 5000 },
  { label: "₹10,000", value: 10000 },
] as const;

/** Nav links config */
export const navLinks = [
  { label: "Home", sectionId: "hero" },
  { label: "About Me", sectionId: "about" },
  { label: "My Goal", sectionId: "goal" },
  { label: "Support", sectionId: "support" },
  { label: "Gallery", sectionId: "gallery" },
  { label: "Contact", sectionId: "contact" },
] as const;

/** Site metadata */
export const siteConfig = {
  name: "Bikram Daya Foundation",
  tagline: "हर बच्चे का अधिकार, हर सपने की शुरुआत।",
  description:
    "A personal mission to build schools and create opportunities for children across India.",
  founderName: "Bikram Daya",
  founderRole: "Web Security Researcher · Educator · Dreamer",
  siteUrl: "https://bikramdaya.org",
  ogImage: "/images/bikram-daya.jpg",
  donateUrl: "https://razorpay.me/@bikramdaya",
  coffeeUrl: "https://buymeacoffee.com/bikramdaya",
  email: "hello@bikramdaya.org",
} as const;
