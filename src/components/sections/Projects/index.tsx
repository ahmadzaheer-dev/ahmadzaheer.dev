"use client";

import { getHeadingStyles } from "@/components/commonUi/utils";
import { PROJECTS } from "@/constants";
import MaxWidthWrapper from "@/ui/MaxWidthWrapper";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";

const ProjectsRow = dynamic(
  () => import("@/components/sections/Projects/ProjectsRow"),
  { ssr: false }
);

// const getProjectsFormatted = (projects: Project[]) => {
//   const sizes = [3, 4];
//   let sizesIndex = 0;
//   let formattedProjects = [];
//   let startIndex = 0;
//   let endIndex = sizes[sizesIndex];
//   while (endIndex <= projects.length) {
//     formattedProjects.push(projects.slice(startIndex, endIndex));
//     startIndex = endIndex;
//     sizesIndex = Math.abs(1 - (sizesIndex % 2));
//     endIndex = endIndex + sizes[sizesIndex];
//   }
//   return formattedProjects;
// };

const Projects = () => {
  return (
    <div
      id="projects"
      className="py-20 relative overflow-hidden before:content-['<projects>'] before:text-primary-green before:absolute before:w-11/12 before:max-w-screen-xl before:left-1/2 before:-translate-x-1/2 before:top-10 before:italic after:content-['</projects>'] after:text-primary-green after:absolute after:w-11/12 after:max-w-screen-xl after:left-1/2 after:-translate-x-1/2 after:bottom-10 after:italic before:mix-blend-difference after:mix-blend-difference"
    >
      <MaxWidthWrapper>
        <h2
          className={cn(
            getHeadingStyles("h2"),
            "mb-8 sm:mb-12 lg:mb-16 text-center mix-blend-difference"
          )}
        >
          Projects
        </h2>
      </MaxWidthWrapper>
      <div>
        <ProjectsRow projects={PROJECTS.slice(0, 2)} overflowSpace={80} />
      </div>
    </div>
  );
};

export default Projects;
