"use client";

import { skills } from "@/data/static.data";
const About = () => {
  return (
    <section id="about" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            About Me
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            I&apos;m an IT graduating student and web developer focused on
            building practical web applications using React and Supabase. I
            enjoy creating role based systems and productivity tools that solve
            real world problems, with an emphasis on clean, maintainable code
            and modern web technologies.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="group rounded-xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/20 hover:bg-card hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <skill.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 font-semibold">{skill.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
