"use client";

import MaxWidthWrapper from "@/ui/MaxWidthWrapper";
import { getHeadingStyles } from "@/ui/utils";
import { cn } from "@/lib/utils";
import Button from "@/ui/Button";
import { ArrowDownToLine } from "lucide-react";
import { SOCIALS } from "@/constants";
import Link from "next/link";

const Hero = () => {
  const radialBgGradientClasses =
    "before:bg-gradient-radial before:from-dim before:to-transparent before:from-0% before:to-70% before:content-[''] before:absolute before:h-full before:pl-[100%] before:top-0 before:left-0 before:-z-10";
  return (
    <div
      className={`relative flex flex-col items-center bg-[url('/images/hero-circle-bg.svg')] bg-contain bg-no-repeat pt-52 pb-10 ${radialBgGradientClasses}`}
    >
      <MaxWidthWrapper className="mt-20">
        <div className="max-w-screen-lg mx-auto text-center">
          <div className="inline-flex items-center mb-5 mx-auto gap-3">
            <div
              style={{ backgroundImage: "url('/images/dp.jpeg')" }}
              className="h-12 w-12 rounded-full bg-cover bg-center"
            />
            <div className="flex gap-3">
              {SOCIALS.map((platform) => {
                const SocialIcon = platform.icon;
                return (
                  <Link
                    href={platform.url}
                    target="_blank"
                    key={platform.platform}
                  >
                    <span className="hover:text-primary-green transition-all flex items-center gap-1 mix-blend-difference">
                      <SocialIcon size={16} /> {platform.platform}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
          <h1
            className={cn(
              getHeadingStyles("h2"),
              "font-normal mix-blend-difference"
            )}
          >
            Hi! I am{" "}
            <span className="font-bold text-primary-green">Ahmad.</span>
          </h1>
          <h2
            className={cn(
              getHeadingStyles("h1"),
              "no-underline font-bold mix-blend-difference"
            )}
          >
            Full Stack <span className="text-primary-green">Web Engineer</span>
          </h2>
          <p className="font-light text-typo-body mb-10 max-w-prose mx-auto mix-blend-difference">
            Motivated Full Stack Engineer with over a year of experience aiming
            to contribute to team success through hard work and excellent
            development, debugging and leadership skills.
          </p>
          <div className="relative inline-flex gap-3 items-center before:content-[''] before:absolute before:h-24 before:w-24 before:bg-[url('/images/scribble.png')] before:-top-14 before:-left-24 before:bg-contain before:bg-center before:bg-no-repeat mb-20">
            <Button
              type="link"
              href="/#contact"
              text="Contact"
              variant="secondary"
            />
            <Button
              type="link"
              href="/documents/ahmadzaheer-resume.pdf"
              text="Download CV"
              target="_blank"
              Icon={ArrowDownToLine}
              iconProps={{ size: 20 }}
            />
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Hero;
