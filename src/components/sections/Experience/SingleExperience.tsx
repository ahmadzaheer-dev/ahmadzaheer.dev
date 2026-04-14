"use client";

import { useState } from "react";
import { Experience } from "@/types/types";
import { getDateFormatted } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

type Props = {
  experience: Experience;
  hash: string;
  isHead: boolean;
};

const getTimeString = (experience: Experience) => {
  const startDate = new Date(experience.startDate);
  const endDate =
    typeof experience.endDate === "string" ? new Date() : new Date(experience.endDate);
  const diffDays = Math.ceil(Math.abs(endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
  const years = Math.floor(diffDays / 365);
  const months = Math.floor((diffDays % 365) / 30);
  if (!years) return `${months} mos`;
  if (years > 1) return `${years} yrs${months > 0 ? ` ${months} mos` : ""}`;
  return `${years} yr${months > 0 ? ` ${months} mos` : ""}`;
};

const SingleExperience = ({ experience, hash, isHead }: Props) => {
  const [expanded, setExpanded] = useState(false);

  const dateStr = `${getDateFormatted(experience.startDate)} – ${
    typeof experience.endDate === "string"
      ? experience.endDate
      : getDateFormatted(experience.endDate)
  }`;

  return (
    <div className="mb-1 group/entry">
      {/* Commit line */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full text-left flex items-start gap-3 px-2 py-1.5 rounded hover:bg-dim/60 transition-colors cursor-pointer"
      >
        <ChevronRight
          size={14}
          className={`mt-0.5 shrink-0 text-typo-body transition-transform duration-200 ${expanded ? "rotate-90" : ""}`}
        />
        <span className="text-primary-green shrink-0 select-none">{hash}</span>
        {isHead && (
          <span className="text-primary-yellow shrink-0 hidden sm:inline">
            (HEAD -&gt; main)
          </span>
        )}
        <span className="text-typo group-hover/entry:text-white transition-colors truncate">
          {experience.position}
        </span>
        <span className="text-typo-body shrink-0 hidden md:inline ml-auto pr-1">
          {getTimeString(experience)}
        </span>
      </button>

      {/* Metadata line (always visible) */}
      <div className="pl-[3.75rem] text-typo-body text-sm mb-1 font-mono">
        {experience.companyName}
        <span className="mx-2 opacity-40">·</span>
        {dateStr}
      </div>

      {/* Expanded: git show style */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          expanded ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="ml-2 mt-2 mb-4 border-l-2 border-primary-green/20 pl-4 text-sm">
          {/* Commit header */}
          <div className="mb-3">
            <span className="text-primary-yellow">commit </span>
            <span className="text-primary-green">{hash}f4a9e2c8b1d3</span>
          </div>
          <div className="text-typo-body mb-0.5">
            <span className="opacity-60 w-20 inline-block">Role:</span>
            <span className="text-typo">{experience.position}</span>
          </div>
          <div className="text-typo-body mb-0.5">
            <span className="opacity-60 w-20 inline-block">Company:</span>
            <span className="text-typo">{experience.companyName}</span>
          </div>
          <div className="text-typo-body mb-0.5">
            <span className="opacity-60 w-20 inline-block">Type:</span>
            <span className="text-typo">{experience.roleType}</span>
          </div>
          <div className="text-typo-body mb-4">
            <span className="opacity-60 w-20 inline-block">Date:</span>
            <span className="text-typo">{dateStr}</span>
          </div>

          {/* Description */}
          {experience.description && (
            <div className="mb-4 text-typo-body pl-4 border-l border-dim">
              {experience.description}
            </div>
          )}

          {/* Diff block */}
          <div className="rounded-md overflow-hidden border border-dim">
            <div className="bg-dim px-3 py-1.5 text-xs text-typo-body">
              <span className="text-primary-yellow">diff</span>
              {" --git "}
              <span className="text-red-400">a/career</span>
              {" "}
              <span className="text-primary-green">b/career</span>
            </div>
            <div className="px-3 py-2 space-y-1.5 bg-bgColor">
              {experience.points.map((point, i) => (
                <div key={i} className="flex gap-2">
                  <span className="text-primary-green shrink-0 select-none">+</span>
                  <span className="text-primary-green/80">
                    {point.title && (
                      <span className="font-semibold text-primary-green">{point.title}:{" "}</span>
                    )}
                    {point.description}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div className="mt-3 flex flex-wrap gap-2">
            {experience.technologies.map((tech) => (
              <span key={tech} className="text-primary-purple/80 text-xs">
                #{tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleExperience;
