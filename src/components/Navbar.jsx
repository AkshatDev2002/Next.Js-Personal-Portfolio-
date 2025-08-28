"use client";

import React, { useEffect, useState } from "react";
import {
  FaBook,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";
import { useTheme } from "next-themes";

const Navbar = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle theme-based colors
  const iconColor =
    theme === "dark" ? "text-white" : "text-gray-800"; // white for dark mode, dark for light mode

  if (!mounted) return null; // avoid hydration mismatch

  return (
    <div
      className="relative z-50 flex flex-col items-center gap-4 w-full max-w-6xl px-4 mx-auto pt-6 md:flex-row md:justify-between"
      style={{ fontFamily: "var(--font-inria-sans)" }}
    >
      

      {/* Right icons */}
      <div className={`flex gap-4 items-center mt-1 md:mt-0 ${iconColor}`}>
        <a
          href="https://www.linkedin.com/in/akshat-dev-14ad/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin
            className="hover:text-red-400 transition"
            size={18}
          />
        </a>
        <a
          href="https://github.com/AkshatDev2002"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="hover:text-red-400 transition" size={18} />
        </a>
        <a
          href="https://www.instagram.com/dev.akshx?igsh=bmhtN2gxbnJzNDd6&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="hover:text-red-400 transition" size={18} />
        </a>
        <a href="mailto:dakshat75@gmail.com">
          <FaEnvelope className="hover:text-red-400 transition" size={18} />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
