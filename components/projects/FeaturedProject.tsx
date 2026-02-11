"use client";

import { useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ImageModal } from "@/components/modals/image-modal";
import {
  Star,
  Shield,
  CreditCard,
  BarChart3,
  Users,
  ExternalLink,
  Github,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  DIGITEC — Featured Project                                         */
/* ------------------------------------------------------------------ */

export const FeaturedProject = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "/digitec_landing.png",
    "/digitec_1.png",
    "/digitec_2.png",
    "/digitec_3.png",
  ];

  const handleImageClick = (index: number) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-linear-to-br from-card via-card to-primary/5">
        {/* Featured ribbon */}
        <div className="absolute right-0 top-0 z-10">
          <div className="flex items-center gap-1.5 rounded-bl-xl bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">
            <Star className="h-4 w-4" /> Featured — First Client Project
          </div>
        </div>

        <div className="grid gap-0 lg:grid-cols-2">
          {/* Image gallery */}
          <div className="relative p-6 lg:p-8">
            <div className="space-y-4">
              <div
                className="group relative overflow-hidden rounded-xl border border-border/50 shadow-2xl cursor-pointer"
                onClick={() => handleImageClick(0)}
              >
                {/* Zoom overlay hint */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center z-10"></div>
                <Image
                  src={images[0]}
                  alt="DigiTEC Landing Page"
                  width={800}
                  height={500}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="grid grid-cols-3 gap-3">
                {images.slice(1).map((src, i) => (
                  <div
                    key={i}
                    className="group relative overflow-hidden rounded-lg border border-border/50 shadow-md cursor-pointer"
                    onClick={() => handleImageClick(i + 1)}
                  >
                    {/* Zoom overlay hint */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center z-10"></div>
                    <Image
                      src={src}
                      alt={`DigiTEC Screenshot ${i + 1}`}
                      width={300}
                      height={200}
                      className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center p-6 lg:p-8">
            <div className="space-y-6">
              <div>
                <h3 className="mb-2 text-3xl font-bold">DigiTEC</h3>
                <p className="text-lg text-muted-foreground">
                  Cooperative Fund & Loan Monitoring System
                </p>
              </div>

              <p className="leading-relaxed text-muted-foreground">
                A production-grade financial management system built for the{" "}
                <span className="font-medium text-foreground">
                  ECTEC Cooperative
                </span>
                . This was my first client-based (Capstone) project — a
                comprehensive platform that replaced manual spreadsheet tracking
                with a modern, secure, and scalable digital solution for
                cooperative finances.
              </p>

              <Separator />

              {/* Key highlights */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="rounded-md bg-primary/10 p-2">
                    <Shield className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">5 User Roles</p>
                    <p className="text-xs text-muted-foreground">
                      Role-based access control
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded-md bg-primary/10 p-2">
                    <CreditCard className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Loan Management</p>
                    <p className="text-xs text-muted-foreground">
                      Full approval workflow
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded-md bg-primary/10 p-2">
                    <BarChart3 className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Financial Reports</p>
                    <p className="text-xs text-muted-foreground">
                      Excel & PDF exports
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded-md bg-primary/10 p-2">
                    <Users className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Member Management</p>
                    <p className="text-xs text-muted-foreground">
                      Full CRUD & profiles
                    </p>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Tech stack */}
              <div>
                <p className="mb-3 text-sm font-medium text-muted-foreground">
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "React 19",
                    "Vite",
                    "Supabase",
                    "PostgreSQL",
                    "Tailwind CSS",
                    "DaisyUI",
                    "Redux Toolkit",
                    "TanStack Query",
                    "React Hook Form",
                    "Recharts",
                    "Vercel",
                    "Decimal.js",
                  ].map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <Button asChild>
                  <a
                    href="https://ectec-digitec.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Live
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a
                    href="https://github.com/FrancisPadero-GitHub/vite-digitec-js"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Source Code
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      <ImageModal
        src={images[currentImageIndex]}
        alt={`DigiTEC Screenshot ${currentImageIndex + 1}`}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        images={images}
        currentIndex={currentImageIndex}
        onImageChange={setCurrentImageIndex}
      />
    </>
  );
};
