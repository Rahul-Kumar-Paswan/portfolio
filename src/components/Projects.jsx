// src/components/Projects.jsx
import { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import projectsData from "../data/projects"; // now importing from data file

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const projectsToShow = showAll ? projectsData : projectsData.slice(0, 3);

  return (
    <section id="projects" className="py-20 px-6 md:px-12 max-w-6xl mx-auto">
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-mono text-[#00ffea] mb-12 text-center">
        $ ./projects
      </h2>

      {/* Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projectsToShow.map((project, idx) => (
          <div
            key={idx}
            className="bg-lightbg dark:bg-darkbg2 p-6 rounded-xl shadow-lg hover:shadow-accent/30 transition flex flex-col"
          >
            {/* Title */}
            <h3 className="text-xl font-bold text-accent mb-2">
              {project.title}
            </h3>

            {/* Image */}
            {project.image && (
              <img
                src={project.image}
                alt={`${project.title} thumbnail`}
                className="w-full h-40 object-cover rounded-lg mb-3"
                loading="lazy"
              />
            )}

            {/* Description */}
            <p className="text-gray-700 dark:text-gray-300 flex-1">
              {project.description}
            </p>

            {/* Tech Stack */}
            <ul className="flex flex-wrap gap-2 mt-3">
              {project.tech.map((t, i) => (
                <li
                  key={i}
                  className="text-xs px-2 py-1 bg-accent/10 text-accent rounded-full"
                >
                  {t}
                </li>
              ))}
            </ul>

            {/* Links */}
            <div className="flex gap-4 mt-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-accent transition"
                >
                  <FaGithub /> Code
                </a>
              )}
              {project.Demo && (
                <a
                  href={project.Demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-accent transition"
                >
                  <FaExternalLinkAlt /> Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* See All Button */}
      {!showAll && projectsData.length > 3 && (
        <div className="mt-10 flex justify-center">
          <button
            onClick={() => setShowAll(true)}
            className="px-6 py-2 rounded-lg bg-accent text-white font-medium hover:bg-accent/80 transition"
          >
            See All Projects
          </button>
        </div>
      )}
    </section>
  );
}
