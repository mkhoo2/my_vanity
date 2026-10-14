import type { Metadata } from "next";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Beyond Work",
  description: "Explore Marcus's interests beyond software, including gaming, cycling, and Shopee recommendations.",
};

export default function AffiliatesPage() {
  return (
    <main className="py-20">
      <Container>
        <SectionHeading
          eyebrow="Beyond work"
          title="What I get up to outside of software"
          description="Find my Shopee picks, catch a gaming livestream, or follow along with my bicycle content."
        />

        <div className="grid gap-5 md:grid-cols-2">
          <section
            aria-labelledby="shopee-storefront-title"
            className="flex flex-col rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm sm:p-10"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">Shopee storefront</p>
            <h2 id="shopee-storefront-title" className="mt-4 text-2xl font-semibold tracking-tight text-zinc-900">
              Things I use and recommend
            </h2>
            <p className="mt-4 flex-1 text-base leading-7 text-zinc-600">
              Browse my Shopee storefront for my personal picks.
            </p>
            <Button
              href="https://collshp.com/marcus2wheels?view=storefront"
              external
              className="mt-7 self-start"
            >
              Visit my Shopee storefront
            </Button>
            <p className="mt-6 border-t border-zinc-200 pt-5 text-sm leading-6 text-zinc-500">
              I may earn a commission when you make a purchase through my storefront, at no extra cost to you.
            </p>
          </section>

          <section
            aria-labelledby="twitch-title"
            className="flex flex-col rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm sm:p-10"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">Gaming</p>
            <h2 id="twitch-title" className="mt-4 text-2xl font-semibold tracking-tight text-zinc-900">
              Catch me live on Twitch
            </h2>
            <p className="mt-4 flex-1 text-base leading-7 text-zinc-600">
              I livestream games as <span className="font-medium text-zinc-900">ifrittyras</span> on Twitch and
              simultaneously on TikTok as <span className="font-medium text-zinc-900">@marcus2wheels</span>.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button href="https://www.twitch.tv/ifrittyras" external>
                Watch on Twitch
              </Button>
              <Button href="https://www.tiktok.com/@marcus2wheels" variant="secondary" external>
                Watch on TikTok
              </Button>
            </div>
          </section>

          <section
            aria-labelledby="instagram-title"
            className="flex flex-col rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm sm:p-10 md:col-span-2"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">Cycling</p>
            <h2 id="instagram-title" className="mt-4 text-2xl font-semibold tracking-tight text-zinc-900">
              Bicycle content on Instagram
            </h2>
            <p className="mt-4 flex-1 text-base leading-7 text-zinc-600">
              Follow <span className="font-medium text-zinc-900">@marcus2wheels</span> for bicycle content on
              Instagram and TikTok.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button href="https://www.instagram.com/marcus2wheels/" external>
                Follow on Instagram
              </Button>
              <Button href="https://www.tiktok.com/@marcus2wheels" variant="secondary" external>
                Follow on TikTok
              </Button>
            </div>
          </section>
        </div>
      </Container>
    </main>
  );
}
