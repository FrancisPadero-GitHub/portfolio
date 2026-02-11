"use client";

import { useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ImageModal } from "@/components/modals/image-modal";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";

// types
import { ProjectCardProps } from "@/types/types.data";

/* ------------------------------------------------------------------ */
/*  Project Card (for other projects)                                  */
/* ------------------------------------------------------------------ */

export const ProjectCard = ({
  title,
  subtitle,
  description,
  images,
  features,
  tech,
  badge,
  github_link,
  demo_link,
}: ProjectCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const hasMultipleImages = images.length > 1;

  return (
    <>
      <div className="group overflow-hidden rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5">
        {/* Image */}
        <div
          className="relative overflow-hidden cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        >
          {badge && (
            <div className="absolute left-4 top-4 z-10">
              <Badge variant="secondary" className="shadow-md backdrop-blur-sm">
                {badge}
              </Badge>
            </div>
          )}

          {/* Navigation Arrows - only show if multiple images */}
          {hasMultipleImages && (
            <>
              <Button
                size="icon"
                variant="ghost"
                onClick={handlePrevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-20 h-8 w-8 rounded-full bg-black/50 backdrop-blur-sm text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-amber-400"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>

              <Button
                size="icon"
                variant="ghost"
                onClick={handleNextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-20 h-8 w-8 rounded-full bg-black/50 backdrop-blur-sm text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-amber-400"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>

              {/* Image indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-1.5">
                {images.map((_, index) => (
                  <div
                    key={index}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      index === currentImageIndex
                        ? "w-6 bg-white"
                        : "w-1.5 bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </>
          )}

          {/* Zoom overlay hint */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center"></div>
          <Image
            src={images[currentImageIndex]}
            alt={`${title} - Image ${currentImageIndex + 1}`}
            width={600}
            height={400}
            className="aspect-video w-full object-cover transition-all duration-300"
          />
        </div>

        {/* Content */}
        <div className="space-y-4 p-6">
          <div>
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-sm text-muted-foreground">{subtitle}</p>
          </div>

          <p className="text-sm leading-relaxed text-muted-foreground">
            {description}
          </p>

          {/* Features */}
          <div className="grid grid-cols-2 gap-2">
            {features.map((feature) => (
              <div
                key={feature.label}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <feature.icon className="h-3.5 w-3.5 text-primary" />
                <span>{feature.label}</span>
              </div>
            ))}
          </div>

          <Separator />

          {/* Tech */}
          <div className="flex flex-wrap gap-1.5">
            {tech.map((t) => (
              <Badge key={t} variant="outline" className="text-xs">
                {t}
              </Badge>
            ))}
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-2">
            <Button
              size="sm"
              variant="outline"
              className={`flex-${github_link && demo_link ? "1" : "none"}`}
              asChild
            >
              <a
                href={github_link || "#"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-3.5 w-3.5" />
                Code
              </a>
            </Button>

            {demo_link && (
              <Button size="sm" className="flex-1" asChild>
                <a
                  href={demo_link || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-2 h-3.5 w-3.5" />
                  Demo
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Image Modal */}
      <ImageModal
        src={images[currentImageIndex]}
        alt={`${title} - Image ${currentImageIndex + 1}`}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        images={images}
        currentIndex={currentImageIndex}
        onImageChange={setCurrentImageIndex}
      />
    </>
  );
};
