import type { Metadata } from "next";

import { ProjectGrid } from "@/components/portfolio/ProjectGrid";
import { SocialLinks } from "@/components/portfolio/SocialLinks";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Selected projects, examples, and external profiles.",
};

export default function PortfolioPage() {
  return (
    <main className="py-20">
      <Container>
        <SectionHeading
          eyebrow="Portfolio"
          title="Selected work"
        />

        <ProjectGrid projects={projects} />
      </Container>

      <section className="mt-20 border-t border-zinc-200 bg-white py-16">
        <Container>
          <div className="max-w-3xl">
            <SectionHeading
              eyebrow="Profiles"
              title="External links"
              description="Professional online profiles and relevant links for project work and collaboration."
            />
            <SocialLinks />
          </div>
        </Container>
      </section>
    </main>
  );
}
