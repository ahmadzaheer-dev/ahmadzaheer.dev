"use client";

import { useState } from "react";
import { PROJECTS } from "@/constants";
import Project from "@/components/sections/Projects/SingleProject";
import { useWindowDimensions } from "@/hooks";
import { BREAK_POINTS } from "@/constants";

type Action = "left" | "none" | "right";
const actionsArray = ["right", "none", "left"] as const;
const actionsToTranslateMap = {
  right: 80,
  none: 0,
  left: -80,
};

const ProjectsRow = () => {
  const [currentAction, setCurrentAction] = useState<Action>("none");

  const { width } = useWindowDimensions();

  const handleMouseEnter = (index: number) => {
    if (width && width > BREAK_POINTS["lg"])
      setCurrentAction(actionsArray[index]);
  };

  return (
    <div className="w-full relative mb-1">
      <div className="lg:-mx-20 duration-300 transition-all px-1.5">
        <div className="flex flex-col lg:flex-row gap-1.5">
          {PROJECTS.map((project, index) => (
            <div
              key={project.name}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => setCurrentAction("none")}
              style={{
                transform: `translateX(${actionsToTranslateMap[currentAction]}px)`,
              }}
              className="flex-1 bg-cover rounded-2xl overflow-hidden border border-dim cursor-pointer transition-all duration-500 ease-in-out"
            >
              <Project project={project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsRow;
