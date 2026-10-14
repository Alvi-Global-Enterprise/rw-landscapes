import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rwlandscapes.co.uk"),
  title: "RW Landscapes | Outdoor Spaces, Built to Last",
  description:
    "RW Landscapes — professional landscaping, patios, fencing, turfing, artificial grass, driveways, decking, tree work, hedges, garden clearance and pressure washing.",
  keywords: [
    "RW Landscapes",
    "Landscaping",
    "Patios",
    "Fencing",
    "Turfing",
    "Artificial Grass",
    "Driveways",
    "Decking",
    "Tree Work",
    "Garden Clearance",
    "Pressure Washing",
    "Hedges",
  ],
  icons: {
    icon: [
      { url: "/images/img_1.png", type: "image/png" },
      { url: "/icon.png", type: "image/png" },
    ],
    shortcut: "/images/img_1.png",
    apple: [
      { url: "/images/img_1.png", type: "image/png" },
    ],
  },
  openGraph: {
    title: "RW Landscapes | Outdoor Spaces, Built to Last",
    description:
      "Professional landscaping services: patios, fencing, turfing, garden clearance, driveways and complete outdoor transformations.",
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: "/images/img_0.webp",
        width: 1200,
        height: 630,
        alt: "RW Landscapes Outdoor Transformations",
      },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#07130b",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB" className={`${inter.variable} scroll-smooth`}>
      <body
        suppressHydrationWarning
        className="font-sans bg-[#f4f7f2] text-[#08130c] antialiased selection:bg-[#8dff16] selection:text-[#08130c] min-h-screen flex flex-col"
      >
        {children}
      </body>
    </html>
  );
}
