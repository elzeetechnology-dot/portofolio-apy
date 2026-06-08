import Image from "next/image";
import "./resume.css";
import PrintButton from "@/components/resume/PrintButton";

export default function ResumePage() {
  return (
    <main className="bg-background">
      <div className="mx-auto max-w-5xl px-8 py-14">

        {/* HEADER */}
        
        <section className="relative overflow-hidden rounded-3xl border bg-gradient-to-br from-background to-muted/30 p-10">

          <div className="absolute right-6 top-0 text-[140px] font-black tracking-tighter text-muted/10">
            APY
          </div>

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

            <div className="max-w-2xl">
              <div className="inline-flex rounded-full border px-4 py-2 text-sm font-medium">
                IT System Specialist
              </div>

              <h1 className="mt-6 text-6xl font-bold tracking-tight">
                Ari Puja
                <br />
                Yuwana
              </h1>

              <p className="mt-6 text-xl text-muted-foreground">
                Building Reliable Systems,
                Infrastructure & Digital Solutions.
              </p>

              <div className="mt-8 grid gap-2 text-sm text-muted-foreground">
                <p>📍 Bekasi, Indonesia</p>
                <p>📧 aripujayuwana@gmail.com</p>
                <p>📱 +62 821-2392-5828</p>
                <p>
                  🔗 linkedin.com/in/ari-puja-yuwana-a50745161
                </p>
              </div>
              <div className="mt-6">

  <PrintButton />

</div>
            </div>

            <div className="relative h-52 w-52 overflow-hidden rounded-3xl border shadow-2xl">
              <Image
                src="/images/apy1.jpg"
                alt="Ari Puja Yuwana"
                fill
                priority
                className="object-cover"
              />
              
            </div>

          </div>
          
        </section>

        {/* STATS */}
        <section className="mt-8 grid gap-6 md:grid-cols-3">

          <div className="rounded-3xl border p-8">
            <h3 className="text-5xl font-bold">
              5+
            </h3>

            <p className="mt-2 text-muted-foreground">
              Years Experience
            </p>
          </div>

          <div className="rounded-3xl border p-8">
            <h3 className="text-5xl font-bold">
              4
            </h3>

            <p className="mt-2 text-muted-foreground">
              Enterprise Companies
            </p>
          </div>

          <div className="rounded-3xl border p-8">
            <h3 className="text-5xl font-bold">
              10+
            </h3>

            <p className="mt-2 text-muted-foreground">
              IT Projects
            </p>
          </div>

        </section>

        {/* SUMMARY */}
        <section className="mt-16">
          <p className="mb-3 text-sm font-medium text-primary">
            Professional Summary
          </p>

          <h2 className="text-3xl font-bold">
            Experienced in Enterprise IT,
            Infrastructure & Digital Solutions
          </h2>

          <div className="mt-8 space-y-6 leading-8 text-muted-foreground">

            <p>
              I am an IT System Specialist with experience
              in infrastructure management, system
              administration, technical support, and web
              application development.
            </p>

            <p>
              Throughout my career, I have supported
              enterprise environments across manufacturing,
              banking, and energy industries, ensuring
              reliable operations through monitoring,
              troubleshooting, automation, and digital
              transformation initiatives.
            </p>

            <p>
              Beyond infrastructure and operations, I also
              enjoy building web-based solutions and
              internal systems that improve efficiency and
              support business growth.
            </p>

          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="mt-16">
          <p className="mb-3 text-sm font-medium text-primary">
            Experience
          </p>

          <h2 className="text-3xl font-bold">
            Professional Journey
          </h2>

          <div className="mt-10 border-l pl-8">

            {[
              {
                year: "2024 - Present",
                company: "PT Pertamina Retail",
                role: "IT System Specialist",
                desc: "Managing monitoring systems, infrastructure, troubleshooting, enterprise support, and digital solutions for operational environments.",
              },
              {
                year: "2022 - 2024",
                company: "PT Bridgestone Tire Indonesia",
                role: "IT Support",
                desc: "Provided technical support, infrastructure maintenance, Microsoft ecosystem administration, and end-user support.",
              },
              {
                year: "2022",
                company: "PT Bank Mandiri",
                role: "IT Support",
                desc: "Supported banking operational systems, hardware deployment, and IT service management.",
              },
              {
                year: "2015",
                company: "PT So Good Food",
                role: "IT Support",
                desc: "Handled IT operational support, troubleshooting, and user assistance within manufacturing environments.",
              },
            ].map((item) => (
              <div
                key={item.company}
                className="relative mb-12"
              >
                <div className="absolute -left-[42px] top-2 h-4 w-4 rounded-full bg-primary" />

                <p className="text-sm text-muted-foreground">
                  {item.year}
                </p>

                <h3 className="mt-2 text-xl font-semibold">
                  {item.company}
                </h3>

                <p className="text-primary">
                  {item.role}
                </p>

                <p className="mt-4 leading-7 text-muted-foreground">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>
        </section>

        {/* PROJECTS */}
        <section className="mt-16">
          <p className="mb-3 text-sm font-medium text-primary">
            Projects
          </p>

          <h2 className="text-3xl font-bold">
            Featured Projects
          </h2>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">

            {[
              {
                title: "Website Monitoring SPBU",
                tech: "Laravel • MySQL • REST API • Bootstrap",
              },
              {
                title: "Company Profile Website",
                tech: "Next.js • React • Tailwind CSS",
              },
              {
                title: "Mobile Application",
                tech: "Android • Java • REST API",
              },
            ].map((project) => (
              <div
                key={project.title}
                className="rounded-3xl border p-6"
              >
                <h3 className="font-semibold">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm text-muted-foreground">
                  {project.tech}
                </p>
              </div>
            ))}

          </div>
        </section>

        {/* SKILLS */}
        <section className="mt-16">
          <p className="mb-3 text-sm font-medium text-primary">
            Skills
          </p>

          <h2 className="text-3xl font-bold">
            Technical Expertise
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">

            <div className="rounded-3xl border p-8">
              <h3 className="font-semibold">
                Infrastructure
              </h3>

              <p className="mt-4 text-muted-foreground leading-8">
                Windows Server • Linux • Active Directory •
                Microsoft Intune • Microsoft Azure
              </p>
            </div>

            <div className="rounded-3xl border p-8">
              <h3 className="font-semibold">
                Networking
              </h3>

              <p className="mt-4 text-muted-foreground leading-8">
                TCP/IP • VPN • Firewall • Remote Support
              </p>
            </div>

            <div className="rounded-3xl border p-8">
              <h3 className="font-semibold">
                Development
              </h3>

              <p className="mt-4 text-muted-foreground leading-8">
                PHP • Laravel • MySQL • React • Next.js •
                TypeScript
              </p>
            </div>

            <div className="rounded-3xl border p-8">
              <h3 className="font-semibold">
                Tools & Platforms
              </h3>

              <p className="mt-4 text-muted-foreground leading-8">
                Git • GitHub • ServiceNow • ManageEngine •
                Jira • Microsoft Office
              </p>
            </div>

          </div>
        </section>

      </div>
    </main>
  );
}