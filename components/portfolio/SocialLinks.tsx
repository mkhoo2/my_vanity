import { socialLinks } from "@/data/social-links";

export function SocialLinks() {
  const visibleLinks = socialLinks.filter((link) => link.href);

  if (!visibleLinks.length) {
    return null;
  }

  return (
    <div className="mt-8 flex flex-wrap gap-3">
      {visibleLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target={link.href.startsWith("mailto:") ? undefined : "_blank"}
          rel={link.href.startsWith("mailto:") ? undefined : "noreferrer noopener"}
          className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:border-zinc-300 hover:bg-zinc-50 hover:text-zinc-900"
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}
