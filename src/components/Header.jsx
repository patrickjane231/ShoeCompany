import { useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="z-50 w-full max-w-360 left-1/2 -translate-x-1/2
      flex items-center justify-between px-6 md:px-12
      bg-black/70 backdrop-blur-sm fixed "
    >
      {/* Logo */}
      <a href="#hero">
        <img className="w-24 md:w-32" src="/images/Group 2.png" alt="Logo" />
      </a>

      {/* Desktop nav */}
      <nav className="hidden md:flex font-bold lg:text-2xl gap-8">
        <a href="#hero">Home</a>
        <a href="#how-it-works">How it Works</a>
        <a href="#about">About</a>
        <a href="#testimonals">Testimonials</a>
        <a href="#contacts">Contact Us</a>
      </nav>

      {/* Hamburger */}
      <div className="relative md:hidden">
        <button
          onClick={() => setOpen(!open)}
          className="text-4xl"
          aria-label="Menu"
        >
          ☰
        </button>

        {/* Dropdown */}
        <div
          className={`
            absolute right-0 top-14 w-48
            bg-black/90 backdrop-blur-md
            rounded-xl shadow-lg
            flex flex-col gap-4 p-6 text-lg font-bold
            transition-all duration-200 origin-top-right
            ${
              open
                ? "scale-100 opacity-100"
                : "scale-95 opacity-0 pointer-events-none"
            }
          `}
        >
          <a href="#hero" onClick={() => setOpen(false)}>Home</a>
          <a href="#how-it-works" onClick={() => setOpen(false)}>How it Works</a>
          <a href="#about" onClick={() => setOpen(false)}>About</a>
          <a href="#testimonals" onClick={() => setOpen(false)}>Testimonials</a>
          <a href="#contacts" onClick={() => setOpen(false)}>Contact Us</a>
        </div>
      </div>
    </header>
  );
}
