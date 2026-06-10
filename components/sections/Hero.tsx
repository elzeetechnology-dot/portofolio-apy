"use client";

import { ArrowRight, Download } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import Counter from "@/components/ui/Counter";

export default function Hero() {
  return (
    <section className="relative flex min-h-[85vh] items-center py-24 overflow-hidden">
      {/* Animated Background Glow */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          x: [0, 20, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-0 top-0 -z-10 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-3xl"
      />

      <div className="grid items-center gap-16 lg:grid-cols-2">
        {/* Left Content */}
        <div>
          <div className="mb-6 inline-flex items-center rounded-full border border-border/50 bg-background/50 px-4 py-2 text-sm backdrop-blur">
            APY • Available for Opportunities
          </div>

          <h1 className="text-6xl font-bold tracking-tight sm:text-7xl lg:text-[92px]">
            Ari Puja
            <br />
            Yuwana
          </h1>

          <p className="mt-6 text-xl font-semibold text-muted-foreground lg:text-2xl">
            IT System Specialist
          </p>

          <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
            Building Reliable Systems, Infrastructure, Monitoring Solutions,
            and Digital Products that help businesses operate efficiently and
            scale with confidence.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-wrap gap-4">
            <a
  href="/resume"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-primary-foreground transition hover:opacity-90"
>
  <Download size={18} />
  Download CV
</a>

            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl border px-6 py-3 transition-all duration-300 hover:bg-muted"
            >
              View Projects
              <ArrowRight size={18} />
            </a>
          </div>

          {/* Stats */}
          <div className="mt-14 flex flex-wrap gap-10">
            <div>
              <h3 className="text-4xl font-bold">
  <Counter end={5} />+
</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Years Experience
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold">
  <Counter end={4} />
</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Enterprise Companies
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold">
  <Counter end={10} />+
</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Projects Delivered
              </p>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex justify-center lg:justify-end">
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative h-[520px] w-[400px] overflow-hidden rounded-3xl border bg-muted shadow-xl"
          >
          <Image
  src="/images/apy1.jpg"
  alt="Ari Puja Yuwana"
  fill
  priority
  sizes="400px"
  className="object-cover"
/>
          </motion.div>
        </div>
      </div>
    </section>
  );
}