"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

type Props = {
  src: string | null;
  onClose: () => void;
};

export default function ImageLightbox({ src, onClose }: Props) {
  const [isZoomed, setIsZoomed] = useState(false);

  // ✅ ESC 키 닫기
  useEffect(() => {
    if (!src) return;

    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [src, onClose]);

  // ✅ 배경 스크롤 잠금
  useEffect(() => {
    if (src) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [src]);

  // ✅ 닫힐 때 줌 상태 초기화
  useEffect(() => {
    if (!src) setIsZoomed(false);
  }, [src]);

  return (
    <AnimatePresence>
      {src && (
        <motion.div
          className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* ❌ 닫기 버튼 */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-[110] text-white/80 hover:text-white transition"
            aria-label="Close image"
          >
            <X size={28} />
          </button>

          {/* 🖼 이미지 컨테이너 (확대 시 내부 스크롤) */}
          <div
            className="max-w-[90vw] max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.img
              src={src}
              alt="Enlarged image"
              onClick={() => setIsZoomed(!isZoomed)}
              className={`rounded-xl shadow-xl transition-transform duration-300 cursor-zoom-${
                isZoomed ? "out" : "in"
              }`}
              style={{
                transform: isZoomed ? "scale(2)" : "scale(1)",
                transformOrigin: "center",
              }}
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
