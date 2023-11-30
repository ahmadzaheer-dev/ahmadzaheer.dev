import MaxWidthWrapper from "@/ui/MaxWidthWrapper";
import { getHeadingStyles } from "@/ui/utils";
import { cn } from "@/lib/utils";
import Posts from "@/components/sections/Blog/Posts";

const Blog = () => {
  const sectionBoundariesStyles =
    "before:content-['<blog>'] before:text-primary-green before:absolute before:w-full before:max-w-screen-xl before:left-1/2 before:-translate-x-1/2 before:-top-10 before:italic after:content-['</blog>'] after:text-primary-green after:absolute after:w-full after:max-w-screen-xl after:left-1/2 after:-translate-x-1/2 after:-bottom-10 after:italic";

  return (
    <div id="blog" className="pt-32 pb-40">
      <MaxWidthWrapper className={`relative ${sectionBoundariesStyles}`}>
        <h2 className={cn(getHeadingStyles("h2"), "mb-10 text-center")}>
          Latest Posts
        </h2>
        <Posts />
      </MaxWidthWrapper>
    </div>
  );
};

export default Blog;
