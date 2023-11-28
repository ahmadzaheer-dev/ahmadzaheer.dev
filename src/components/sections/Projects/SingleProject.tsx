import { Project } from "@/types/types";
import Image from "next/image";
import { Github } from "lucide-react";
import { ExternalLink } from "lucide-react";
import { getHeadingStyles } from "@/components/commonUi/utils";

type Props = {
  project: Project;
};

const SingleProject = ({ project }: Props) => {
  // TODO: Have to create View Modal for project with zoom to fit window animation
  // TODO: Have to create hover effect in which the website will be shown inside macbook screen and the website in it will be scrolled gradually.
  return (
    <div className="relative group">
      <Image
        src={project.imageURL}
        alt={project.name + "-img"}
        width="1512"
        height="982"
        style={{ objectFit: "cover", objectPosition: "top center" }}
      />
      <div className="absolute inset-0 bg-primary-green opacity-0 group-hover:opacity-100 duration-500 flex flex-col justify-between p-7 backdrop-blur-sm">
        <div className="text-bgColor">
          <h3 className={getHeadingStyles("h3")}>{project.name}</h3>
        </div>
        <div className="flex justify-between items-center">
          <div>
            {project.technologies.map((technology) => (
              <span
                key={project.name + technology}
                className="p-2 border border-bgColor rounded-full text-bgColor mr-2 text-sm font-bold bg-white"
              >
                #{technology}
              </span>
            ))}
          </div>
          <div className="flex gap-2">
            <div className="border border-white rounded-full bg-white text-bgColor p-2.5 hover:bg-bgColor hover:border-bgColor transition-all hover:text-white">
              <ExternalLink size={18} />
            </div>
            <div className="border border-white rounded-full bg-white text-bgColor p-2.5 hover:bg-bgColor hover:border-bgColor transition-all hover:text-white">
              <Github size={18} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
