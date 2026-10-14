"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt?: string;
  afterAlt?: string;
  title: string;
  sub: string;
  category: string;
  isWide?: boolean;
  onExpand?: () => void;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeAlt = "Before transformation",
  afterAlt = "After transformation",
  title,
  sub,
  category,
  isWide = false,
  onExpand,
}: BeforeAfterSliderProps) {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    updatePosition(e.clientX);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    updatePosition(e.touches[0].clientX);
  };

  useEffect(() => {
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

    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove, { passive: true });
      window.addEventListener("touchend", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging, updatePosition]);

  return (
    <div
      ref={containerRef}
      className="group relative select-none overflow-hidden rounded-[24px] bg-[#07130b] shadow-[0_12px_34px_rgba(10,40,17,0.09)] transition-all duration-300 hover:shadow-[0_22px_50px_rgba(10,40,17,0.18)] col-span-12 lg:col-span-6 h-[380px] sm:h-[440px]"
      style={{ touchAction: "none" }}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
    >
      {/* Background: After Image (Full width base) */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={afterImage}
          alt={afterAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover pointer-events-none"
          priority={false}
          loading="lazy"
        />
        <div className="absolute top-4 right-4 z-10 px-2.5 py-1 rounded-full bg-[#8dff16] text-[#07110a] text-[10px] font-black tracking-wider uppercase shadow-md pointer-events-none">
          After
        </div>
      </div>

      {/* Foreground: Before Image (Clipped by slider position) */}
      <div
        className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
        style={{
          clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)`,
        }}
      >
        <Image
          src={beforeImage}
          alt={beforeAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
          priority={false}
          loading="lazy"
        />
        <div className="absolute top-4 left-4 z-10 px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-white text-[10px] font-black tracking-wider uppercase shadow-md">
          Before
        </div>
      </div>

      {/* Vertical Slider Divider Line */}
      <div
        className="absolute top-0 bottom-0 z-20 pointer-events-none w-[2px] bg-white shadow-[0_0_12px_rgba(141,255,22,0.8)]"
        style={{ left: `${sliderPos}%` }}
      >
        {/* Drag handle button in the center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#8dff16] text-[#08130c] shadow-[0_4px_16px_rgba(0,0,0,0.4)] flex items-center justify-center font-black text-xs cursor-ew-resize border-2 border-[#07130b] pointer-events-auto transition-transform duration-150 active:scale-110 group-hover:scale-105">
          <span className="flex items-center gap-0.5 tracking-tighter">
            <span>‹</span>
            <span>›</span>
          </span>
        </div>
      </div>

      {/* Card Info Overlay */}
      <div className="absolute inset-x-0 bottom-0 z-10 pt-16 pb-4 px-5 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-end justify-between pointer-events-none">
        <div className="pointer-events-auto">
          <span className="inline-block px-2 py-0.5 mb-1 text-[9px] font-extrabold uppercase tracking-wider rounded-md bg-white/10 backdrop-blur-sm text-[#bffb8c] border border-white/10">
            {category}
          </span>
          <strong className="block text-white text-base font-extrabold leading-snug drop-shadow-sm">
            {title}
          </strong>
          <small className="block text-[#d5ded7] text-xs drop-shadow-sm mt-0.5">
            {sub}
          </small>
        </div>

        {onExpand && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onExpand();
            }}
            className="pointer-events-auto w-9 h-9 rounded-full bg-[#8dff16] text-[#08130c] flex items-center justify-center font-black text-sm shrink-0 transition-transform duration-200 hover:scale-110 active:scale-95 shadow-lg"
            aria-label={`Open ${title} full comparison`}
          >
            ↗
          </button>
        )}
      </div>

      {/* Subtle hint when hovering */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] text-white/90 font-bold border border-white/15">
          Drag ‹ › to compare
        </span>
      </div>
    </div>
  );
}
