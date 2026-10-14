import { profile } from "@/data/profile";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function SummarySection() {
  return (
    <section id="summary" className="py-20">
      <Container>
        <SectionHeading
          eyebrow="Profile"
          title="Professional summary"
          description="A concise overview of the practical, product-focused work I bring to software engineering teams."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <p className="text-base leading-7 text-zinc-700">{profile.professionalSummary}</p>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 shadow-sm">
            <ul className="space-y-3 text-sm leading-6 text-zinc-700">
              <li>• Product-minded software engineering with a focus on clarity and maintainability.</li>
              <li>• Comfortable collaborating across design, product, engineering, and operations.</li>
              <li>• Interested in building pragmatic digital experiences that support real user needs.</li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
