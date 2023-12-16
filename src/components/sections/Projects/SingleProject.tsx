import { Project } from "@/types/types";
import Image from "next/image";
// import { Github } from "lucide-react";
import { ExternalLink } from "lucide-react";
import { getHeadingStyles } from "@/components/commonUi/utils";
import MacOsWrapper from "@/components/sections/Projects/MacOsWrapper";
import Link from "next/link";

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
      <div className="absolute inset-0 bg-primary-green/95 opacity-0 group-hover:opacity-100 duration-500 backdrop-blur-sm flex flex-col gap-10 sm:gap-20 lg:gap-10 justify-between px-7 pt-7">
        <div>
          <div className="text-bgColor">
            <h3 className={getHeadingStyles("h3")}>{project.name}</h3>
          </div>
          <div className="flex justify-between items-center">
            <div>
              {project.technologies.map((technology) => (
                <span
                  key={project.name + technology}
                  className="p-2 border border-bgColor rounded-md text-bgColor mr-2 text-sm font-bold bg-white"
                >
                  #{technology}
                </span>
              ))}
            </div>
            <div className="flex gap-2">
              {project.projectURL && (
                <Link
                  href={project.projectURL}
                  className="border border-bgColor rounded-md bg-white text-bgColor p-2.5 hover:bg-bgColor hover:border-bgColor transition-all hover:text-white"
                  target="_blank"
                >
                  <ExternalLink size={18} />
                </Link>
              )}
              {/* <div className="border border-bgColor rounded-md bg-white text-bgColor p-2.5 hover:bg-bgColor hover:border-bgColor transition-all hover:text-white">
                <Github size={18} />
              </div> */}
            </div>
          </div>
        </div>
        <div className="flex-1 w-11/12 mx-auto">
          <MacOsWrapper project={project} />
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
