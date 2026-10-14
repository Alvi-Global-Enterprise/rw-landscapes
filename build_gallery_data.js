const fs = require('fs');
const path = require('path');

const map = JSON.parse(fs.readFileSync('category_images_map.json', 'utf8'));

// Helper to encode image path
function getImagePath(folder, filename) {
  return `/images/${encodeURIComponent(folder)}/${encodeURIComponent(filename)}`;
}

const projects = [];
let idCounter = 0;

// 1. Garden Clearance
const clearanceFiles = map['Garden clearance'] || [];
// Before/After pairs in clearance
projects.push({
  id: idCounter++,
  title: "Dense Overgrowth Clearance",
  sub: "Heavy brambles and brush cleared to bare ground",
  category: "clearance",
  categoryLabel: "Garden clearance",
  beforeImage: getImagePath("Garden clearance", clearanceFiles[0]),
  afterImage: getImagePath("Garden clearance", clearanceFiles[1] || clearanceFiles[0]),
  image: getImagePath("Garden clearance", clearanceFiles[1] || clearanceFiles[0]),
  isWide: true
});

projects.push({
  id: idCounter++,
  title: "Garden Waste Removal",
  sub: "Complete clearing and ground leveling",
  category: "clearance",
  categoryLabel: "Garden clearance",
  beforeImage: getImagePath("Garden clearance", clearanceFiles[2] || clearanceFiles[0]),
  afterImage: getImagePath("Garden clearance", clearanceFiles[3] || clearanceFiles[1]),
  image: getImagePath("Garden clearance", clearanceFiles[3] || clearanceFiles[1]),
  isWide: true
});

// Single showcase clearance photos
clearanceFiles.slice(4).forEach((file, idx) => {
  projects.push({
    id: idCounter++,
    title: `Site Clearance & Prep #${idx + 1}`,
    sub: "Professional ground clearance and removal",
    category: "clearance",
    categoryLabel: "Garden clearance",
    image: getImagePath("Garden clearance", file),
    isWide: idx % 5 === 0
  });
});

// 2. Turfing & Lawns
const turfingFiles = map['Turfing'] || [];
projects.push({
  id: idCounter++,
  title: "Fresh Turf Installation",
  sub: "Prepared soil transformed into vibrant green lawn",
  category: "turfing",
  categoryLabel: "Turfing",
  beforeImage: getImagePath("Turfing", turfingFiles[0]),
  afterImage: getImagePath("Turfing", turfingFiles[1] || turfingFiles[0]),
  image: getImagePath("Turfing", turfingFiles[1] || turfingFiles[0]),
  isWide: true
});

projects.push({
  id: idCounter++,
  title: "Complete Lawn Makeover",
  sub: "Ground leveled and fresh premium turf rolled",
  category: "turfing",
  categoryLabel: "Turfing",
  beforeImage: "/images/img_6.webp",
  afterImage: "/images/img_5.webp",
  image: "/images/img_5.webp",
  isWide: true
});

turfingFiles.slice(2).forEach((file, idx) => {
  projects.push({
    id: idCounter++,
    title: `Lawn Project Detail #${idx + 1}`,
    sub: "Healthy, thick and cleanly cut turf finish",
    category: "turfing",
    categoryLabel: "Turfing",
    image: getImagePath("Turfing", file),
    isWide: false
  });
});

// 3. Fencing
const fencingFiles = map['Fencing'] || [];
projects.push({
  id: idCounter++,
  title: "Boundary Fencing Transformation",
  sub: "Old perimeter replaced with secure wooden fence panels",
  category: "fencing",
  categoryLabel: "Fencing",
  beforeImage: getImagePath("Fencing", fencingFiles[0]),
  afterImage: getImagePath("Fencing", fencingFiles[1] || fencingFiles[0]),
  image: getImagePath("Fencing", fencingFiles[1] || fencingFiles[0]),
  isWide: true
});

projects.push({
  id: idCounter++,
  title: "Garden Boundary Fence",
  sub: "Clean timber fence line with gravel boards",
  category: "fencing",
  categoryLabel: "Fencing",
  beforeImage: getImagePath("Fencing", fencingFiles[2] || fencingFiles[0]),
  afterImage: getImagePath("Fencing", fencingFiles[3] || fencingFiles[1]),
  image: getImagePath("Fencing", fencingFiles[3] || fencingFiles[1]),
  isWide: true
});

fencingFiles.slice(4).forEach((file, idx) => {
  projects.push({
    id: idCounter++,
    title: `Fencing Project #${idx + 1}`,
    sub: "Quality timber boundary installation",
    category: "fencing",
    categoryLabel: "Fencing",
    image: getImagePath("Fencing", file),
    isWide: idx % 4 === 0
  });
});

// 4. Patios & Paving
const patioFiles = map['Patios'] || [];
projects.push({
  id: idCounter++,
  title: "Patio Renovation & Paving",
  sub: "Existing weathered paving renewed with precision cuts",
  category: "patios",
  categoryLabel: "Patios",
  beforeImage: "/images/img_10.webp",
  afterImage: "/images/img_11.webp",
  image: "/images/img_11.webp",
  isWide: true
});

projects.push({
  id: idCounter++,
  title: "Outdoor Living Patio Area",
  sub: "Modern stone patio designed for dining and seating",
  category: "patios",
  categoryLabel: "Patios",
  beforeImage: "/images/img_12.webp",
  afterImage: "/images/img_7.webp",
  image: "/images/img_7.webp",
  isWide: true
});

if (patioFiles.length > 0) {
  patioFiles.forEach((file, idx) => {
    projects.push({
      id: idCounter++,
      title: `Paving & Hardscaping #${idx + 1}`,
      sub: "Durable hard-wearing outdoor patio finish",
      category: "patios",
      categoryLabel: "Patios",
      image: getImagePath("Patios", file),
      isWide: false
    });
  });
}

// 5. Artificial Grass
const grassFiles = map['Artificial grass'] || [];
projects.push({
  id: idCounter++,
  title: "Artificial Lawn Installation",
  sub: "Excavated ground transformed into low-maintenance grass",
  category: "artificial-grass",
  categoryLabel: "Artificial grass",
  beforeImage: getImagePath("Artificial grass", grassFiles[0]),
  afterImage: getImagePath("Artificial grass", grassFiles[1] || grassFiles[0]),
  image: getImagePath("Artificial grass", grassFiles[1] || grassFiles[0]),
  isWide: true
});

grassFiles.slice(2).forEach((file, idx) => {
  projects.push({
    id: idCounter++,
    title: `Artificial Grass Showcase #${idx + 1}`,
    sub: "Lush, all-weather neat green lawn",
    category: "artificial-grass",
    categoryLabel: "Artificial grass",
    image: getImagePath("Artificial grass", file),
    isWide: false
  });
});

// 6. Hedges
const hedgeFiles = map['Hedges'] || [];
projects.push({
  id: idCounter++,
  title: "Hedge Trimming & Shaping",
  sub: "Overgrown hedges trimmed to clean, sharp boundary lines",
  category: "hedges",
  categoryLabel: "Hedges",
  beforeImage: getImagePath("Hedges", hedgeFiles[0]),
  afterImage: getImagePath("Hedges", hedgeFiles[1] || hedgeFiles[0]),
  image: getImagePath("Hedges", hedgeFiles[1] || hedgeFiles[0]),
  isWide: true
});

hedgeFiles.slice(2).forEach((file, idx) => {
  projects.push({
    id: idCounter++,
    title: `Hedge Maintenance #${idx + 1}`,
    sub: "Neatly pruned and reduced garden hedges",
    category: "hedges",
    categoryLabel: "Hedges",
    image: getImagePath("Hedges", file),
    isWide: idx % 4 === 0
  });
});

// 7. Pressure Washing
const washFiles = map['Pressure washing'] || [];
projects.push({
  id: idCounter++,
  title: "Pressure Washing Transformation",
  sub: "Grime and moss removed to reveal pristine surfaces",
  category: "pressure-washing",
  categoryLabel: "Pressure washing",
  beforeImage: getImagePath("Pressure washing", washFiles[0]),
  afterImage: getImagePath("Pressure washing", washFiles[1] || washFiles[0]),
  image: getImagePath("Pressure washing", washFiles[1] || washFiles[0]),
  isWide: true
});

washFiles.slice(2).forEach((file, idx) => {
  projects.push({
    id: idCounter++,
    title: `Jet Washing Detail #${idx + 1}`,
    sub: "Deep surface cleaning for driveways and patios",
    category: "pressure-washing",
    categoryLabel: "Pressure washing",
    image: getImagePath("Pressure washing", file),
    isWide: false
  });
});

const tsContent = `// Auto-generated gallery projects from public/images category folders
export interface GalleryProject {
  id: number;
  title: string;
  sub: string;
  category: "clearance" | "turfing" | "fencing" | "patios" | "artificial-grass" | "hedges" | "pressure-washing";
  categoryLabel: string;
  image: string;
  beforeImage?: string;
  afterImage?: string;
  isWide?: boolean;
}

export const galleryProjects: GalleryProject[] = ${JSON.stringify(projects, null, 2)};
`;

if (!fs.existsSync('src/data')) {
  fs.mkdirSync('src/data');
}

fs.writeFileSync('src/data/galleryProjects.ts', tsContent);
console.log(`Generated ${projects.length} gallery projects in src/data/galleryProjects.ts`);
