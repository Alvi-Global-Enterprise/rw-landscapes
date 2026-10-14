"use client";

import { useEffect, useCallback, useState, useRef } from "react";
import Image from "next/image";

export interface LightboxItem {
  id: number;
  image: string;
  beforeImage?: string;
  afterImage?: string;
  title: string;
  sub: string;
}

interface LightboxModalProps {
  isOpen: boolean;
  currentIndex: number;
  items: LightboxItem[];
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function LightboxModal({
  isOpen,
  currentIndex,
  items,
  onClose,
  onNavigate,
}: LightboxModalProps) {
  const total = items.length;
  const currentItem = items[currentIndex];

  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Reset slider position on image change
  useEffect(() => {
    setSliderPos(50);
  }, [currentIndex]);

  const handlePrev = useCallback(() => {
    onNavigate((currentIndex - 1 + total) % total);
  }, [currentIndex, total, onNavigate]);

  const handleNext = useCallback(() => {
    onNavigate((currentIndex + 1) % total);
  }, [currentIndex, total, onNavigate]);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    document.body.classList.add("no-scroll");

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      updatePosition(e.clientX);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging) return;
      updatePosition(e.touches[0].clientX);
    };

    const handleMouseUp = () => {
      if (isDragging) setIsDragging(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove, { passive: true });
      window.addEventListener("touchend", handleMouseUp);
    }

    return () => {
      document.body.classList.remove("no-scroll");
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isOpen, onClose, handlePrev, handleNext, isDragging, updatePosition]);

  if (!isOpen || !currentItem) return null;

  const hasBeforeAfter = Boolean(currentItem.beforeImage && currentItem.afterImage);

  return (
    <div
      className="lightbox open"
      id="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="Image gallery lightbox"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
        <button
          className="lb-close"
          id="lbClose"
          aria-label="Close image"
          onClick={onClose}
        >
          ×
        </button>

        <button
          className="lb-prev"
          id="lbPrev"
          aria-label="Previous image"
          onClick={handlePrev}
        >
          ‹
        </button>

        <div className="relative w-full flex items-center justify-center min-h-[300px] max-h-[78vh]">
          {hasBeforeAfter ? (
            <div
              ref={containerRef}
              className="relative w-full h-[65vh] max-h-[78vh] rounded-[18px] overflow-hidden select-none bg-[#08130c] shadow-2xl cursor-ew-resize"
              onMouseDown={(e) => {
                setIsDragging(true);
                updatePosition(e.clientX);
              }}
              onTouchStart={(e) => {
                setIsDragging(true);
                updatePosition(e.touches[0].clientX);
              }}
            >
              {/* After image base */}
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src={currentItem.afterImage!}
                  alt={`${currentItem.title} after`}
                  fill
                  className="object-contain"
                  priority
                />
                <span className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-[#8dff16] text-[#07110a] text-xs font-black uppercase tracking-wider shadow">
                  After
                </span>
              </div>

              {/* Before image clipped */}
              <div
                className="absolute inset-0 w-full h-full overflow-hidden"
                style={{
                  clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)`,
                }}
              >
                <Image
                  src={currentItem.beforeImage!}
                  alt={`${currentItem.title} before`}
                  fill
                  className="object-contain"
                  priority
                />
                <span className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-white text-xs font-black uppercase tracking-wider border border-white/20 shadow">
                  Before
                </span>
              </div>

              {/* Slider divider */}
              <div
                className="absolute top-0 bottom-0 z-20 w-[3px] bg-white shadow-[0_0_15px_rgba(141,255,22,0.9)] pointer-events-none"
                style={{ left: `${sliderPos}%` }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#8dff16] text-[#08130c] shadow-xl flex items-center justify-center font-black text-sm border-2 border-[#07130b] pointer-events-auto">
                  ‹ ›
                </div>
              </div>

              {/* Interactive hint */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 pointer-events-none">
                <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-xs text-white/90 font-semibold border border-white/10 shadow">
                  Drag slider horizontally to compare Before & After
                </span>
              </div>
            </div>
          ) : (
            <Image
              id="lbImage"
              src={currentItem.image}
              alt={currentItem.title}
              width={1100}
              height={750}
              className="w-full max-h-[78vh] object-contain rounded-[18px] bg-[#08130c]"
              priority
            />
          )}
        </div>

        <button
          className="lb-next"
          id="lbNext"
          aria-label="Next image"
          onClick={handleNext}
        >
          ›
        </button>

        <div className="lightbox-caption">
          <div>
            <strong id="lbTitle">{currentItem.title}</strong>
            <small id="lbSub">{currentItem.sub}</small>
          </div>
          <small id="lbCount">{`${currentIndex + 1} / ${total}`}</small>
        </div>
      </div>
    </div>
  );
}
