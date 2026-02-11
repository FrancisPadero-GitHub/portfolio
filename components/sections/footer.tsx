import React from "react";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-6 pb-8">
      <Separator className="mb-8" />
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
        <p>&copy; {currentYear} Frank. All rights reserved.</p>
        <p>
          Built with{" "}
          <span className="font-medium text-foreground">Next.js</span>,{" "}
          <span className="font-medium text-foreground">Tailwind CSS</span> &{" "}
          <span className="font-medium text-foreground">shadcn/ui</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
