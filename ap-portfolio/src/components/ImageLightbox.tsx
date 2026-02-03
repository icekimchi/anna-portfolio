"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";

type Props = {
  src: string | null;
  onClose: () => void;
};

export default function ImageLightbox({ src, onClose }: Props) {
  const [isZoomed, setIsZoomed] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // ESC
  useEffect(() => {
    if (!src) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [src, onClose]);

  useEffect(() => {
    if (!src) setIsZoomed(false);
  }, [src]);

  const handleBackgroundClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {src && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-black/80 flex items-center justify-center"
          onClick={handleBackgroundClick}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* X Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-[10001] text-white/80 hover:text-white transition"
            aria-label="Close image"
          >
            <X size={28} />
          </button>

          {/* Scroll Container */}
          <div
            ref={scrollContainerRef}
            className="lightbox-scroll-container relative max-h-[90vh] max-w-[90vw] overflow-y-auto overscroll-contain"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.div
              className={`cursor-${isZoomed ? "zoom-out" : "zoom-in"}`}
              onClick={(e) => {
                e.stopPropagation();
                setIsZoomed(!isZoomed);
              }}
              animate={{ scale: isZoomed ? 1.5 : 1 }}
              transition={{ duration: 0.3 }}
              style={{ transformOrigin: "center top" }}
            >
              <Image
                src={src}
                alt="Enlarged"
                width={1600}
                height={2400}
                className="w-full h-auto rounded-xl shadow-xl pointer-events-none select-none"
                unoptimized
                draggable={false}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}