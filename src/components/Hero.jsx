"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { CheckCircle, SunMedium, MoonStar, Volume2 } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/src/components/ui/tooltip";
import Lottie from "lottie-react";
import catAnimationData from "@/public/lottie/cat.json";

const Hero = () => {
  const roles = ["Frontend Developer", "MERN Stack Developer", "Vibe Coder"];
  const [displayText, setDisplayText] = useState(roles[0]);
  const indexRef = useRef(0);

  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const [isMobile, setIsMobile] = useState(false);

  const [catActive, setCatActive] = useState(false);
  const catRef = useRef(null);
  const catTimeoutRef = useRef(null);

  const audioRef = useRef(null);
  const playAudio = () => {
    audioRef.current?.play().catch((err) =>
      console.error("Audio play failed:", err)
    );
  };

  useEffect(() => {
    setMounted(true);
    setIsMobile("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  const toggleCatMode = () => {
    if (catActive) {
      setCatActive(false);
      clearTimeout(catTimeoutRef.current);
    } else {
      setCatActive(true);
      catTimeoutRef.current = setTimeout(
        () => setCatActive(false),
        5 * 60 * 1000
      );
    }
  };

  useEffect(() => {
    const moveCat = (e) => {
      if (!catActive || !catRef.current) return;
      const { pageX: x, pageY: y } =
        e.touches?.[0] || { pageX: e.pageX, pageY: e.pageY };
      catRef.current.style.left = `${x}px`;
      catRef.current.style.top = `${y}px`;
    };

    if (catActive) {
      window.addEventListener("mousemove", moveCat);
      window.addEventListener("touchmove", moveCat);
    }
    return () => {
      window.removeEventListener("mousemove", moveCat);
      window.removeEventListener("touchmove", moveCat);
    };
  }, [catActive]);

  useEffect(() => {
    const interval = setInterval(() => {
      indexRef.current = (indexRef.current + 1) % roles.length;
      setDisplayText(roles[indexRef.current]);
    }, 1500);
    return () => clearInterval(interval);
  }, [roles]);

  const gridColor =
    mounted && theme === "dark"
      ? "rgba(255,255,255,0.08)"
      : "rgba(0,0,0,0.08)";

  if (!mounted) return null;

  const linkClass = `underline transition ${
    isMobile ? "text-red-400" : "hover:text-red-400"
  }`;

  return (
    <section
      className={`relative flex flex-col items-center md:items-start text-center md:text-left px-4 sm:px-6 md:px-16 py-12 sm:py-16 ${
        catActive ? "cursor-none" : ""
      }`}
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
      <div className="flex flex-wrap items-center justify-center gap-2 text-3xl font-bold text-zinc-900 dark:text-zinc-100 sm:text-4xl md:text-5xl md:justify-start">
        <h1 className="flex items-center gap-2">
          Akshat Dev
          <CheckCircle className="h-5 w-5 text-blue-500 sm:h-6 sm:w-6" />

          <button
            onClick={playAudio}
            aria-label="Play name pronunciation"
            className="rounded-full bg-gray-200 p-2 transition hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <Volume2 className="h-5 w-5 text-gray-900 dark:text-gray-200" />
          </button>
          <audio ref={audioRef} src="/music/Flame.mp3" preload="auto" />
        </h1>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                onClick={toggleCatMode}
                aria-label="Toggle cat mode"
                className="rounded-full bg-gray-200 p-1 text-lg transition hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                🐱
              </button>
            </TooltipTrigger>
            <TooltipContent>Summon Billu</TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="rounded-full bg-gray-200 p-2 transition hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          {theme === "dark" ? (
            <SunMedium className="h-5 w-5 text-yellow-400" />
          ) : (
            <MoonStar className="h-5 w-5 text-gray-900" />
          )}
        </button>
      </div>

      {catActive && (
        <div
          ref={catRef}
          className="pointer-events-none fixed top-0 left-0 z-50 h-[100px] w-[100px] -translate-x-1/2 -translate-y-1/2"
        >
          <Lottie animationData={catAnimationData} loop />
        </div>
      )}

      <p className="mt-4 text-lg text-gray-700 transition-all duration-500 ease-in-out dark:text-gray-300 sm:text-xl md:text-2xl">
        {displayText}
      </p>

      <div className="mt-6 max-w-2xl space-y-3 px-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400 sm:px-0 sm:text-base md:text-lg">
        - Learning GenAI… or maybe it’s learning me. ☁️ <br />
        - Currently building{" "}
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <a className={linkClass}>GLPapers Pro</a>
            </TooltipTrigger>
            <TooltipContent>
              A platform offering custom-designed 11+ GL mock papers for UK
              tutoring centres. Project under development — stay tuned!
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        . 🦥 <br />
        - <a href="/about" className={linkClass}>Wikipedia</a> me. 💀 <br />
        - Worked with few <a href="/work-experience" className={linkClass}>startups</a>. 💻 <br />
        - Built few <a href="/projects" className={linkClass}>projects</a> that make sense to me. 🛠️ <br />
        - Possess limited <a href="/skills" className={linkClass}>skill-set</a> but get things done with style. 😎 <br />
        - Graduated from a <a href="/education" className={linkClass}>tier-3 college</a> while learning on my own. 🎓 <br />
        - <a href="/contact" className={linkClass}>Reach out</a> if you want to work together! ✉️
      </div>
    </section>
  );
};

export default Hero;
