import type { Metadata } from "next";

import { EducationSection } from "@/components/home/EducationSection";
import { ExperienceSection } from "@/components/home/ExperienceSection";
import { HeroSection } from "@/components/home/HeroSection";
import { SkillsSection } from "@/components/home/SkillsSection";
import { SummarySection } from "@/components/home/SummarySection";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { profile } from "@/data/profile";
import { socialLinks } from "@/data/social-links";

export const metadata: Metadata = {
  title: "Home",
  description: "Professional summary, experience, skills, and contact details.",
};

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <SummarySection />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />

      <section id="contact" className="py-20">
        <Container>
          <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm sm:p-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Contact</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900">Let&apos;s connect</h2>
                <p className="mt-3 max-w-xl text-base leading-7 text-zinc-600">
                  Reach out for collaboration, product work, or opportunities to build thoughtful software together.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button href={`mailto:${profile.email}`} variant="primary">
                  Email Me
                </Button>
                <Button href="/portfolio" variant="secondary">
                  View Portfolio
                </Button>
              </div>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              <div className="rounded-2xl border border-zinc-200 bg-stone-50 p-4">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500">Email</p>
                <a href={`mailto:${profile.email}`} className="mt-2 block text-base font-medium text-blue-700 hover:text-blue-800">
                  {profile.email}
                </a>
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-stone-50 p-4">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500">Location</p>
                <p className="mt-2 text-base font-medium text-zinc-900">{profile.location}</p>
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-stone-50 p-4 md:col-span-2 xl:col-span-1">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500">Profiles</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {socialLinks.filter((link) => link.href).map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                      rel={link.href.startsWith("mailto:") ? undefined : "noreferrer noopener"}
                      className="rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-sm font-medium text-zinc-700 hover:border-zinc-300 hover:text-zinc-900"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
