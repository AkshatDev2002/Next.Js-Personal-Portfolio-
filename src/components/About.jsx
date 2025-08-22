"use client";

import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-row w-full max-w-7xl mx-auto p-6 gap-8">
        
        {/* Sidebar - Static Table of Contents */}
        <aside className="w-1/5 hidden md:block sticky top-20 h-fit border dark:border-gray-700 rounded-lg p-4 bg-gray-50 dark:bg-gray-900">
          <h3 className="font-semibold mb-2">Contents</h3>
          <ul className="text-sm space-y-1">
            <li><a href="#about" className="text-blue-600 hover:underline dark:text-blue-400">About</a></li>
            <li><a href="#early-life" className="text-blue-600 hover:underline dark:text-blue-400">Early Life</a></li>
            <li><a href="#education" className="text-blue-600 hover:underline dark:text-blue-400">Education</a></li>
            <li><a href="#career" className="text-blue-600 hover:underline dark:text-blue-400">Career</a></li>
            <li className="ml-4"><a href="#notable-projects" className="text-blue-600 hover:underline dark:text-blue-400">Notable Projects</a></li>
            <li><a href="#skills" className="text-blue-600 hover:underline dark:text-blue-400">Skills</a></li>
            <li><a href="#personal-life" className="text-blue-600 hover:underline dark:text-blue-400">Personal Life</a></li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className="flex-1 prose dark:prose-invert max-w-none" style={{ fontFamily: "Georgia, serif" }}>
          <h1 id="about" className="text-4xl font-bold mb-6">Akshat Dev</h1>

          <h2 id="early-life">Early Life</h2> <br/>
          <p>
            Akshat Dev was born with a curiosity for computers and problem-solving. 
            From an early age, he showed interest in technology, coding, and system design.
          </p> <br/>

          <h2 id="education">Education</h2> <br/>
          <p>
            He pursued his <strong>B.Tech in Computer Science</strong> from the 
            Central Institute of Technology, Kokrajhar, after completing a diploma 
            in Computer Science at the same institute.
          </p> <br/>

          <h2 id="career">Career</h2> <br/>
          <p>
            Akshat started as a <em>freelance web developer</em> during his college years. 
            Later, he specialized as a <strong>Data Engineer (Ab Initio)</strong> 
            while continuing to grow his skills in the MERN stack.
          </p> <br/>

          <h3 id="notable-projects">Notable Projects</h3> <br/>
          <ul>
            <li>UFP Generator – an automation project.</li>
            <li>youFetch – a full-stack web application with media features.</li>
            <li>Portfolio Website – built using Next.js and Shadcn/UI.</li>
          </ul> <br/>

          <h2 id="skills">Skills</h2> <br/>
          <p>
            Akshat works with a diverse tech stack: Ab Initio, Unix/Linux, SQL, 
            MongoDB, JavaScript, React, Next.js, Node.js, Express, and more.
          </p> <br/>

          <h2 id="personal-life">Personal Life</h2> <br/>
          <p>
            Outside of tech, Akshat is passionate about boxing, fitness, and learning 
            new skills. He believes in consistency, experimentation, and lifelong learning.
          </p> 
        </main>

        {/* Infobox - Wikipedia Style */}
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
              Data Engineer | MERN Stack Dev
            </p>
          </div>
          <hr className="my-3 border-gray-300 dark:border-gray-700" />
          <div className="text-sm space-y-2">
            <p><strong>Born:</strong> India</p>
            <p><strong>Education:</strong> B.Tech Computer Science (CIT Kokrajhar)</p>
            <p><strong>Occupation:</strong> Data Engineer</p>
            <p><strong>Skills:</strong> Ab Initio, Unix/Linux, MERN, SQL</p>
          </div>
        </aside>
      </div>
    </div>
  );
}
