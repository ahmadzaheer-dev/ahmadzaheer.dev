"use client";

import { useRef, useEffect, useState } from "react";
import { EXPERIENCE } from "@/constants";
import { getDateFormatted } from "@/lib/utils";
import { Experience } from "@/types/types";
import MaxWidthWrapper from "@/components/commonUi/MaxWidthWrapper";

const getTimeString = (experience: Experience) => {
  const startDate = new Date(experience.startDate);
  const endDate =
    typeof experience.endDate === "string" ? new Date() : new Date(experience.endDate);
  const diffDays = Math.ceil(
    Math.abs(endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
  );
  const years = Math.floor(diffDays / 365);
  const months = Math.floor((diffDays % 365) / 30);
  if (!years) return `${months} mos`;
  if (years > 1) return `${years} yrs${months > 0 ? ` ${months} mos` : ""}`;
  return `${years} yr${months > 0 ? ` ${months} mos` : ""}`;
};

const ExperienceCard = ({
  experience,
  index,
}: {
  experience: Experience;
  index: number;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  const dateStr = `${getDateFormatted(experience.startDate)} – ${
    typeof experience.endDate === "string"
      ? experience.endDate
      : getDateFormatted(experience.endDate)
  }`;

  return (
    <div ref={cardRef} className="relative flex gap-0 group">
      {/* Left: date column — outer div is the sticky container boundary */}
      <div
        className={`hidden sm:block w-36 lg:w-48 shrink-0 pb-14 transition-all duration-700 ease-out ${
          visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
        }`}
        style={{ transitionDelay: "100ms" }}
      >
        {/* Sticky inner — sticks until the bottom of this outer div */}
        <div className="sticky top-28 flex flex-col items-end pr-6 pt-1">
          <span className="text-xs font-mono text-typo-body leading-relaxed text-right">
            {getDateFormatted(experience.startDate)}
          </span>
          <span className="text-xs font-mono text-typo-body/50">–</span>
          <span className="text-xs font-mono text-typo-body leading-relaxed text-right">
            {typeof experience.endDate === "string"
              ? experience.endDate
              : getDateFormatted(experience.endDate)}
          </span>
          <span className="mt-2 text-xs font-mono text-primary-green/70">
            {getTimeString(experience)}
          </span>
        </div>
      </div>

      {/* Center: dot + connector */}
      <div className="flex flex-col items-center shrink-0">
        {/* Dot */}
        <div
          className={`relative z-10 mt-1.5 transition-all duration-500 ease-out ${
            visible ? "scale-100 opacity-100" : "scale-0 opacity-0"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          <div className="w-3 h-3 rounded-full border-2 border-primary-green bg-bgColor group-hover:bg-primary-green transition-colors duration-300" />
          {/* Pulse ring */}
          <div className="absolute inset-0 rounded-full border border-primary-green/30 scale-0 group-hover:scale-[2.5] opacity-0 group-hover:opacity-100 transition-all duration-500" />
        </div>
      </div>

      {/* Right: card */}
      <div
        className={`flex-1 pl-6 pb-14 transition-all duration-700 ease-out ${
          visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
        }`}
        style={{ transitionDelay: "150ms" }}
      >
        {/* Mobile-only date */}
        <div className="flex items-center gap-2 mb-2 sm:hidden font-mono text-xs text-typo-body">
          <span>{dateStr}</span>
          <span className="text-primary-green">· {getTimeString(experience)}</span>
        </div>

        <div className="rounded-xl border border-dim bg-dim/30 p-5 sm:p-6 hover:border-primary-green/30 hover:bg-dim/50 transition-all duration-300">
          {/* Role */}
          <h3 className="text-lg sm:text-xl font-bold text-white mb-0.5 leading-snug">
            {experience.position}
          </h3>

          {/* Company + type */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="text-primary-green font-semibold text-sm">
              {experience.companyName}
            </span>
            <span className="text-typo-body/40 text-xs">·</span>
            <span className="text-typo-body text-xs font-mono">{experience.roleType}</span>
          </div>

          {/* Description */}
          {experience.description && (
            <p className="text-typo-body text-sm leading-relaxed mb-4">
              {experience.description}
            </p>
          )}

          {/* Points */}
          {experience.points.length > 0 && (
            <ul className="space-y-2 mb-5">
              {experience.points.map((point, i) => (
                <li key={i} className="flex gap-2 text-sm text-typo-body">
                  <span className="text-primary-green/60 shrink-0 mt-0.5">▸</span>
                  <span>
                    {point.title && (
                      <span className="text-typo font-semibold">{point.title}: </span>
                    )}
                    {point.description}
                  </span>
                </li>
              ))}
            </ul>
          )}

          {/* Tech tags */}
          <div className="flex flex-wrap justify-start gap-2">
            {experience.technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs py-1 px-2.5 rounded-md bg-primary-green/10 text-primary-green border border-primary-green/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const VerticalTimelineExperience = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const track = trackRef.current;
      const line = lineRef.current;
      if (!track || !line) return;

      const rect = track.getBoundingClientRect();
      const trackHeight = track.offsetHeight;
      // How far the top of the track is above the viewport center
      const scrolled = window.innerHeight * 0.25 - rect.top;
      const p = Math.max(0, Math.min(scrolled / trackHeight, 1));
      line.style.height = `${p * 100}%`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={sectionRef}
      id="experience"
      className="py-20 relative before:bg-[radial-gradient(circle_at_35%,_var(--tw-gradient-stops))] before:from-dim before:to-transparent before:from-0% before:to-50% before:content-[''] before:absolute before:h-full before:w-full before:top-0 before:left-0 before:-z-10"
    >
      <MaxWidthWrapper>
      <div className="px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="relative mb-16">
          <p className="text-primary-green font-mono text-sm mb-2 italic">&lt;experience&gt;</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-center">Experience</h2>
        </div>

        {/* Timeline */}
        <div ref={trackRef} className="relative">
          {/* Background track line */}
          <div className="hidden sm:block absolute top-0 bottom-0 bg-dim w-px"
            style={{ left: "calc(12rem + 5px)" }}
          />
          {/* Scroll-drawn line */}
          <div
            ref={lineRef}
            className="hidden sm:block absolute top-0 w-px bg-primary-green transition-none"
            style={{ left: "calc(12rem + 5px)", height: "0%" }}
          />

          {/* Cards */}
          <div>
            {EXPERIENCE.map((exp, i) => (
              <ExperienceCard key={exp.companyName + exp.position} experience={exp} index={i} />
            ))}
          </div>
        </div>

        <p className="text-primary-green font-mono text-sm mt-4 italic">&lt;/experience&gt;</p>
      </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default VerticalTimelineExperience;
