"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PDFModalProps {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl: string;
  title?: string;
}

export const PDFModal = ({
  isOpen,
  onClose,
  pdfUrl,
  title = "Resume",
}: PDFModalProps) => {
  // Keyboard shortcuts
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") return onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm animate-in fade-in duration-200">
      {/* Close Button */}
      <Button
        size="icon"
        variant="ghost"
        onClick={onClose}
        className="absolute top-4 right-4 z-10 h-10 w-10 rounded-full bg-black/50 backdrop-blur-md text-white hover:bg-white/20 border border-white/10"
      >
        <X className="h-5 w-5" />
      </Button>

      {/* PDF Container */}
      <div className="relative w-full max-w-5xl h-[95vh] bg-white rounded-lg overflow-hidden shadow-2xl">
        <iframe src={pdfUrl} className="w-full h-full border-0" title={title} />
      </div>

      {/* Keyboard shortcuts hint */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-white/80 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
        <kbd className="px-1.5 py-0.5 bg-white/10 rounded mx-0.5">ESC</kbd>
        close •
      </div>
    </div>
  );
};
