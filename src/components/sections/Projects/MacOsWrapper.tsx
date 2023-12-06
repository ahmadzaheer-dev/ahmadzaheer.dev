import { Project } from "@/types/types";
import Image from "next/image";

type Props = {
  project: Project;
};

const MacOsWrapper = ({ project }: Props) => {
  return (
    <div className="relative rounded-t-xl px-3 pt-3 sm:px-5 sm:pt-5 lg:px-8 lg:pt-8 border-[6px] border-b-0 border-dim h-full bg-[url('/images/macbook-wallpaper.webp')] bg-cover">
      <div className="rounded-t-lg flex flex-col border border-b-0 border-gray-600 h-full overflow-hidden">
        <div className="flex items-center bg-dim">
          <div className="basis-1/6 flex gap-1.5 p-2">
            <div className="h-2 w-2 bg-red-500 flex items-center justify-center rounded-full"></div>
            <div className="h-2 w-2 bg-yellow-500 flex items-center justify-center rounded-full"></div>
            <div className="h-2 w-2 bg-green-500 flex items-center justify-center rounded-full"></div>
          </div>
          <div className="basis-4/6 text-center text-xs">{project.name}</div>
          <div className="basis-1/6"></div>
        </div>
        <div className="flex-1 relative">
          <Image
            src={project.imageURL}
            alt={project.name}
            fill
            style={{ objectFit: "cover", objectPosition: "top center" }}
          />
        </div>
      </div>
      <div className="w-2/12 h-2 bg-dim absolute top-0 left-1/2 -translate-x-1/2 rounded-b-[3px]"></div>
    </div>
  );
};

export default MacOsWrapper;
