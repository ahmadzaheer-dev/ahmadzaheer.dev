import MaxWidthWrapper from "@/ui/MaxWidthWrapper";
import { getHeadingStyles } from "@/ui/utils";
import { cn } from "@/lib/utils";
import Items from "@/components/sections/Bagpack/Items";

const Bagpack = () => {
  return (
    <div
      id="bagpack"
      className="py-10 relative overflow-hidden h-[calc(100vh-96px)] bg-dim"
    >
      <MaxWidthWrapper className="flex flex-col justify-center h-full">
        <h2
          className={cn(
            getHeadingStyles("h2"),
            "mb-8 sm:mb-12 lg:mb-16 text-center"
          )}
        >
          My Bagpack
        </h2>
        <p className="max-w-prose mx-auto text-center mb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam at
          impedit facere facilis vero aliquam ad. Sequi consectetur possimus
          quis ea iste eius corrupti. Officiis vitae ab perferendis dolor
          nesciunt.
        </p>
        <Items />
      </MaxWidthWrapper>
    </div>
  );
};

export default Bagpack;
