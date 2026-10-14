import { education } from "@/data/profile";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function EducationSection() {
  return (
    <section className="bg-white py-20">
      <Container>
        <SectionHeading
          eyebrow="Education"
          title="Learning and training"
          description="Academic background, certifications, and ongoing professional development relevant to modern software work."
        />

        <div className="space-y-6">
          {education.map((item) => (
            <article key={`${item.school}-${item.degree}`} className="rounded-2xl border border-zinc-200 bg-stone-50 p-6 shadow-sm">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-zinc-900">{item.school}</h3>
                  <p className="text-base text-zinc-700">{item.degree}</p>
                </div>
                <p className="text-sm text-zinc-600">{item.period}</p>
              </div>

              {item.details ? <p className="mt-4 text-base leading-7 text-zinc-700">{item.details}</p> : null}
              {item.certificateUrl ? (
                <a
                  href={item.certificateUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mt-4 inline-flex rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-blue-700 hover:border-zinc-300 hover:text-blue-800"
                >
                  View certificate
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
