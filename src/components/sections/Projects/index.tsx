import ProjectsRow from "@/components/sections/Projects/ProjectsRow";
import { getHeadingStyles } from "@/components/commonUi/utils";
import { cn } from "@/lib/utils";

const Projects = () => {
  return (
    <div id="projects" className="py-10 relative overflow-hidden">
      <h2
        className={cn(
          getHeadingStyles("h2"),
          "text-center mb-8 sm:mb-12 lg:mb-16"
        )}
      >
        Projects
      </h2>
      <ProjectsRow />
    </div>
  );
};

export default Projects;
