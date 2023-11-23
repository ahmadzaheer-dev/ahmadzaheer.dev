import { Project } from "@/types";
import Image from "next/image";
import { Github } from "lucide-react";
import { ExternalLink } from "lucide-react";
import { getHeadingStyles } from "@/components/commonUi/utils";

type Props = {
  project: Project;
};

const SingleProject = ({ project }: Props) => {
  // TODO: Have to create View Modal for project with zoom to fit window animation
  return (
    <div className="relative group">
      <Image
        src={project.imageURL}
        alt={project.name + "-img"}
        width="1512"
        height="982"
        style={{ objectFit: "cover", objectPosition: "top center" }}
      />
      <Image
        src={project.overlayImageURL}
        alt={project.name + "-overlay-img"}
        fill
        style={{ objectFit: "cover", objectPosition: "top center" }}
        className="opacity-0 group-hover:opacity-100 transition-all duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-purpleHighlight/40 opacity-0 group-hover:opacity-100 duration-500 flex flex-col justify-between p-7 backdrop-blur-sm">
        <div>
          <h3 className={getHeadingStyles("h3")}>{project.name}</h3>
          <p className="text-sm">{project.description}</p>
        </div>
        <div className="flex justify-between">
          <div>
            {project.technologies.map((technology) => (
              <span
                key={project.name + technology}
                className="p-2 bg-primary-light/60 border border-primary rounded-full text-white mr-2 text-sm font-bold"
              >
                #{technology}
              </span>
            ))}
          </div>
          <div className="flex gap-2">
            <div className="border border-typo-body rounded-full bg-typo-body text-gray-900 p-2.5 hover:bg-primary-light hover:text-typo-body hover:border-primary-light transition-all">
              <ExternalLink size={18} />
            </div>
            <div className="border border-typo-body rounded-full bg-typo-body text-gray-900 p-2.5 hover:bg-primary-light hover:text-typo-body hover:border-primary-light transition-all">
              <Github size={18} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
