import { experience } from "@/data/profile";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ExperienceSection() {
  return (
    <section className="bg-stone-50 py-20">
      <Container>
        <SectionHeading
          eyebrow="Experience"
          title="Work history"
          description="A timeline of roles focused on application development, product delivery, and engineering quality."
        />

        <div className="space-y-6">
          {experience.map((item) => (
            <article key={`${item.company}-${item.role}`} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
              <div className="flex flex-col gap-3 border-b border-zinc-200 pb-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-zinc-900">{item.role}</h3>
                  <p className="mt-1 text-base font-medium text-zinc-700">{item.company}</p>
                </div>
                <div className="text-sm text-zinc-600">
                  <p>{item.startDate} — {item.endDate}</p>
                  <p>{item.location}</p>
                </div>
              </div>

              <ul className="mt-5 list-disc space-y-2 pl-5 text-base leading-7 text-zinc-700">
                {item.responsibilities.map((responsibility) => (
                  <li key={responsibility}>{responsibility}</li>
                ))}
              </ul>

              {item.achievements ? (
                <div className="mt-5 rounded-xl bg-blue-50 p-4">
                  <p className="mb-2 text-sm font-semibold uppercase tracking-[0.12em] text-blue-700">Highlights</p>
                  <ul className="space-y-2 text-sm leading-6 text-zinc-700">
                    {item.achievements.map((achievement) => (
                      <li key={achievement}>• {achievement}</li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
