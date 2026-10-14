"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import BeforeAfterSlider from "./BeforeAfterSlider";
import LightboxModal from "./LightboxModal";
import { galleryProjects, GalleryProject } from "@/data/galleryProjects";

type FilterType =
  | "all"
  | "clearance"
  | "turfing"
  | "fencing"
  | "patios"
  | "artificial-grass"
  | "hedges"
  | "pressure-washing";

export default function WorkGallery() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);
  const [displayLimit, setDisplayLimit] = useState(16);

  const filters: { label: string; value: FilterType }[] = [
    { label: "All work", value: "all" },
    { label: "Garden clearance", value: "clearance" },
    { label: "Turfing", value: "turfing" },
    { label: "Fencing", value: "fencing" },
    { label: "Patios", value: "patios" },
    { label: "Artificial grass", value: "artificial-grass" },
    { label: "Hedges", value: "hedges" },
    { label: "Pressure washing", value: "pressure-washing" },
  ];

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return galleryProjects;
    return galleryProjects.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  // If "all" is active, apply display limit with a "Load More" button.
  // For specific categories, show all images in that category.
  const visibleProjects = useMemo(() => {
    if (activeFilter === "all") {
      return filteredProjects.slice(0, displayLimit);
    }
    return filteredProjects;
  }, [filteredProjects, activeFilter, displayLimit]);

  const handleOpenLightbox = (index: number) => {
    setSelectedPhotoIndex(index);
    setLightboxOpen(true);
  };

  const handleFilterChange = (filter: FilterType) => {
    setActiveFilter(filter);
    setDisplayLimit(16);
  };

  return (
    <section className="section work" id="work">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Our work</span>
          <h2>Real projects. Real transformations.</h2>
          <p>
            Browse real customer landscaping projects across all our core
            services. Compare before-and-after transformations and view our recent
            clearances, fresh lawns, fencing, patios, hedges, and pressure washing.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-7">
          <div className="filter-row !mb-0 overflow-x-auto max-w-full" aria-label="Gallery filters">
            {filters.map((f) => (
              <button
                key={f.value}
                className={`filter whitespace-nowrap ${activeFilter === f.value ? "active" : ""}`}
                onClick={() => handleFilterChange(f.value)}
                type="button"
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#536158] bg-white/70 backdrop-blur-sm px-3.5 py-2 rounded-full border border-[#d6dfd3] shadow-sm w-fit shrink-0">
            <span className="w-2 h-2 rounded-full bg-[#1f6b25] animate-pulse" />
            <span>{filteredProjects.length} Projects in Gallery</span>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6 sm:gap-8" id="gallery">
          {visibleProjects.map((project, index) => (
            <BeforeAfterSlider
              key={project.id}
              beforeImage={project.beforeImage}
              afterImage={project.afterImage}
              beforeAlt={`${project.title} - Before`}
              afterAlt={`${project.title} - After`}
              title={project.title}
              sub={project.sub}
              category={project.categoryLabel}
              isWide={true}
              onExpand={() => handleOpenLightbox(index)}
            />
          ))}
        </div>

        {/* Load more button if there are more items to display */}
        {activeFilter === "all" && visibleProjects.length < filteredProjects.length && (
          <div className="mt-10 text-center">
            <button
              type="button"
              onClick={() => setDisplayLimit((prev) => prev + 16)}
              className="btn btn-primary shadow-md hover:shadow-xl px-7 py-3 text-sm"
            >
              Show More Projects ({filteredProjects.length - visibleProjects.length} more) <span>↓</span>
            </button>
          </div>
        )}
      </div>

      <LightboxModal
        isOpen={lightboxOpen}
        currentIndex={selectedPhotoIndex}
        items={visibleProjects}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(newIndex) => setSelectedPhotoIndex(newIndex)}
      />
    </section>
  );
}
