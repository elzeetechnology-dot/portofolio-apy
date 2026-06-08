import { skills } from "@/data/skills";

function SkillGroup({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="rounded-3xl border p-8" >
      <h3 className="mb-6 text-xl font-semibold">
        {title}
      </h3>

      <div className="flex flex-wrap gap-3" >
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full border px-4 py-2 text-sm hover:border-primary
transition-all duration-300"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 border-t "
    >
      <div className="mb-12"  >
        <p className="mb-3 text-sm font-medium text-primary">
          Skills
        </p>

        <h2 className="text-4xl font-bold tracking-tight">
          Technical Expertise
        </h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-2" >
        <SkillGroup
          title="Infrastructure"
          items={skills.infrastructure}
        />

        <SkillGroup
          title="Networking"
          items={skills.networking}
        />

        <SkillGroup
          title="Development"
          items={skills.development}
        />

        <SkillGroup
          title="Tools & Platforms"
          items={skills.tools}
        />
      </div>
    </section>
  );
}