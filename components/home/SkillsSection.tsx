import { skills } from "@/data/profile";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function SkillsSection() {
  return (
    <section className="bg-white py-20">
      <Container>
        <SectionHeading
          eyebrow="Skills"
          title="Technical toolkit"
          description="A structured view of the technologies and disciplines relevant to my engineering work."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skills.map((group) => (
            <div key={group.title} className="rounded-2xl border border-zinc-200 bg-stone-50 p-6 shadow-sm">
              <h3 className="mb-4 text-lg font-semibold text-zinc-900">{group.title}</h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-sm text-zinc-700"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
