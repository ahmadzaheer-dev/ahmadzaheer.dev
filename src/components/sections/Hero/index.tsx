"use client";

import MaxWidthWrapper from "@/ui/MaxWidthWrapper";
import { getHeadingStyles } from "@/ui/utils";
import { cn } from "@/lib/utils";
import Button from "@/ui/Button";
import { ArrowDownToLine } from "lucide-react";
import { SOCIALS } from "@/constants";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const { scrollY } = useScroll();

  const radialBgGradientClasses =
    "before:bg-gradient-radial before:from-dim before:to-transparent before:from-0% before:to-70% before:content-[''] before:absolute before:h-full before:pl-[100%] before:top-0 before:left-0 before:-z-10";

  const imageScale = useTransform(scrollY, [0, 500], [1, 1.2]);
  const textTranslateY = useTransform(scrollY, [0, 300], [0, 80]);

  return (
    <div className="relative overflow-hidden">
      <motion.div
        className="bg-[url('/images/hero-triangle-bg.png')] bg-contain bg-center bg-no-repeat absolute inset-0"
        style={{ scale: imageScale }}
      ></motion.div>
      <MaxWidthWrapper
        className={`flex flex-col items-center justify-center h-[80vh] md:h-screen pt-20 ${radialBgGradientClasses}`}
      >
        <motion.div
          className="max-w-screen-lg mx-auto text-center"
          style={{ y: textTranslateY }}
        >
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
          <p className="text-md mb-10 max-w-prose mx-auto mix-blend-difference">
            Motivated Full Stack Engineer with years of experience aiming to
            contribute to team success through hard work and excellent
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
        </motion.div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Hero;
