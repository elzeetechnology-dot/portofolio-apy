export default function About() {
  return (
    
    <section
      id="about"
      className="py-24 border-t"
    >
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
            
          <p className="mb-3 text-sm font-medium text-primary">
            About Me
          </p>

          <h2 className="text-4xl font-bold tracking-tight">
            Experienced in Enterprise IT,
            Infrastructure & Digital Solutions
          </h2>
        </div>

        <div className="space-y-6 text-muted-foreground leading-8">
          <p>
            I am an IT System Specialist with experience in
            infrastructure management, system administration,
            technical support, and web application development.
          </p>

          <p>
            Throughout my career, I have supported enterprise
            environments across manufacturing, banking, and
            energy industries, ensuring reliable operations
            through monitoring, troubleshooting, automation,
            and digital transformation initiatives.
          </p>

          <p>
            Beyond infrastructure and operations, I also enjoy
            building web-based solutions and internal systems
            that improve efficiency and support business growth.
          </p>
          <div className="grid gap-4 md:grid-cols-3 mt-8">
  <div className="rounded-2xl border p-6">
    <h3 className="text-2xl font-bold">5+</h3>
    <p className="text-sm text-muted-foreground">
      Years of Experience
    </p>
  </div>

  <div className="rounded-2xl border p-6">
    <h3 className="text-2xl font-bold">4</h3>
    <p className="text-sm text-muted-foreground">
      Enterprise Companies
    </p>
  </div>

  <div className="rounded-2xl border p-6">
    <h3 className="text-2xl font-bold">10+</h3>
    <p className="text-sm text-muted-foreground">
      IT Projects
    </p>
  </div>
</div>

        </div>
      </div>
      
    </section>
    
  );
}