import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import FadeIn from "@/components/ui/FadeIn";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-7xl px-6">
        <FadeIn>
          <Hero />
        </FadeIn>

        <FadeIn>
          <About />
        </FadeIn>

        <FadeIn>
          <Experience />
        </FadeIn>

        <FadeIn>
          <Projects />
        </FadeIn>

        <FadeIn>
          <Skills />
        </FadeIn>

        <FadeIn>
          <Contact />
        </FadeIn>

        <FadeIn>
          <Footer />
        </FadeIn>
      </main>
    </>
  );
}