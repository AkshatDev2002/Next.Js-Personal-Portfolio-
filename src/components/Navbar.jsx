"use client";

import { useEffect, useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { useTheme } from "next-themes";

const Navbar = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const iconColor = theme === "dark" ? "text-white" : "text-gray-800";

  return (
    <div
      className="fixed bottom-6 left-1/2 -translate-x-1/2 flex gap-6 items-center z-50"
      style={{ fontFamily: "var(--font-inria-sans)" }}
    >
      <a
        href="https://www.linkedin.com/in/akshat-dev-14ad/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin
          className={`hover:text-red-400 transition ${iconColor}`}
          size={22}
        />
      </a>
      <a
        href="https://github.com/AkshatDev2002"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub
          className={`hover:text-red-400 transition ${iconColor}`}
          size={22}
        />
      </a>
      <a href="mailto:dakshat75@gmail.com">
        <FaEnvelope
          className={`hover:text-red-400 transition ${iconColor}`}
          size={22}
        />
      </a>
    </div>
  );
};

export default Navbar;
