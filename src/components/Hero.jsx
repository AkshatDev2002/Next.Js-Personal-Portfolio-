"use client";

import { useEffect, useRef, useState, useContext } from "react";
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
  const [displayText, setDisplayText] = useState("Frontend Developer");
  const roles = [
    "Frontend Developer",
    "MERN Stack Developer",
    "Vibe Coder",
  ];
  const indexRef = useRef(0);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const [isMobile, setIsMobile] = useState(false);
 

  // Cat mode
  const [catActive, setCatActive] = useState(false);
  const catRef = useRef(null);
  const catTimeoutRef = useRef(null);

  // 🔊 Audio
  const audioRef = useRef(null);
  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
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
      catTimeoutRef.current = setTimeout(() => setCatActive(false), 5 * 60 * 1000);
    }
  };

  // Cat movement
  useEffect(() => {
    const moveCat = (e) => {
      if (!catActive || !catRef.current) return;
      let x, y;
      if (e.touches && e.touches.length > 0) {
        x = e.touches[0].pageX;
        y = e.touches[0].pageY;
      } else {
        x = e.pageX;
        y = e.pageY;
      }
      catRef.current.style.left = x + "px";
      catRef.current.style.top = y + "px";
    };

    if (catActive) {
      window.addEventListener("mousemove", moveCat);
      window.addEventListener("touchmove", moveCat);
    } else {
      window.removeEventListener("mousemove", moveCat);
      window.removeEventListener("touchmove", moveCat);
    }

    return () => {
      window.removeEventListener("mousemove", moveCat);
      window.removeEventListener("touchmove", moveCat);
    };
  }, [catActive]);

  // Role rotation
  useEffect(() => {
    const interval = setInterval(() => {
      indexRef.current = (indexRef.current + 1) % roles.length;
      setDisplayText(roles[indexRef.current]);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

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
      <div className="flex flex-wrap justify-center md:justify-start items-center gap-2 text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-100">
        <h1 className="flex items-center gap-2">
          Akshat Dev
          <CheckCircle className="text-blue-500 w-5 sm:w-6 h-5 sm:h-6" />

          {/* 🔊 Name Audio Button */}
          <button
            onClick={playAudio}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition"
            title="Play Name Pronunciation"
          >
            <Volume2 className="w-5 h-5 text-gray-900 dark:text-gray-200" />
          </button>
          <audio ref={audioRef} src="/music/flame.mp3" preload="auto" />
        </h1>

        {/* Cat Mode */}
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                onClick={toggleCatMode}
                className="p-1 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition text-lg"
              >
                🐱
              </button>
            </TooltipTrigger>
            <TooltipContent>Summon Billu</TooltipContent>
          </Tooltip>
        </TooltipProvider>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition"
          title="Toggle Theme"
        >
          {theme === "dark" ? (
            <SunMedium className="h-5 w-5 text-yellow-400" />
          ) : (
            <MoonStar className="h-5 w-5 text-gray-900" />
          )}
        </button>
      </div>

      {/* Cat Lottie */}
      {catActive && (
        <div
          ref={catRef}
          className="pointer-events-none fixed top-0 left-0 z-50"
          style={{ transform: "translate(-50%, -50%)", width: "100px", height: "100px" }}
        >
          <Lottie animationData={catAnimationData} loop />
        </div>
      )}

      {/* Animated Role */}
      <p className="mt-4 text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 transition-all duration-500 ease-in-out">
        {displayText}
      </p>

      {/* Description */}
      <div className="mt-6 max-w-2xl text-gray-600 dark:text-gray-400 space-y-3 text-sm sm:text-base md:text-lg leading-relaxed px-2 sm:px-0">
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
        - Worked with few <a href="/work-experience" className={linkClass}>startups</a> . 💻 <br />
        - Built few <a href="/projects" className={linkClass}>projects</a> that makes sense to me! 🛠️ <br />
        - Possess limited <a href="/skills" className={linkClass}>skill-set</a> but get things done with style. 😎 <br />
        - Graduated from a <a href="/education" className={linkClass}>tier-3 college</a> while learning on my own. 🎓 <br />
        - <a href="/contact" className={linkClass}>Reach out</a> if you want to work together! ✉️
      </div>
    </section>
  );
};

export default Hero;
