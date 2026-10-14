import { socialLinks } from "@/data/social-links";
import { profile } from "@/data/profile";

export function Footer() {
  const visibleLinks = socialLinks.filter((link) => link.href && link.showInFooter !== false);

  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-6 text-sm text-zinc-600 sm:flex-row sm:px-6 lg:px-8">
        <p>© {profile.name}. All rights reserved.</p>

        {visibleLinks.length ? (
          <div className="flex items-center gap-4">
            {visibleLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto:") ? undefined : "noreferrer noopener"}
                className="transition-colors hover:text-zinc-900"
              >
                {link.label}
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </footer>
  );
}
