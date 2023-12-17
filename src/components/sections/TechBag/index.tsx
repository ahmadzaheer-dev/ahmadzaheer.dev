import MaxWidthWrapper from "@/ui/MaxWidthWrapper";
import { getHeadingStyles } from "@/ui/utils";
import { cn } from "@/lib/utils";
import Items from "@/components/sections/TechBag/Items";

const TechBag = () => {
  return (
    <div
      id="techbag"
      className="py-32 relative overflow-hidden h-[calc(100vh-80px)] bg-dim/60 flex items-center justify-center"
    >
      <MaxWidthWrapper className="relative before:content-['<techbag>'] before:text-primary-green before:absolute before:w-full before:max-w-screen-xl before:left-1/2 before:-translate-x-1/2 before:-top-10 before:italic after:content-['</techbag>'] after:text-primary-green after:absolute after:w-full after:max-w-screen-xl after:left-1/2 after:-translate-x-1/2 after:-bottom-10 after:italic">
        <h2
          className={cn(
            getHeadingStyles("h2"),
            "mb-8 sm:mb-12 lg:mb-10 text-center mix-blend-difference"
          )}
        >
          Skills & Technologies
        </h2>
        <p className="max-w-prose mx-auto text-center mb-10 text-typo-body">
          Here is the list of technologies and tech stack in which I have
          previously worked.
        </p>
        <Items />
      </MaxWidthWrapper>
    </div>
  );
};

export default TechBag;
