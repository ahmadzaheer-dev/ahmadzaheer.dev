import MaxWidthWrapper from "@/ui/MaxWidthWrapper";
import { getHeadingStyles } from "@/ui/utils";
import { cn } from "@/lib/utils";

const Bagpack = () => {
  return (
    <div id="bagpack" className="py-10 relative overflow-hidden">
      <MaxWidthWrapper>
        <h2
          className={cn(
            getHeadingStyles("h2"),
            "mb-8 sm:mb-12 lg:mb-16 text-center"
          )}
        >
          My Bagpack
        </h2>
      </MaxWidthWrapper>
    </div>
  );
};

export default Bagpack;
