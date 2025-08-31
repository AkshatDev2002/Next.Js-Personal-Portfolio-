"use client";

import Image from "next/image";
import { ShineBorder } from "@/src/components/magicui/shine-border";
import { useState, useEffect } from "react";

const Dp = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [tapped, setTapped] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleToggle = () => {
    if (isMobile) setTapped((prev) => !prev);
  };

  return (
    <div
      onClick={handleToggle}
      role={isMobile ? "button" : undefined}
      className="relative w-full max-w-[350px] aspect-[4/5] rounded-4xl 
                 overflow-hidden shadow-xl cursor-pointer border border-gray-700 
                 dark:border-gray-600 bg-black/40 dark:bg-white/5 p-3"
    >
      <Image
        src="/images/bw.jpg"
        alt="Black and white portrait of Akshat Dev"
        fill
        className="object-cover grayscale rounded-xl transition-opacity duration-1000"
      />

      <Image
        src="/images/clr.jpg"
        alt="Color portrait of Akshat Dev"
        fill
        className={`absolute top-0 left-0 object-cover rounded-xl transition-opacity duration-500
          ${tapped ? "opacity-100" : "opacity-0"} md:hover:opacity-100`}
      />

      <ShineBorder />
    </div>
  );
};

export default Dp;
