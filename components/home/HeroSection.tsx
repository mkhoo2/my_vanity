import Image from "next/image";

import { profile } from "@/data/profile";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function HeroSection() {
  const resumeHref = profile.resumeUrl ?? undefined;
  const hasResume = Boolean(resumeHref);

  return (
    <section className="border-b border-zinc-200 bg-stone-50/70">
      <Container className="py-16 sm:py-20 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-[1.5fr_0.9fr]">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Portfolio</p>
            <h1 className="max-w-xl text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl">
              {profile.name}
            </h1>
            <p className="mt-4 text-xl font-medium text-zinc-700">{profile.title}</p>
            <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-600">{profile.summary}</p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/portfolio" variant="primary">View Portfolio</Button>
              {hasResume ? (
                <Button href={resumeHref} variant="secondary" external download>
                  Download Resume
                </Button>
              ) : (
                <Button variant="secondary" disabled ariaLabel="Resume download unavailable">
                  Resume Unavailable
                </Button>
              )}
              <Button href={`mailto:${profile.email}`} variant="secondary">
                Contact Me
              </Button>
            </div>

            <dl className="mt-8 flex flex-wrap gap-x-8 gap-y-4 text-sm text-zinc-600">
              <div>
                <dt className="font-medium text-zinc-900">Location</dt>
                <dd>{profile.location}</dd>
              </div>
              <div>
                <dt className="font-medium text-zinc-900">Email</dt>
                <dd>
                  <a href={`mailto:${profile.email}`} className="text-blue-700 hover:text-blue-800">
                    {profile.email}
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative flex h-72 w-72 items-center justify-center overflow-hidden rounded-[2rem] border border-zinc-200 bg-gradient-to-br from-blue-50 via-white to-zinc-100 shadow-sm">
              {profile.profileImageUrl ? (
                <div className="relative h-52 w-52 overflow-hidden rounded-full border-4 border-white shadow-md">
                  <Image
                    src={profile.profileImageUrl}
                    alt={`Portrait of ${profile.name}`}
                    fill
                    sizes="208px"
                    className="object-cover"
                    priority
                  />
                </div>
              ) : (
                <div className="flex h-40 w-40 items-center justify-center rounded-full border border-zinc-200 bg-white text-5xl font-semibold text-zinc-900 shadow-inner">
                  {profile.name
                    .split(" ")
                    .map((part) => part[0])
                    .slice(0, 2)
                    .join("")}
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
