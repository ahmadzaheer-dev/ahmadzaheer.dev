import { Experience } from "@/types";
import { getDateFormatted } from "@/lib/utils";
import { getHeadingStyles } from "@/components/commonUi/utils";
import { cn } from "@/lib/utils";

type Props = {
  experience: Experience;
};

const SingleExperience = ({ experience }: Props) => {
  return (
    <div className="relative p-4 sm:p6 lg:p-8 mb-10 rounded-xl bg-dim/60">
      <h3
        className={cn(
          getHeadingStyles("h3"),
          "text-transparent bg-gradient-to-r bg-clip-text from-primary to-primary-light"
        )}
      >
        {experience.position}
      </h3>
      <h4 className="text-base lg:text-lg mb-2 font-semibold">
        {experience.companyName} - {experience.roleType}
      </h4>
      <div className="text-sm mb-3 font-bold">
        {`${getDateFormatted(experience.startDate)} - ${getDateFormatted(
          experience.endDate
        )}`}
      </div>
      <p className="text-sm mb-3">{experience.description}</p>
      <ul className="text-sm pl-3">
        {experience.points.map((point) => (
          <li key={point.title} className="mb-1.5 list-disc">
            {point.title && (
              <div className="font-bold block">{point.title}: </div>
            )}
            <p>{point.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SingleExperience;
