import { Experience } from "@/types/types";
import { getDateFormatted } from "@/lib/utils";
import { getHeadingStyles } from "@/components/commonUi/utils";
import { cn } from "@/lib/utils";

type Props = {
  experience: Experience;
};

const getTimeString = (experience: Experience) => {
  const startDate = new Date(experience.startDate);
  const endDate =
    typeof experience.endDate === "string"
      ? new Date()
      : new Date(experience.endDate);

  const totalMonths =
    (endDate.getFullYear() - startDate.getFullYear()) * 12 +
    (endDate.getMonth() - startDate.getMonth());

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  if (!years) {
    return `${months} mos`;
  }
  if (years > 1) {
    return `${years} yrs${months > 0 ? ` ${months} mos` : ""}`;
  }

  return `${years} yr${months > 0 ? ` ${months} mos` : ""}`;
};

const SingleExperience = ({ experience }: Props) => {
  return (
    <div className="relative p-4 sm:p6 lg:p-8 mb-10 rounded-xl bg-dim/60 flex transition-all border border-dim">
      <div>
        <div className="mb-3 uppercase basis-1/6 pt-2 text-typo-body hidden sm:inline">
          {`${getDateFormatted(experience.startDate)} - ${
            typeof experience.endDate === "string"
              ? experience.endDate
              : getDateFormatted(experience.endDate)
          }`}
        </div>
        <div className="text-sm">{getTimeString(experience)}</div>
      </div>
      <div className="basis-5/6 flex-1 px-3">
        <h3
          className={cn(
            getHeadingStyles("h3"),
            "text-primary-green transition-all mix-blend-difference"
          )}
        >
          {experience.position}
        </h3>
        <h4 className="text-base lg:text-lg mb-2 font-semibold">
          {experience.companyName} - {experience.roleType}
        </h4>
        <div className="text-sm mb-3 uppercase text-typo-body sm:hidden">
          {`${getDateFormatted(experience.startDate)} - ${
            typeof experience.endDate === "string"
              ? experience.endDate
              : getDateFormatted(experience.endDate)
          }`}
        </div>

        <p className="mb-3 text-typo-body">{experience.description}</p>
        <ul className="pl-3 mb-5">
          {experience.points.map((point) => (
            <li key={point.title} className="mb-1.5 list-disc">
              {point.title && (
                <div className="font-bold block">{point.title}: </div>
              )}
              <p className="text-typo-body">{point.description}</p>
            </li>
          ))}
        </ul>
        <div className="flex gap-1.5 flex-wrap">
          {experience.technologies.map((technology) => (
            <div
              key={technology}
              className="py-1.5 px-3 bg-primary-green/20 text-primary-green rounded-md"
            >
              #{technology}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleExperience;
