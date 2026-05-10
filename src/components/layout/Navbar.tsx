"use client";

import { useEffect, useState } from "react";
import { Heart, Menu, X } from "lucide-react";
import { cn, navLinks, scrollToSection, siteConfig } from "@/lib/utils";
import styles from "./Navbar.module.css";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (id: string) => {
    setOpen(false);
    scrollToSection(id);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-white/5 bg-dark/80 py-3 backdrop-blur-xl"
          : "bg-dark/40 py-4 backdrop-blur-md"
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5">
        <button onClick={() => handleNav("hero")} className="group flex items-center gap-3" aria-label="Go to home">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-primary text-lg leading-none shadow-lg transition-colors duration-300 group-hover:bg-green-light">
            🌱
          </div>
          <div className="text-left">
            <span className={`block font-serif font-bold leading-tight text-white ${styles.brandTitle}`}>
              {siteConfig.founderName}
            </span>
            <span className={`block font-sans text-[0.58rem] uppercase text-white/40 ${styles.brandSub}`}>
              Foundation
            </span>
          </div>
        </button>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <button
              key={link.sectionId}
              onClick={() => handleNav(link.sectionId)}
              className="text-sm font-normal text-white/60 transition-colors duration-200 hover:text-white"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNav("support")}
            className="flex items-center gap-2 rounded-full bg-green-primary px-5 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-green-light hover:shadow-lg hover:shadow-green-primary/30"
          >
            <Heart size={14} className="fill-white" />
            Donate
          </button>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={() => handleNav("support")}
            className="flex items-center gap-1.5 rounded-full bg-green-primary px-3 py-1.5 text-xs font-medium text-white"
          >
            <Heart size={12} className="fill-white" />
            Donate
          </button>
          <button onClick={() => setOpen((o) => !o)} className="text-white/70 hover:text-white" aria-label="Toggle menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="flex flex-col gap-5 border-t border-white/5 bg-dark/98 px-6 py-6 backdrop-blur-xl md:hidden">
          {navLinks.map((link) => (
            <button
              key={link.sectionId}
              onClick={() => handleNav(link.sectionId)}
              className="text-left text-base font-normal text-white/70 transition-colors hover:text-white"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNav("support")}
            className="text-left text-base font-normal text-white/70 transition-colors hover:text-white"
          >
            Support
          </button>
        </div>
      )}
    </nav>
  );
}
