"use client";

import { useState } from "react";
import Link from "next/link";
import { FaEarthAmericas, FaBars, FaXmark } from "react-icons/fa6";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="max-w-[1280px] w-full mx-auto flex items-center justify-between px-4 py-6">
      {/* Logo */}
      <span className="cursive text-4xl md:text-6xl">Jão Dev</span>

      {/* Desktop Nav */}
      <nav className="hidden md:block">
        <ul className="flex items-center gap-10">
          <li>
            <Link className="link text-2xl" href="#">
              About
            </Link>
          </li>
          <li>
            <Link className="link text-2xl" href="#">
              Skills
            </Link>
          </li>
          <li>
            <Link className="link text-2xl" href="#">
              Projects
            </Link>
          </li>
          <li>
            <Link className="link text-2xl" href="#">
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* Language Selector */}
      <div className="flex items-center gap-2 text-xl md:text-2xl hover:text-primary cursor-pointer transition">
        <FaEarthAmericas /> <span>en</span>
      </div>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden text-3xl"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {menuOpen ? <FaXmark /> : <FaBars />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-[90px] left-0 w-full bg-white shadow-md">
          <ul className="flex flex-col items-center gap-6 py-6">
            <li>
              <Link
                className="link text-2xl"
                href="/#about"
                onClick={toggleMenu}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="link text-2xl"
                href="/#skills"
                onClick={toggleMenu}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                className="link text-2xl"
                href="/#projects"
                onClick={toggleMenu}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                className="link text-2xl"
                href="/#contact"
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};
