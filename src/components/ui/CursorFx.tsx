"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./CursorFx.module.css";

export function CursorFx() {
  const target = useRef({ x: 0, y: 0 });
  const inner = useRef({ x: 0, y: 0 });
  const outer = useRef({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [enabled] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(pointer: fine)").matches;
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (!enabled) return;

    const onMove = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
      setVisible(true);
    };

    const onLeave = () => setVisible(false);

    let raf = 0;
    const tick = () => {
      inner.current.x += (target.current.x - inner.current.x) * 0.42;
      inner.current.y += (target.current.y - inner.current.y) * 0.42;
      outer.current.x += (target.current.x - outer.current.x) * 0.16;
      outer.current.y += (target.current.y - outer.current.y) * 0.16;

      const root = document.documentElement;
      root.style.setProperty("--cursor-inner-x", `${inner.current.x}px`);
      root.style.setProperty("--cursor-inner-y", `${inner.current.y}px`);
      root.style.setProperty("--cursor-outer-x", `${outer.current.x}px`);
      root.style.setProperty("--cursor-outer-y", `${outer.current.y}px`);

      raf = window.requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseout", onLeave);
    raf = window.requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseout", onLeave);
      window.cancelAnimationFrame(raf);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <span className={`${styles.outer} ${visible ? styles.show : ""}`} aria-hidden="true" />
      <span className={`${styles.inner} ${visible ? styles.show : ""}`} aria-hidden="true" />
    </>
  );
}
