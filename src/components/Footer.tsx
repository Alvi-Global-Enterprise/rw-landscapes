"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Footer() {
  const [year, setYear] = useState(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <a className="footer-brand" href="#home" aria-label="RW Landscapes home">
          <Image
            src="/images/img_18.png"
            alt="RW Landscapes"
            width={108}
            height={70}
            style={{ width: "auto", height: "auto" }}
          />
        </a>
        <small>
          © {year} RW Landscapes. Outdoor spaces, built to last.
        </small>
      </div>
    </footer>
  );
}
