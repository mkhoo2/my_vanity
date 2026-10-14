import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  external?: boolean;
  className?: string;
  disabled?: boolean;
  download?: boolean;
  ariaLabel?: string;
};

const variantStyles: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: "bg-blue-600 text-white shadow-sm hover:bg-blue-500",
  secondary: "border border-zinc-200 bg-white text-zinc-900 hover:border-zinc-300 hover:bg-zinc-50",
  ghost: "text-blue-700 hover:bg-blue-50",
};

export function Button({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
  disabled = false,
  download = false,
  ariaLabel,
}: ButtonProps) {
  const styles = `inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 ${variantStyles[variant]} ${disabled ? "cursor-not-allowed opacity-60" : ""} ${className}`;

  if (disabled || !href) {
    return (
      <span aria-disabled={disabled} className={styles} aria-label={ariaLabel}>
        {children}
      </span>
    );
  }

  if (external && !href.startsWith("mailto:")) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer noopener"
        className={styles}
        aria-label={ariaLabel}
        download={download ? true : undefined}
      >
        {children}
      </a>
    );
  }

  if (href.startsWith("mailto:")) {
    return (
      <a href={href} className={styles} aria-label={ariaLabel}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={styles} aria-label={ariaLabel} download={download ? true : undefined}>
      {children}
    </Link>
  );
}
