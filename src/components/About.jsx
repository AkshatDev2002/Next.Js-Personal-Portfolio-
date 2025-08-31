"use client";

import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-row w-full max-w-7xl mx-auto p-6 gap-8">
        
        <aside className="w-1/5 hidden md:block sticky top-20 h-fit border dark:border-gray-700 rounded-lg p-4 bg-gray-50 dark:bg-gray-900">
          <h3 className="font-semibold mb-2">Contents</h3>
          <ul className="text-sm space-y-1">
            <li><a href="#about" className="text-blue-600 hover:underline dark:text-blue-400">Top</a></li>
            <li><a href="#early-life" className="text-blue-600 hover:underline dark:text-blue-400">Early Life</a></li>
            <li><a href="#education" className="text-blue-600 hover:underline dark:text-blue-400">Education</a></li>
            <li><a href="#career" className="text-blue-600 hover:underline dark:text-blue-400">Career</a></li>
            <li className="ml-4"><a href="#notable-projects" className="text-blue-600 hover:underline dark:text-blue-400">Notable Projects</a></li>
            <li><a href="#skills" className="text-blue-600 hover:underline dark:text-blue-400">Skills</a></li>
            <li><a href="#personal-life" className="text-blue-600 hover:underline dark:text-blue-400">Personal Life</a></li>
          </ul>
        </aside>

        <main className="flex-1 prose dark:prose-invert max-w-none" style={{ fontFamily: "Georgia, serif" }}>
          <h1 id="about" className="text-4xl font-bold mb-6">Akshat Dev</h1>

          <h2 id="early-life" className="text-xl font-bold mb-2">Early Life</h2>
          <p>
            Akshat Dev (born in Begusarai, Bihar, India) is an Indian software engineer and developer known for his work in MERN-stack and frontend development. Raised in an environment shaped by his father’s computer coaching institute, he was introduced to technology at an unusually young age. By the age of five, he was already exploring video games such as <em>Need for Speed</em> and <em>Grand Theft Auto</em>. This early exposure sparked a lifelong curiosity in computing and shaped his career path.
          </p>

          <h2 id="education" className="text-xl font-bold mb-2">Education</h2>
          <p>
            He earned his <strong>B.Tech in Computer Science</strong> from the Central Institute of Technology, Kokrajhar, after completing a diploma in Computer Science at the same institute.
          </p>

          <h2 id="career" className="text-xl font-bold mb-2">Career</h2>
          <p>
            Akshat began his career as a freelance web developer during college, starting with <strong>Nai Productions</strong>, where he built their official website <a href="https://www.naiproductions.com/" target="_blank">naiproductions.com</a>. He later worked as a <em>Full Stack Web Developer & Website Administrator</em> for a UK-based educational firm, managing and optimizing its WordPress platform. More recently, he transitioned into the corporate sector with <strong>BxData Tech Solutions</strong>. He is currently seeking opportunities that value innovation, creativity, and technical expertise.
          </p>

          <h3 id="notable-projects" className="text-lg font-bold mb-2">Notable Projects</h3>
          <ul>
            <li>
              <a href="/" target="_blank" className="text-blue-600 hover:underline dark:text-blue-400">
                Portfolio Website
              </a> – A personal portfolio built with Next.js, Framer Motion, and theme-aware UI components.
            </li>
            <li>
              <a href="https://akshatdev2002.github.io/UFP_Generator/" target="_blank" className="text-blue-600 hover:underline dark:text-blue-400">
                UFP Generator
              </a> – A tool for generating Unicode fractions and power symbols, built with React Hooks and browser APIs.
            </li>
            <li>
              <a href="https://www.naiproductions.com/" target="_blank" className="text-blue-600 hover:underline dark:text-blue-400">
                NAI Productions Official Website
              </a> – Built using Next.js and the MERN stack.
            </li>
            <li>
              <a href="https://akshatdev2002.github.io/youFetch/" target="_blank" className="text-blue-600 hover:underline dark:text-blue-400">
                youFetch
              </a> – A free tool to convert and download YouTube videos into MP3 format, built with React.js and Rapid API.
            </li>
          </ul>

          <h2 id="skills" className="text-xl font-bold mb-2">Skills</h2>
          <p>
            Akshat specializes in JavaScript, React, Next.js, Node.js, Express, and MongoDB. He enjoys building full-stack applications that balance seamless front-end experiences with robust back-end systems. From designing UIs to implementing databases and APIs, he is passionate about turning ideas into scalable web solutions.
          </p>

          <h2 id="personal-life" className="text-xl font-bold mb-2">Personal Life</h2>
          <p>
            Outside of technology, Akshat is a devoted Hindu and follower of Lord Shiva. He enjoys boxing, fitness, trekking, and bike riding. He values consistency, discipline, and lifelong learning, while embracing life’s imperfections. 
          </p>
          <blockquote>
            <em>
              "I'm an all-or-nothing kind of person, and when I become interested in something, I give it my all. I can’t do something halfway, three-quarters, nine-tenths. If I’m going to do something, I go all the way."
            </em>
          </blockquote>
        </main>

        <aside className="w-1/4 hidden lg:block sticky top-20 h-fit border dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900 p-4">
          <div className="flex flex-col items-center">
            <Image
              src="/images/clr.jpg"
              alt="Akshat Dev"
              width={180}
              height={180}
              className="rounded-lg border dark:border-gray-600"
            />
            <h3 className="text-lg font-semibold mt-4">Akshat Dev</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              MERN Stack Developer | Frontend Developer
            </p>
          </div>
          <hr className="my-3 border-gray-300 dark:border-gray-700" />
          <div className="text-sm space-y-2">
            <p>
              <strong>Born:</strong> Akshat Dev <br />
              February 5, 2002 (age 23) <br />
              Begusarai, Bihar, India
            </p>
            <p>
              <strong>Education:</strong> B.Tech in Computer Science, CIT Kokrajhar
            </p>
            <p>
              <strong>Occupation:</strong> Frontend Developer (MERN)
            </p>
            <p>
              <strong>Years active:</strong> 2023 – present
            </p>
            <p>
              <strong>Website:</strong>{" "}
              <a href="/" target="_blank" className="text-blue-500 hover:underline">
                akshat-dev-personal-portfolio-peach.vercel.app
              </a>
            </p>
            <p><strong>Signature:</strong></p>
            <Image
              src="/images/Signature.jpeg"
              alt="Signature"
              width={120}
              height={50}
              className="mt-1"
            />
          </div>
        </aside>
      </div>
    </div>
  );
}
