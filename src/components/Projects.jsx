import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const projectsData = [
  {
    title: "UFP Generator",
    description:
      "A lightweight web tool to quickly generate Unicode-supported fractions and power symbols.",
    link: "https://akshatdev2002.github.io/UFP_Generator/",
    code: "https://github.com/AkshatDev2002/UFP_Generator",
    previewVideo: "/videos/ufp.mp4",
    technologies: ["React", "JavaScript", "Git"],
  },
  {
    title: "youFetch",
    description:
      "YouFetch is a free and simple tool to convert and download YouTube videos into MP3 format.",
    link: "https://akshatdev2002.github.io/youFetch/",
    code: "https://github.com/AkshatDev2002/youFetch",
    previewVideo: "/videos/you.mp4",
    technologies: ["React", "JavaScript", "Git"],
  },
];

function Projects() {
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="flex flex-col border rounded-md dark:border-gray-700"
          >
            <video
              src={project.previewVideo}
              autoPlay
              muted
              loop
              className="rounded-t-md"
            />
            <div className="flex flex-col gap-3 p-4 grow">
              <h2 className="text-xl font-bold">{project.title}</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-[4px]">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-slate-100 text-gray-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-2 mt-auto">
                <Link href={project.link}>
                  <Button variant="default">View</Button>
                </Link>
                <Link href={project.code}>
                  <Button variant="outline">Code</Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
