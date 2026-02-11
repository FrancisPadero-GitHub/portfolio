"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import {
  X,
  ZoomIn,
  ZoomOut,
  RotateCw,
  Download,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface ImageModalProps {
  src: string;
  alt: string;
  isOpen: boolean;
  onClose: () => void;
  images?: string[];
  currentIndex?: number;
  onImageChange?: (index: number) => void;
}

export const ImageModal = ({
  src,
  alt,
  isOpen,
  onClose,
  images = [src],
  currentIndex = 0,
  onImageChange,
}: ImageModalProps) => {
  const [scale, setScale] = useState(1);
  const [rotation, setRotation] = useState(0);
  const hasMultipleImages = images.length > 1;
  const currentImageSrc = images[currentIndex] || src;

  const handleZoomIn = useCallback(() => {
    setScale((prev) => Math.min(prev + 0.25, 3));
  }, []);

  const handleZoomOut = useCallback(() => {
    setScale((prev) => Math.max(prev - 0.25, 0.5));
  }, []);

  const handleRotate = useCallback(() => {
    setRotation((prev) => (prev + 90) % 360);
  }, []);

  const handleReset = useCallback(() => {
    setScale(1);
    setRotation(0);
  }, []);

  const handleDownload = useCallback(() => {
    const link = document.createElement("a");
    link.href = currentImageSrc;
    link.download = alt || "image";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, [currentImageSrc, alt]);

  const handlePrevImage = useCallback(() => {
    if (hasMultipleImages && onImageChange) {
      const newIndex =
        currentIndex === 0 ? images.length - 1 : currentIndex - 1;
      onImageChange(newIndex);
      setScale(1);
      setRotation(0);
    }
  }, [hasMultipleImages, onImageChange, currentIndex, images.length]);

  const handleNextImage = useCallback(() => {
    if (hasMultipleImages && onImageChange) {
      const newIndex =
        currentIndex === images.length - 1 ? 0 : currentIndex + 1;
      onImageChange(newIndex);
      setScale(1);
      setRotation(0);
    }
  }, [hasMultipleImages, onImageChange, currentIndex, images.length]);

  // Keyboard shortcuts
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "Escape":
          onClose();
          break;
        case "+":
        case "=":
          handleZoomIn();
          break;
        case "-":
          handleZoomOut();
          break;
        case "r":
        case "R":
          handleRotate();
          break;
        case "0":
          handleReset();
          break;
        case "ArrowLeft":
          handlePrevImage();
          break;
        case "ArrowRight":
          handleNextImage();
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [
    isOpen,
    onClose,
    handleZoomIn,
    handleZoomOut,
    handleRotate,
    handleReset,
    handlePrevImage,
    handleNextImage,
  ]);

  // Reset transform when modal closes
  useEffect(() => {
    if (!isOpen) {
      const timer = setTimeout(() => {
        setScale(1);
        setRotation(0);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleBackdropClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === e.currentTarget) {
        onClose();
      }
    },
    [onClose],
  );

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={handleBackdropClick}
    >
      {/* Controls Bar */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2 rounded-full bg-black/50 backdrop-blur-md px-4 py-2 border border-white/10">
        <Button
          size="icon"
          variant="ghost"
          onClick={handleZoomOut}
          disabled={scale <= 0.5}
          className="h-8 w-8 text-white hover:bg-white/20"
        >
          <ZoomOut className="h-4 w-4" />
        </Button>

        <span className="text-sm font-medium text-white min-w-16 text-center">
          {Math.round(scale * 100)}%
        </span>

        <Button
          size="icon"
          variant="ghost"
          onClick={handleZoomIn}
          disabled={scale >= 3}
          className="h-8 w-8 text-white hover:bg-white/20"
        >
          <ZoomIn className="h-4 w-4" />
        </Button>

        <div className="w-px h-6 bg-white/20 mx-1" />

        <Button
          size="icon"
          variant="ghost"
          onClick={handleRotate}
          className="h-8 w-8 text-white hover:bg-white/20"
        >
          <RotateCw className="h-4 w-4" />
        </Button>

        <Button
          size="icon"
          variant="ghost"
          onClick={handleDownload}
          className="h-8 w-8 text-white hover:bg-white/20"
        >
          <Download className="h-4 w-4" />
        </Button>

        <Button
          size="sm"
          variant="ghost"
          onClick={handleReset}
          className="h-8 px-3 text-white hover:bg-white/20 text-xs"
        >
          Reset
        </Button>
      </div>

      {/* Close Button */}
      <Button
        size="icon"
        variant="ghost"
        onClick={onClose}
        className="absolute top-4 right-4 z-10 h-10 w-10 rounded-full bg-black/50 backdrop-blur-md text-white hover:bg-white/20 border border-white/10"
      >
        <X className="h-5 w-5" />
      </Button>

      {/* Navigation Arrows - only show if multiple images */}
      {hasMultipleImages && (
        <>
          <Button
            size="icon"
            variant="ghost"
            onClick={handlePrevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-black/50 backdrop-blur-md text-white hover:bg-amber-400 border border-white/10"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            size="icon"
            variant="ghost"
            onClick={handleNextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-black/50 backdrop-blur-md text-white hover:bg-amber-400 border border-white/10"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </>
      )}

      {/* Image Container */}
      <div className="relative max-w-[90vw] max-h-[90vh] overflow-auto">
        <div
          className="transition-transform duration-200 ease-out"
          style={{
            transform: `scale(${scale}) rotate(${rotation}deg)`,
          }}
        >
          <Image
            src={currentImageSrc}
            alt={alt}
            width={1920}
            height={1080}
            className="max-w-full h-auto object-contain"
            quality={100}
          />
        </div>
      </div>

      {/* Image indicators - only show if multiple images */}
      {hasMultipleImages && (
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => onImageChange && onImageChange(index)}
              className={`h-2 rounded-full transition-all duration-300 hover:bg-white ${
                index === currentIndex ? "w-8 bg-white" : "w-2 bg-white/50"
              }`}
              aria-label={`View image ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Keyboard shortcuts hint */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-white/80 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
        <kbd className="px-1.5 py-0.5 bg-white/10 rounded mx-0.5">ESC</kbd>
        close •
        <kbd className="px-1.5 py-0.5 bg-white/10 rounded mx-0.5">+/-</kbd>
        zoom •<kbd className="px-1.5 py-0.5 bg-white/10 rounded mx-0.5">R</kbd>
        rotate •
        <kbd className="px-1.5 py-0.5 bg-white/10 rounded mx-0.5">0</kbd>
        reset
        {hasMultipleImages && (
          <>
            {" "}
            • <kbd className="px-1.5 py-0.5 bg-white/10 rounded mx-0.5">←→</kbd>
            navigate
          </>
        )}
      </div>
    </div>
  );
};
