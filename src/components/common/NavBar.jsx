"use client";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 md:px-12 ${
        scrolled ? "py-3 backdrop-blur-xl" : "py-5"
      }`}
    //   style={{
    //     background: scrolled
    //       ? "rgba(0,0,0,0.6)"
    //       : "transparent",
    //     borderBottom: scrolled
    //       ? "1px solid rgba(255, 0, 0, 0.2)"
    //       : "1px solid transparent",
    //   }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <h1
          className="text-xl md:text-2xl font-black tracking-widest cursor-pointer"
          style={{
            fontFamily: "'Impact', sans-serif",
            color: "White",
          }}
          onClick={() => scrollTo("body")}
        >
          MOSFET
        </h1>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest">
          {[
            { label: "Home", id: "body" },
            { label: "Services", id: "#services" },
            { label: "Contact", id: "#contact" },
          ].map((item) => (
            <button
              key={item.label}
              onClick={() => scrollTo(item.id)}
              className="text-white/90 cursor-pointer hover:font-bold transition-colors duration-200"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* CTA Button
        <button
          onClick={() => scrollTo("#contact")}
          className="hidden md:block px-5 py-2.5 rounded-lg text-xs font-bold tracking-widest uppercase transition-all duration-300 hover:scale-105"
          style={{
            background: "red",
            boxShadow: "0 0 20px rgba(255,0,0,0.4)",
          }}
        >
          Get in Touch
        </button> */}

        {/* Mobile Menu (simple) */}
        <div className="md:hidden">
          <button className="text-white text-xl">☰</button>
        </div>
      </div>
    </nav>
  );
}