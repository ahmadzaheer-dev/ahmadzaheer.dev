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
    <div id="projects" className="py-10 relative overflow-hidden">
      <MaxWidthWrapper>
        <h2
          className={cn(
            getHeadingStyles("h2"),
            "mb-8 sm:mb-12 lg:mb-16 text-center"
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
