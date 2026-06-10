import FadeIn from "@/components/ui/FadeIn";

const experiences = [
  {
    company: "PT Pertamina Retail",
    role: "IT System Specialist",
    period: "2024 - Present",

    achievements: [
      "Supporting monitoring infrastructure across 1,200+ fuel station sites nationwide.",
      "Managing ATG monitoring systems, alarm systems, and operational dashboards.",
      "Performing infrastructure troubleshooting and incident response for business-critical systems.",
      "Developing digital solutions and web applications to improve operational efficiency.",
      "Collaborating with vendors and internal stakeholders for system integration projects.",
    ],
  },

  {
    company: "PT Bridgestone Tire Indonesia",
    role: "IT Support",
    period: "2022 - 2024",

    achievements: [
      "Provided enterprise IT support for manufacturing operations and office users.",
      "Administered Microsoft ecosystem services including Active Directory and Microsoft 365.",
      "Maintained infrastructure, endpoint devices, printers, and networking components.",
      "Resolved technical incidents and supported business continuity initiatives.",
    ],
  },

  {
    company: "PT Bank Mandiri",
    role: "IT Support",
    period: "2022",

    achievements: [
      "Supported banking operational systems and end-user devices.",
      "Performed hardware deployment, software installation, and troubleshooting.",
      "Assisted with IT service management and incident resolution processes.",
    ],
  },

  {
    company: "PT So Good Food",
    role: "IT Support",
    period: "Jan 2015 - Jun 2015",

    achievements: [
      "Provided IT operational support within manufacturing environments.",
      "Handled hardware troubleshooting and user assistance.",
      "Supported daily operational systems and technical issue resolution.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="border-t py-24"
    >
      <div className="mb-12">
        <p className="mb-3 text-sm font-medium text-primary">
          Experience
        </p>

        <h2 className="text-4xl font-bold tracking-tight">
          Professional Journey
        </h2>
      </div>

      <div className="grid gap-6">
        {experiences.map((exp, index) => (
          <FadeIn
            key={exp.company}
            delay={index * 0.15}
          >
            <div
              className="
                rounded-3xl
                border
                bg-background/50
                p-8
                backdrop-blur-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
                hover:border-primary/50
              "
            >
              <div className="flex flex-col gap-4 lg:flex-row lg:justify-between">
                <div>
                  <h3 className="text-2xl font-semibold">
                    {exp.company}
                  </h3>

                  <p className="mt-2 text-lg text-primary">
                    {exp.role}
                  </p>
                  {exp.company === "PT Pertamina Retail" && (

  <div className="mt-3 inline-flex rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs text-primary">

    1,200+ Sites Managed

  </div>

)}
                </div>

                <p className="text-muted-foreground">
                  {exp.period}
                </p>
              </div>

             <ul className="mt-6 space-y-3">
  {exp.achievements.map((item) => (
    <li
      key={item}
      className="flex gap-3 text-muted-foreground"
    >
      <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
      <span>{item}</span>
    </li>
  ))}
</ul>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}