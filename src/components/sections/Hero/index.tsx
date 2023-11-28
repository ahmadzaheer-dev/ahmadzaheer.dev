import MaxWidthWrapper from "@/ui/MaxWidthWrapper";
import { getHeadingStyles } from "@/ui/utils";

const Hero = () => {
  //
  return (
    <div className="h-screen before:bg-gradient-radial before:from-dim before:to-transparent before:from-0% before:to-70% before:content-[''] before:absolute before:h-full before:pl-[100%] before:top-0 before:left-0 before:-z-10 pt-24">
      <MaxWidthWrapper className="mt-20 relative before:content-['<hero>'] before:text-primary-green before:absolute before:w-full before:max-w-screen-xl before:left-1/2 before:-translate-x-1/2 before:-top-10 before:italic after:content-['</hero>'] after:text-primary-green after:absolute after:w-full after:max-w-screen-xl after:left-1/2 after:-translate-x-1/2 after:-bottom-10 after:italic">
        <h1 className={getHeadingStyles("h1")}>
          Hi! I am <span className="font-bold text-primary-green">Ahmad.</span>
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
