import { siteConfig } from "@/lib/utils";
import styles from "./FooterBar.module.css";

export function FooterBar() {
  return (
    <footer className="border-t border-white/[0.04] bg-dark py-8 text-center">
      <p className="text-xs tracking-wide text-white/15">
        © {new Date().getFullYear()} {siteConfig.name} · A personal mission in
        progress
      </p>
      <p className={`mt-1 text-[0.65rem] uppercase text-white/[0.06] ${styles.note}`}>
        Contact · FAQ · Gallery · Social — coming soon
      </p>
    </footer>
  );
}
