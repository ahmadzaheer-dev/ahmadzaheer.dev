"use client";

import { useState } from "react";
import SingleProject from "@/components/sections/Projects/SingleProject";
import { useWindowDimensions } from "@/hooks";
import { Project } from "@/types/types";
import { widthGreaterThanBreakpoint } from "@/lib/utils";

type Props = {
  projects: Project[];
  overflowSpace?: number;
};

type Action = "left" | "none" | "right";

const getActionFromIndex = (index: number, noOfElements: number): Action => {
  if (index === 0) return "right";
  if (index === noOfElements - 1) return "left";
  return "none";
};

const ProjectsRow = ({ projects, overflowSpace = 80 }: Props) => {
  const [currentAction, setCurrentAction] = useState<Action>("none");

  const { width } = useWindowDimensions();

  const actionsToTranslateMap = {
    right: overflowSpace,
    none: 0,
    left: -overflowSpace,
  };

  const isWidthGreaterThanXl = widthGreaterThanBreakpoint(width, "xl");

  const handleMouseEnter = (index: number) => {
    if (isWidthGreaterThanXl) {
      setCurrentAction(getActionFromIndex(index, projects.length));
    }
  };

  return (
    <div className="w-full relative mb-1 last:mb-0">
      <div
        style={{
          marginLeft: isWidthGreaterThanXl ? -overflowSpace : 0,
          marginRight: isWidthGreaterThanXl ? -overflowSpace : 0,
        }}
        className="duration-300 transition-all px-1.5"
      >
        <div className="flex flex-col xl:flex-row gap-1.5">
          {projects.map((project, index) => (
            <div
              key={project.name}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => setCurrentAction("none")}
              style={{
                transform: `translateX(${actionsToTranslateMap[currentAction]}px)`,
              }}
              className="flex-1 bg-cover rounded-2xl overflow-hidden border border-dim cursor-pointer transition-all duration-500 ease-in-out"
            >
              <SingleProject project={project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsRow;
