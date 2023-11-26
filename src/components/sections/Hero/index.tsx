import MaxWidthWrapper from "@/ui/MaxWidthWrapper";
import { getHeadingStyles } from "@/ui/utils";

const Hero = () => {
  return (
    <div className="h-screen before:bg-gradient-radial before:from-primary/30 before:to-transparent before:from-0% before:to-70% before:content-[''] before:absolute before:h-full before:pl-[100%] before:top-0 before:left-0 before:-z-10 pt-24">
      <MaxWidthWrapper className="py-20">
        <h1 className={getHeadingStyles("h1")}>
          Hi! I am{" "}
          <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light">
            Ahmad.
          </span>
        </h1>
        <h2 className={getHeadingStyles("h2")}>Full Stack Web Developer</h2>
        <p className="max-w-prose font-light text-typo-body">
          Motivated Full Stack Engineer with over a year of experience aiming to
          contribute to team success through hard work and excellent
          development, debugging and leadership skills.
        </p>
      </MaxWidthWrapper>
    </div>
  );
};

export default Hero;
