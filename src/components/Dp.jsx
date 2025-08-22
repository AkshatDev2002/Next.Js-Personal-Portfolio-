"use client";

import Image from "next/image";
import { ShineBorder } from "@/src/components/magicui/shine-border";
import { useState, useEffect } from "react";

const Dp = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [tapped, setTapped] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleToggle = () => {
    if (isMobile) setTapped((prev) => !prev);
  };

  return (
    <div
      onClick={handleToggle}
      className="relative w-full max-w-[350px] aspect-[4/5] 
                 rounded-4xl overflow-hidden shadow-xl cursor-pointer 
                 border border-gray-700 dark:border-gray-600 
                 bg-black/40 dark:bg-white/5 p-3"
    >
      {/* Black and white base image */}
      <Image
        src="/images/bw.jpg"
        alt="Akshat Dev BW"
        fill
        className="object-cover grayscale transition-opacity duration-1000 rounded-xl"
      />

      {/* Colored overlay image */}
      <Image
        src="/images/clr.jpg"
        alt="Akshat Dev Color"
        fill
        className={`object-cover absolute top-0 left-0 transition-opacity duration-500 rounded-xl
          ${tapped ? "opacity-100" : "opacity-0"} 
          md:hover:opacity-100`}
      />

      {/* Shine effect on border */}
      <ShineBorder />
    </div>
  );
};

export default Dp;
