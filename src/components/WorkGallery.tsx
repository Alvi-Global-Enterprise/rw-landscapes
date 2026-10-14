"use client";

import { useState } from "react";
import BeforeAfterSlider from "./BeforeAfterSlider";
import LightboxModal, { LightboxItem } from "./LightboxModal";

export interface TransformationProject extends LightboxItem {
  id: number;
  title: string;
  sub: string;
  category: "clearance" | "lawns" | "patios" | "fencing";
  beforeImage: string;
  afterImage: string;
  image: string;
  isWide?: boolean;
}

const galleryData: TransformationProject[] = [
  {
    id: 0,
    title: "Garden transformations",
    sub: "Before / after groundwork & turfing",
    category: "clearance",
    beforeImage: "/images/img_4.webp",
    afterImage: "/images/img_9.webp",
    image: "/images/img_9.webp",
    isWide: true,
  },
  {
    id: 1,
    title: "Lawn installation",
    sub: "Fresh turf, clean finish",
    category: "lawns",
    beforeImage: "/images/img_6.webp",
    afterImage: "/images/img_5.webp",
    image: "/images/img_5.webp",
    isWide: true,
  },
  {
    id: 2,
    title: "Garden clearance",
    sub: "Overgrowth to clean ground preparation",
    category: "clearance",
    beforeImage: "/images/img_13.webp",
    afterImage: "/images/img_14.webp",
    image: "/images/img_14.webp",
    isWide: true,
  },
  {
    id: 3,
    title: "Patios & outdoor living",
    sub: "Paving and artificial grass transformation",
    category: "patios",
    beforeImage: "/images/img_12.webp",
    afterImage: "/images/img_7.webp",
    image: "/images/img_7.webp",
    isWide: true,
  },
  {
    id: 4,
    title: "Completed landscape",
    sub: "Overgrown garden to finished outdoor living space",
    category: "lawns",
    beforeImage: "/images/img_2.webp",
    afterImage: "/images/img_8.webp",
    image: "/images/img_8.webp",
    isWide: true,
  },
  {
    id: 5,
    title: "Patio renovation",
    sub: "Existing paving renewed with crisp detailing",
    category: "patios",
    beforeImage: "/images/img_10.webp",
    afterImage: "/images/img_11.webp",
    image: "/images/img_11.webp",
    isWide: true,
  },
  {
    id: 6,
    title: "Fencing & groundwork",
    sub: "Raw perimeter to clean boundary fencing",
    category: "fencing",
    beforeImage: "/images/img_16.webp",
    afterImage: "/images/img_15.webp",
    image: "/images/img_15.webp",
    isWide: true,
  },
  {
    id: 7,
    title: "Turf & paving",
    sub: "Ground leveling to finished lawn and hard landscaping",
    category: "lawns",
    beforeImage: "/images/img_2.webp",
    afterImage: "/images/img_17.webp",
    image: "/images/img_17.webp",
    isWide: true,
  },
];

type FilterType = "all" | "clearance" | "lawns" | "patios" | "fencing";

export default function WorkGallery() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);

  const filters: { label: string; value: FilterType }[] = [
    { label: "All work", value: "all" },
    { label: "Clearance", value: "clearance" },
    { label: "Lawns & turf", value: "lawns" },
    { label: "Patios & paving", value: "patios" },
    { label: "Fencing & groundwork", value: "fencing" },
  ];

  const filteredProjects = galleryData.filter(
    (item) => activeFilter === "all" || item.category === activeFilter
  );

  const handleOpenLightbox = (index: number) => {
    setSelectedPhotoIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section className="section work" id="work">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Our work</span>
          <h2>Real projects. Real transformations.</h2>
          <p>
            Drag the slider on any card below to see the interactive
            before-and-after change from overgrown groundwork through to finished
            outdoor living spaces.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-7">
          <div className="filter-row !mb-0" aria-label="Gallery filters">
            {filters.map((f) => (
              <button
                key={f.value}
                className={`filter ${activeFilter === f.value ? "active" : ""}`}
                onClick={() => setActiveFilter(f.value)}
                type="button"
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#536158] bg-white/70 backdrop-blur-sm px-3.5 py-2 rounded-full border border-[#d6dfd3] shadow-sm w-fit">
            <span className="w-2 h-2 rounded-full bg-[#1f6b25] animate-pulse" />
            <span>Interactive Before &amp; After Sliders</span>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-5 sm:gap-6" id="gallery">
          {filteredProjects.map((project, index) => (
            <BeforeAfterSlider
              key={project.id}
              beforeImage={project.beforeImage}
              afterImage={project.afterImage}
              beforeAlt={`${project.title} - Before`}
              afterAlt={`${project.title} - After`}
              title={project.title}
              sub={project.sub}
              category={project.category}
              isWide={project.isWide}
              onExpand={() => handleOpenLightbox(index)}
            />
          ))}
        </div>
      </div>

      <LightboxModal
        isOpen={lightboxOpen}
        currentIndex={selectedPhotoIndex}
        items={filteredProjects}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(newIndex) => setSelectedPhotoIndex(newIndex)}
      />
    </section>
  );
}
