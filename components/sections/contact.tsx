"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Send, Facebook } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
          Let&apos;s Work Together
        </h2>
        <p className="mb-10 text-muted-foreground">
          I&apos;m currently open for freelance projects and collaboration
          opportunities. Whether you have a project in mind or just want to
          connect, feel free to reach out!
        </p>

        <div className="mb-10 inline-flex flex-col items-center gap-4 sm:flex-row">
          <Button size="lg" asChild>
            <a href="mailto:your@email.com">
              <Send className="mr-2 h-4 w-4" />
              Say Hello
            </a>
          </Button>
        </div>

        <div className="flex items-center justify-center gap-4">
          <Button variant="outline" size="icon" className="h-12 w-12" asChild>
            <a
              href="https://github.com/FrancisPadero-GitHub"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="outline" size="icon" className="h-12 w-12" asChild>
            <a
              href="https://www.linkedin.com/in/francis-padero-b948b5391"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="outline" size="icon" className="h-12 w-12" asChild>
            <a
              href="https://www.facebook.com/profile.php?id=61572966474034"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="outline" size="icon" className="h-12 w-12" asChild>
            <a href="mailto:francispadero.avs@gmail.com" aria-label="Email">
              <Mail className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
