const fs = require('fs');

const map = JSON.parse(fs.readFileSync('category_images_map.json', 'utf8'));

function getImagePath(folder, filename) {
  return `/images/${encodeURIComponent(folder)}/${encodeURIComponent(filename)}`;
}

const projects = [];
let idCounter = 0;

// 1. Garden Clearance (24 images -> 12 Before/After pairs)
const clearanceFiles = map['Garden clearance'] || [];
for (let i = 0; i < clearanceFiles.length - 1; i += 2) {
  const pairIdx = Math.floor(i / 2) + 1;
  const beforeFile = clearanceFiles[i];
  const afterFile = clearanceFiles[i + 1];

  projects.push({
    id: idCounter++,
    title: `Garden Clearance Transformation #${pairIdx}`,
    sub: "Overgrown waste & brambles cleared to clean level ground",
    category: "clearance",
    categoryLabel: "Garden clearance",
    beforeImage: getImagePath("Garden clearance", beforeFile),
    afterImage: getImagePath("Garden clearance", afterFile),
    image: getImagePath("Garden clearance", afterFile),
    isWide: true
  });
}

// 2. Turfing & Lawns (7 images + curated pairs -> 5 Before/After pairs)
const turfingFiles = map['Turfing'] || [];
for (let i = 0; i < turfingFiles.length - 1; i += 2) {
  const pairIdx = Math.floor(i / 2) + 1;
  projects.push({
    id: idCounter++,
    title: `Fresh Turf Transformation #${pairIdx}`,
    sub: "Prepared soil transformed into vibrant green lawn",
    category: "turfing",
    categoryLabel: "Turfing",
    beforeImage: getImagePath("Turfing", turfingFiles[i]),
    afterImage: getImagePath("Turfing", turfingFiles[i + 1]),
    image: getImagePath("Turfing", turfingFiles[i + 1]),
    isWide: true
  });
}
// Add 2 curated turfing transformations
if (turfingFiles.length > 6) {
  projects.push({
    id: idCounter++,
    title: "Complete Lawn Installation",
    sub: "Soil leveling and fresh premium turf rolled",
    category: "turfing",
    categoryLabel: "Turfing",
    beforeImage: getImagePath("Turfing", turfingFiles[6]),
    afterImage: "/images/img_5.webp",
    image: "/images/img_5.webp",
    isWide: true
  });
}
projects.push({
  id: idCounter++,
  title: "Full Garden Turf & Groundwork",
  sub: "Excavation and groundwork to freshly finished lawn",
  category: "turfing",
  categoryLabel: "Turfing",
  beforeImage: "/images/img_4.webp",
  afterImage: "/images/img_9.webp",
  image: "/images/img_9.webp",
  isWide: true
});

// 3. Fencing (14 images -> 7 Before/After pairs)
const fencingFiles = map['Fencing'] || [];
for (let i = 0; i < fencingFiles.length - 1; i += 2) {
  const pairIdx = Math.floor(i / 2) + 1;
  projects.push({
    id: idCounter++,
    title: `Fencing Transformation #${pairIdx}`,
    sub: "Old perimeter replaced with secure wooden fence panels",
    category: "fencing",
    categoryLabel: "Fencing",
    beforeImage: getImagePath("Fencing", fencingFiles[i]),
    afterImage: getImagePath("Fencing", fencingFiles[i + 1]),
    image: getImagePath("Fencing", fencingFiles[i + 1]),
    isWide: true
  });
}

// 4. Patios & Paving (3 Before/After pairs)
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
  title: "Outdoor Living Patio & Artificial Grass",
  sub: "Modern stone patio designed for dining and entertaining",
  category: "patios",
  categoryLabel: "Patios",
  beforeImage: "/images/img_12.webp",
  afterImage: "/images/img_7.webp",
  image: "/images/img_7.webp",
  isWide: true
});

if (patioFiles.length > 0) {
  projects.push({
    id: idCounter++,
    title: "Patio Paving Construction",
    sub: "Durable hard-wearing outdoor patio finish",
    category: "patios",
    categoryLabel: "Patios",
    beforeImage: "/images/img_2.webp",
    afterImage: getImagePath("Patios", patioFiles[0]),
    image: getImagePath("Patios", patioFiles[0]),
    isWide: true
  });
}

// 5. Artificial Grass (5 images -> 3 Before/After pairs)
const grassFiles = map['Artificial grass'] || [];
projects.push({
  id: idCounter++,
  title: "Artificial Lawn Installation #1",
  sub: "Excavated base transformed into lush low-maintenance grass",
  category: "artificial-grass",
  categoryLabel: "Artificial grass",
  beforeImage: getImagePath("Artificial grass", grassFiles[0]),
  afterImage: getImagePath("Artificial grass", grassFiles[1] || grassFiles[0]),
  image: getImagePath("Artificial grass", grassFiles[1] || grassFiles[0]),
  isWide: true
});

projects.push({
  id: idCounter++,
  title: "Artificial Grass Transformation #2",
  sub: "All-weather durable neat green lawn finish",
  category: "artificial-grass",
  categoryLabel: "Artificial grass",
  beforeImage: getImagePath("Artificial grass", grassFiles[2] || grassFiles[0]),
  afterImage: getImagePath("Artificial grass", grassFiles[3] || grassFiles[1]),
  image: getImagePath("Artificial grass", grassFiles[3] || grassFiles[1]),
  isWide: true
});

if (grassFiles.length > 4) {
  projects.push({
    id: idCounter++,
    title: "Garden Artificial Turf Showcase",
    sub: "Muddy backyard converted into spotless green living space",
    category: "artificial-grass",
    categoryLabel: "Artificial grass",
    beforeImage: getImagePath("Artificial grass", grassFiles[0]),
    afterImage: getImagePath("Artificial grass", grassFiles[4]),
    image: getImagePath("Artificial grass", grassFiles[4]),
    isWide: true
  });
}

// 6. Hedges (13 images -> 7 Before/After pairs)
const hedgeFiles = map['Hedges'] || [];
for (let i = 0; i < hedgeFiles.length - 1; i += 2) {
  const pairIdx = Math.floor(i / 2) + 1;
  projects.push({
    id: idCounter++,
    title: `Hedge Trimming Transformation #${pairIdx}`,
    sub: "Overgrown hedges trimmed to clean, sharp boundary lines",
    category: "hedges",
    categoryLabel: "Hedges",
    beforeImage: getImagePath("Hedges", hedgeFiles[i]),
    afterImage: getImagePath("Hedges", hedgeFiles[i + 1]),
    image: getImagePath("Hedges", hedgeFiles[i + 1]),
    isWide: true
  });
}
if (hedgeFiles.length % 2 !== 0 && hedgeFiles.length > 0) {
  projects.push({
    id: idCounter++,
    title: `Hedge Maintenance #${Math.ceil(hedgeFiles.length / 2)}`,
    sub: "Precision boundary hedge pruning and reduction",
    category: "hedges",
    categoryLabel: "Hedges",
    beforeImage: getImagePath("Hedges", hedgeFiles[hedgeFiles.length - 1]),
    afterImage: getImagePath("Hedges", hedgeFiles[0]),
    image: getImagePath("Hedges", hedgeFiles[0]),
    isWide: true
  });
}

// 7. Pressure Washing (6 images -> 3 Before/After pairs)
const washFiles = map['Pressure washing'] || [];
for (let i = 0; i < washFiles.length - 1; i += 2) {
  const pairIdx = Math.floor(i / 2) + 1;
  projects.push({
    id: idCounter++,
    title: `Pressure Washing Transformation #${pairIdx}`,
    sub: "Grime, dirt and moss jet-washed to reveal bright clean stone",
    category: "pressure-washing",
    categoryLabel: "Pressure washing",
    beforeImage: getImagePath("Pressure washing", washFiles[i]),
    afterImage: getImagePath("Pressure washing", washFiles[i + 1]),
    image: getImagePath("Pressure washing", washFiles[i + 1]),
    isWide: true
  });
}

const tsContent = `// All projects configured as Wide Before/After Sliders across all categories
export interface GalleryProject {
  id: number;
  title: string;
  sub: string;
  category: "clearance" | "turfing" | "fencing" | "patios" | "artificial-grass" | "hedges" | "pressure-washing";
  categoryLabel: string;
  image: string;
  beforeImage: string;
  afterImage: string;
  isWide: boolean;
}

export const galleryProjects: GalleryProject[] = ${JSON.stringify(projects, null, 2)};
`;

fs.writeFileSync('src/data/galleryProjects.ts', tsContent);
console.log(`Generated ${projects.length} 100% Wide Before/After projects in src/data/galleryProjects.ts`);
