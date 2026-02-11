"use client";

import React from "react";
import { ArrowDown, Facebook, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
      {/* Animated background gradient */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/4 h-150 w-150 -translate-x-1/2 rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute right-1/4 top-1/2 h-100 w-100 rounded-full bg-chart-1/5 blur-[100px]" />
      </div>

      <div className="animate-fade-in-up space-y-6">
        <div className="inline-block rounded-full border border-border/50 bg-muted/50 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur-sm">
          Web Developer
        </div>

        <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
          <span className="bg-linear-to-r from-foreground via-foreground/80 to-foreground/60 bg-clip-text text-transparent">
            Hi, I&apos;m{" "}
          </span>
          <br />
          <span className="bg-linear-to-r from-primary via-chart-1 to-chart-2 bg-clip-text text-transparent">
            Francis Padero
          </span>
        </h1>

        <p className="mx-auto max-w-2xl text-lg text-muted-foreground sm:text-xl">
          I build modern web applications with a focus on clean design,
          performance, and user experience. Passionate about turning ideas into
          impactful digital solutions.
        </p>

        <div className="flex items-center justify-center gap-4 pt-4">
          <Button size="lg" className="group" asChild>
            <a href="#projects">
              View My Works
              <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="#contact">Get In Touch</a>
          </Button>
        </div>

        <div className="flex items-center justify-center gap-3 pt-6">
          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://github.com/FrancisPadero-GitHub"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://www.linkedin.com/in/francis-padero-b948b5391"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://www.facebook.com/profile.php?id=61572966474034"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="mailto:francispadero.avs@gmail.com" aria-label="Email">
              <Mail className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground/50" />
      </div>
    </section>
  );
};

export default Hero;
