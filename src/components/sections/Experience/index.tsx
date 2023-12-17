import MaxWidthWrapper from "@/ui/MaxWidthWrapper";
import { EXPERIENCE } from "@/constants";
import SingleExperience from "@/components/sections/Experience/SingleExperience";
import { getHeadingStyles } from "@/ui/utils";
import { cn } from "@/lib/utils";

const Experience = () => {
  return (
    <div
      id="experience"
      className="py-20 relative before:bg-[radial-gradient(circle_at_35%,_var(--tw-gradient-stops))] before:from-dim before:to-transparent before:from-0% before:to-50% before:content-[''] before:absolute before:h-full before:w-full before:top-0 before:left-0 before:-z-10"
    >
      <MaxWidthWrapper className="relative before:content-['<experience>'] before:text-primary-green before:absolute before:w-full before:max-w-screen-xl before:left-1/2 before:-translate-x-1/2 before:-top-10 before:italic after:content-['</experience>'] after:text-primary-green after:absolute after:w-full after:max-w-screen-xl after:left-1/2 after:-translate-x-1/2 after:-bottom-10 after:italic before:mix-blend-difference after:mix-blend-difference">
        <div>
          <h2
            className={cn(
              getHeadingStyles("h2"),
              "text-center mb-8 sm:mb-12 lg:mb-16 mix-blend-difference"
            )}
          >
            Experience
          </h2>
          <div className="max-w-screen-lg mx-auto">
            {EXPERIENCE.map((exp) => (
              <SingleExperience key={exp.companyName} experience={exp} />
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Experience;
