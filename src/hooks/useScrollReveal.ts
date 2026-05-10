"use client";

import { useEffect, useRef, RefObject } from "react";

interface UseScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
}

/**
 * Adds the 'visible' class to elements with 'reveal' class
 * when they enter the viewport. Works with the CSS in globals.css.
 */
export function useScrollReveal(options: UseScrollRevealOptions = {}) {
  const { threshold = 0.15, rootMargin = "0px" } = options;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold, rootMargin }
    );

    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [threshold, rootMargin]);
}

/**
 * Returns a ref that, when attached to a container, observes
 * all .reveal elements inside it.
 */
export function useRevealRef<T extends HTMLElement = HTMLDivElement>(
  options: UseScrollRevealOptions = {}
): RefObject<T | null> {
  const ref = useRef<T>(null);
  const { threshold = 0.15 } = options;

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold }
    );

    const elements = container.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
