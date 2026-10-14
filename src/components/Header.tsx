"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`} id="header">
      <div className="container nav">
        <a className="brand" href="#home" aria-label="RW Landscapes home">
          <Image
            src="/images/img_1.png"
            alt="RW Landscapes"
            width={108}
            height={70}
            priority
            style={{ width: "auto", height: "auto" }}
          />
        </a>
    



    
        <nav className="navlinks" aria-label="Primary navigation">
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#work">Our Work</a>
          <a href="#process">How It Works</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="nav-actions">
          <a className="btn btn-primary" href="tel:+447877722888">
            Free Quote <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
          </a>
        </div>

        <button
          className="menu"
          id="menuBtn"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen((prev) => !prev)}
        >
          {mobileMenuOpen ? "×" : "☰"}
        </button>
      </div>

      <div className={`mobile-panel ${mobileMenuOpen ? "open" : ""}`} id="mobilePanel">
        <a href="#services" onClick={closeMenu}>
          Services
        </a>
        <a href="#about" onClick={closeMenu}>
          About
        </a>
        <a href="#work" onClick={closeMenu}>
          Our Work
        </a>
        <a href="#process" onClick={closeMenu}>
          How It Works
        </a>
        <a href="#contact" onClick={closeMenu}>
          Contact
        </a>
        <a className="btn btn-primary" href="tel:+447877722888" onClick={closeMenu}>
          Call for a Free Quote
        </a>
      </div>
    </header>
  );
}
