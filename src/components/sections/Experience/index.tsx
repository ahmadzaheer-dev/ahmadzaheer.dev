import MaxWidthWrapper from "@/ui/MaxWidthWrapper";
import { EXPERIENCE } from "@/constants";
import SingleExperience from "@/components/sections/Experience/SingleExperience";
import { getHeadingStyles } from "@/ui/utils";
import { cn } from "@/lib/utils";

const Experience = () => {
  return (
    <div
      id="experience"
      className="py-10 relative before:bg-[radial-gradient(circle_at_35%,_var(--tw-gradient-stops))] before:from-purpleHighlight/30 before:to-transparent before:from-0% before:to-50% before:content-[''] before:absolute before:h-full before:w-full before:top-0 before:left-0 before:-z-10"
    >
      <MaxWidthWrapper>
        <div>
          <h2
            className={cn(
              getHeadingStyles("h2"),
              "text-center mb-8 sm:mb-12 lg:mb-16"
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
