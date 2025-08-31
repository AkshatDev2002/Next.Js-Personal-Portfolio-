"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const skills = [
  // Core
  { name: "JavaScript", icon: "/icons/javascript.svg", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { name: "Python", icon: "/icons/py.png", link: "https://www.python.org/" },
  { name: "C++", icon: "/icons/cpp.png", link: "https://isocpp.org/" },
  { name: "Unix/Linux", icon: "/icons/linux.svg", link: "https://www.kernel.org/" },

  // JS ecosystem
  { name: "React", icon: "/icons/react.png", link: "https://reactjs.org/" },
  { name: "Redux", icon: "/icons/redux.svg", link: "https://redux.js.org/" },
  { name: "Next.js", icon: "/icons/next.png", link: "https://nextjs.org/" },
  { name: "Express.js", icon: "/icons/ex.png", link: "https://expressjs.com/" },
  { name: "Node.js", icon: "/icons/node.svg", link: "https://nodejs.org/" },

  // Databases
  { name: "MongoDB", icon: "/icons/mong.svg", link: "https://www.mongodb.com/" },
  { name: "PostgreSQL", icon: "/icons/pos.png", link: "https://www.postgresql.org/" },

  // UI / Frontend tools
  { name: "Tailwind", icon: "/icons/tail.png", link: "https://tailwindcss.com/" },
  { name: "Shadcn", icon: "/icons/shad.png", link: "https://shadcn.dev/" },
  { name: "Flowbite", icon: "/icons/flow.svg", link: "https://flowbite.com/" },
  { name: "Material UI", icon: "/icons/mui.svg", link: "https://mui.com/" },
  { name: "Three.js", icon: "/icons/three.png", link: "https://threejs.org/" },
  { name: "Spline", icon: "/icons/spline.png", link: "https://spline.design/" },

  // Design & other tools
  { name: "Git", icon: "/icons/github.png", link: "https://git-scm.com/" },
  { name: "Vercel", icon: "/icons/verc.png", link: "https://vercel.com/" },
  { name: "Figma", icon: "/icons/figma.png", link: "https://www.figma.com/" },
  { name: "Photoshop", icon: "/icons/photo.png", link: "https://www.adobe.com/products/photoshop.html" },
  { name: "Premiere Pro", icon: "/icons/adobe-premier.png", link: "https://www.adobe.com/products/premiere.html" },
  { name: "After Effects", icon: "/icons/after-effects.png", link: "https://www.adobe.com/products/aftereffects.html" },
  { name: "Blender", icon: "/icons/blender.png", link: "https://www.blender.org/" },
];

export default function Skills() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const gridColor = theme === "dark" ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)";

  return (
    <section
      className="w-full flex justify-center items-center py-12 px-4"
      style={{
        backgroundImage: `repeating-linear-gradient(
          45deg,
          ${gridColor} 0px,
          ${gridColor} 1px,
          transparent 1px,
          transparent 20px
        )`,
      }}
    >
      <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-6 justify-center items-center">
        {skills.map((skill) => (
          <a
            key={skill.name}
            href={skill.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center transition-transform duration-300 hover:scale-110"
            title={skill.name}
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-16 h-16 p-2 bg-white dark:bg-neutral-900 rounded-lg object-contain"
            />
          </a>
        ))}
      </div>
    </section>
  );
}
