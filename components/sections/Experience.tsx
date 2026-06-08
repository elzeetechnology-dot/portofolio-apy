import FadeIn from "@/components/ui/FadeIn";

const experiences = [
  {
    company: "PT Pertamina Retail",
    role: "IT System Specialist",
    period: "2024 - Present",
    description:
      "Managing monitoring systems, infrastructure, troubleshooting, enterprise support, and digital solutions for operational environments.",
  },
  {
    company: "PT Bridgestone Tire Indonesia",
    role: "IT Support",
    period: "2022 - 2024",
    description:
      "Provided technical support, infrastructure maintenance, Microsoft ecosystem administration, and end-user support.",
  },
  {
    company: "PT Bank Mandiri",
    role: "IT Support",
    period: "2022",
    description:
      "Supported banking operational systems, hardware deployment, and IT service management.",
  },
  {
    company: "PT So Good Food",
    role: "IT Support",
    period: "2015",
    description:
      "Handled IT operational support, troubleshooting, and user assistance within manufacturing environments.",
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
                </div>

                <p className="text-muted-foreground">
                  {exp.period}
                </p>
              </div>

              <p className="mt-6 leading-7 text-muted-foreground">
                {exp.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}