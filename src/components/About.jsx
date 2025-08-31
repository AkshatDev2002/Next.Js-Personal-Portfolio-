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
            <li><a href="#about" className="text-blue-600 hover:underline dark:text-blue-400">Top</a></li>
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

          <h2 id="early-life" className="text-1xl font-bold mb-2">Early Life</h2> <br/>
          <p>
            Akshat Dev (born in Begusarai, Bihar, India) is an Indian software engineer and developer unknown for his work in mern-stack and frontend development. 
Raised in an environment shaped by his father’s computer coaching institute, Dev was introduced to technology at an unusually young age. 
By the age of five, while still in primary school, he had access to personal computers and began exploring video games such as *Need for Speed* and *Grand Theft Auto*. 
This early immersion sparked both a passion for gaming and a deep curiosity about computing, laying the foundation for his career in technology.
          </p> <br/>

          <h2 id="education" className="text-1xl font-bold mb-2">Education</h2> <br/>
          <p>
            He pursued his <strong>B.Tech in Computer Science</strong> from the 
            Central Institute of Technology, Kokrajhar, after completing a diploma 
            in Computer Science at the same institute.
          </p> <br/>

          <h2 id="career" className="text-1xl font-bold mb-2">Career</h2> <br/>
          <p>
            Akshat began his career as a <em>freelance web developer</em> during his college years, starting with <strong>Nai Productions</strong>, a film production firm where he developed their official website <a href="https://www.naiproductions.com/" target="_blank">naiproductions.com</a>. 
He later gained international experience as a <em>Full Stack Web Developer & Website Administrator</em> for a UK-based educational firm, where he managed and optimized its WordPress platform. 
Amid a challenging job market, he transitioned into the corporate sector by joining <strong>BxData Tech Solutions</strong>. <br/> 
He is now seeking new opportunities that value innovation, creativity, and technical expertise.

          </p> <br/>

          <h3 id="notable-projects" className="text-0.2xl font-bold mb-2">Notable Projects</h3> <br/>
          <ul>
            <li><a href="/" target="_blank" className="text-blue-600 hover:underline dark:text-blue-400 ">Portfolio Website</a> – A minimalistic and aesthetically crafted personal portfolio website built using Next.js, Framer Motion and theme-aware components (Shadcn/Magic-UI & Flowbite).</li> <br/>
            <li><a href="https://akshatdev2002.github.io/UFP_Generator/" target="_blank" className="text-blue-600 hover:underline dark:text-blue-400 ">UFP Generator</a> – A simple and easy to use  tool for generating Unicode-supported fractions and power symbols, ideal for academic writing built with React Hooks (useState), React Router (useNavigate), and standard browser APIs (Clipboard API).</li> <br/>
            <li> <a href="https://www.naiproductions.com/" target="_blank" className="text-blue-600 hover:underline dark:text-blue-400">NAI Production's official website</a> – built using Next.js and Mern.</li> <br/>
            <li><a href="https://akshatdev2002.github.io/youFetch/" target="_blank" className="text-blue-600 hover:underline dark:text-blue-400 ">youFetch</a> –  A free and simple tool to convert and download YouTube videos into MP3 format built using React.Js and Rapid API.</li>
            
          </ul> <br/>

          <h2 id="skills" className="text-1xl font-bold mb-2">Skills</h2> <br/>
          <p>
            Akshat works with modern web technologies such as JavaScript, React, Next.js, Node.js, Express, and MongoDB. He enjoys building full-stack applications, combining smooth and intuitive front-end experiences with strong and reliable back-end systems. From crafting clean user interfaces to setting up databases and APIs, he is passionate about turning ideas into functional, scalable web solutions.
          </p> <br/>

          <h2 id="personal-life" className="text-1xl font-bold mb-2">Personal Life</h2> <br/>
          <p>
            Outside of technology, Akshat is a devoted Hindu and a follower of Lord Shiva. He is passionate about boxing, fitness, and adventure sports such as trekking. Riding bikes serves as his stress reliever, while learning new skills fuels his curiosity and growth. He believes in consistency, discipline, and lifelong learning. Though he lives a balanced lifestyle, he openly embraces life with its imperfections, describing himself as a light smoker who values both focus and freedom.

Two of his guiding principles are reflected in his favorite quotes: <br/> <br/>"<em>I'm an all-or-nothing kind of person, and when I become interested in something, I give it my all’ and ‘I can’t do something halfway, three-quarters, nine-tenths. If I’m going to do something, I go all the way.</em>"
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
      MERN Stack Developer | Front-end Developer
    </p>
  </div>
  <hr className="my-3 border-gray-300 dark:border-gray-700" />

  {/* Wikipedia-style details */}
  <div className="text-sm space-y-2">
    <p><strong>Born:</strong> Akshat Dev <br/>
    February 5, 2002 (age 23)<br/>
    Begusarai, Bihar, India</p>
    <p><strong>Education:</strong> B.Tech in Computer Science from CIT Kokrajhar, Assam</p>
    <p><strong>Occupation:</strong> Frontend Developer (MERN)</p>
    <p><strong>Years active:</strong> 2023 – present</p>
    <p><strong>Website:</strong> <a href="/" target="_blank" className="text-blue-500 hover:underline">https://akshat-dev-personal-portfolio-peach.vercel.app/</a></p>
    <p><strong>Signature:</strong></p>
    <Image
      src="/images/Signature.jpeg" // Add your signature image
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
