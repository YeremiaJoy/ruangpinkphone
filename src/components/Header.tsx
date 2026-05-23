"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#" },
    { label: "Products", href: "#products" },
    { label: "Testimoni", href: "#testimoni" },
    { label: "Store", href: "#location" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-secondary-container/30 shadow-sm flex justify-between items-center px-4 md:px-10 transition-all ${
          scrolled ? "h-16 shadow-lg" : "h-20"
        }`}
      >
        <div className="flex items-center gap-4">
          <span className="text-[20px] md:text-[24px] font-bold text-primary tracking-tight">
            ruangpinkphone
          </span>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              className="text-on-surface-variant hover:text-primary transition-colors text-sm first:text-primary first:font-bold"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Hamburger button */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-[5px] w-8 h-8 focus:outline-none"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span
            className={`block w-6 h-0.5 bg-primary transition-all duration-300 ${
              menuOpen ? "translate-y-[6.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-primary transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-primary transition-all duration-300 ${
              menuOpen ? "-translate-y-[6.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </header>

      {/* Mobile collapsible nav */}
      <div
        className={`fixed top-0 left-0 w-full z-40 bg-white/95 backdrop-blur-xl border-b border-secondary-container/30 shadow-md transition-all duration-300 ease-in-out overflow-hidden md:hidden ${
          menuOpen ? "max-h-screen pt-20 pb-6" : "max-h-0 pt-0 pb-0"
        }`}
      >
        <nav className="flex flex-col px-6 gap-5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-on-surface-variant hover:text-primary transition-colors text-base font-medium first:text-primary first:font-bold"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
