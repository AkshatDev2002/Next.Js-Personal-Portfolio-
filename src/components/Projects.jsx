import Link from "next/link";
import { Button } from "./ui/button";

const projectsData = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio built with Next.js, Framer Motion, and theme-aware UI components (Shadcn/Magic UI & Flowbite).",
    link: "https://portfolio-akshat-dev.vercel.app/",
    code: "https://github.com/AkshatDev2002/portfolio",
    previewVideo: "/videos/portfolio.mp4",
    technologies: ["Next.js", "Shadcn", "Magic UI", "Flowbite", "Vercel"],
  },
  {
    title: "UFP Generator",
    description:
      "A tool for generating Unicode-supported fractions and power symbols. Built with React Hooks, React Router, and Clipboard API.",
    link: "https://akshatdev2002.github.io/UFP_Generator/",
    code: "https://github.com/AkshatDev2002/UFP_Generator",
    previewVideo: "/videos/ufp.mp4",
    technologies: ["React", "JavaScript", "Git"],
  },
  {
    title: "NAI Production",
    description:
      "A freelance project: NAI Production's official website built using Next.js and MERN stack.",
    link: "https://www.naiproductions.com/",
    code: null,
    previewVideo: "/videos/nai.mp4",
    technologies: ["React", "Next.js", "Google ReCaptcha V3"],
  },
  {
    title: "youFetch",
    description:
      "A tool to convert and download YouTube videos into MP3 format. Built with React and Rapid API.",
    link: "https://akshatdev2002.github.io/youFetch/",
    code: "https://github.com/AkshatDev2002/youFetch",
    previewVideo: "/videos/you.mp4",
    technologies: ["React", "JavaScript", "Git"],
  },
];

function Projects() {
  return (
    <div className="w-full flex flex-col gap-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="flex flex-col border rounded-md overflow-hidden dark:border-gray-700"
          >
            <video
              src={project.previewVideo}
              autoPlay
              muted
              loop
              className="rounded-t-md"
            />
            <div className="flex flex-col gap-3 p-4 flex-1">
              <h2 className="text-xl font-semibold">{project.title}</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-slate-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-2 mt-auto">
                <Link href={project.link} target="_blank">
                  <Button variant="default">View</Button>
                </Link>
                {project.code ? (
                  <Link href={project.code} target="_blank">
                    <Button variant="outline">Code</Button>
                  </Link>
                ) : (
                  <Button
                    variant="outline"
                    onClick={() =>
                      alert("This repository is private and not publicly available.")
                    }
                  >
                    Code
                  </Button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
