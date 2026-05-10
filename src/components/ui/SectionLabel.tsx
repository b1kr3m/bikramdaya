import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: React.ReactNode;
  dark?: boolean;
  className?: string;
}

export function SectionLabel({
  children,
  dark = false,
  className,
}: SectionLabelProps) {
  return (
    <div className={cn("mb-4", className)}>
      <span
        className={cn(
          "section-label",
          dark ? "text-green-muted" : "text-green-primary"
        )}
      >
        {children}
      </span>
      <span
        className={cn(
          "brush-line",
          dark ? "bg-green-muted" : "bg-green-primary"
        )}
      />
    </div>
  );
}
