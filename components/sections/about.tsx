"use client";

import { useState } from "react";
import { skills } from "@/data/static.data";
import {
  GraduationCap,
  MapPin,
  Code,
  Heart,
  Download,
  Eye,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PDFModal } from "@/components/modals/pdf-modal";

const About = () => {
  const [isPDFModalOpen, setIsPDFModalOpen] = useState(false);

  return (
    <section id="about" className="relative px-6 py-24 md:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-primary/10" />

      <div className="relative mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-20 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <Heart className="h-4 w-4" />
            About Me
          </div>

          <h2 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Passionate Developer &{" "}
            <span className="bg-linear-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Problem Solver
            </span>
          </h2>

          <div className="mx-auto max-w-3xl space-y-6">
            <p className="text-lg leading-relaxed text-muted-foreground sm:text-xl">
              I graduated with a degree in Information Technology from{" "}
              <span className="font-semibold text-foreground">
                University of Science and Technology of Southern Philippines
              </span>{" "}
              with a major in Database and Information Systems, and a passionate
              Web Developer focused on building practical web applications using
              React and Supabase.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground sm:text-xl">
              I enjoy creating role-based systems and productivity tools that
              solve real-world problems, with an emphasis on clean, maintainable
              code and modern web technologies. Open to opportunities to
              collaborate on impactful projects and continue learning in the
              ever-evolving web development landscape.
            </p>

            {/* Resume Preview Button */}
            {/* pdf modal @ line 136 */}
            <div className="flex justify-center pt-6">
              <Button
                onClick={() => setIsPDFModalOpen(true)}
                className="group relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute inset-0 bg-linear-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <Eye className="mr-2 h-4 w-4" />
                Preview Resume
                <Download className="ml-2 h-4 w-4 opacity-70" />
              </Button>
            </div>

            {/* Quick facts */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <div className="flex items-center gap-2 rounded-full bg-card/50 px-4 py-2 backdrop-blur-sm">
                <GraduationCap className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">IT Graduate</span>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-card/50 px-4 py-2 backdrop-blur-sm">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Philippines</span>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-card/50 px-4 py-2 backdrop-blur-sm">
                <Code className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Web Developer</span>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <div
              key={skill.title}
              className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm p-6 transition-all duration-500 hover:border-primary/30 hover:bg-card/60 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative">
                {/* Icon */}
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-linear-to-br from-primary/20 to-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-lg">
                  <skill.icon className="h-7 w-7" />
                </div>

                {/* Content */}
                <h3 className="mb-3 text-xl font-bold transition-colors group-hover:text-primary">
                  {skill.title}
                </h3>
                <p className="leading-relaxed text-muted-foreground transition-colors group-hover:text-foreground/80">
                  {skill.description}
                </p>

                {/* Subtle accent line */}
                <div className="mt-4 h-1 w-0 bg-linear-to-r from-primary to-primary/50 transition-all duration-500 group-hover:w-full rounded-full" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-3 rounded-full bg-linear-to-r from-primary/10 to-primary/5 px-6 py-3">
            <div className="h-2 w-2 animate-pulse rounded-full bg-primary"></div>
            <span className="text-sm font-medium text-primary">
              Always learning, always building
            </span>
          </div>
        </div>
      </div>

      {/* PDF Modal */}
      <PDFModal
        isOpen={isPDFModalOpen}
        onClose={() => setIsPDFModalOpen(false)}
        pdfUrl="/resume.pdf"
        title="Francis Padero - Resume 2026"
      />
    </section>
  );
};

export default About;
