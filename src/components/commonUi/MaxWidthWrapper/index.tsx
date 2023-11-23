import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const MaxWidthWrapper = ({ children, className = "" }: Props) => {
  return (
    <div className={cn("w-11/12 max-w-screen-xl mx-auto", className)}>
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
