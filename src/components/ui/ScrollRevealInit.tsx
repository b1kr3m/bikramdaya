"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

/**
 * Drop this anywhere in a page to activate scroll-reveal
 * for all .reveal elements on that page.
 * Renders nothing visible.
 */
export function ScrollRevealInit() {
  useScrollReveal({ threshold: 0.15 });
  return null;
}
