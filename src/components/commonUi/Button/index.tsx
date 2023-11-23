import type { LucideIcon, LucideProps } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  text: string;
  onClick: () => void;
  Icon?: LucideIcon;
  iconProps?: LucideProps;
  variant?: "filled" | "outlined" | "ghost";
};

const Button = ({
  text,
  onClick,
  Icon,
  iconProps = {},
  variant = "filled",
}: Props) => {
  return (
    <button
      onClick={onClick}
      className={cn("flex gap-3 px-4 py-3 rounded-md transition-all", {
        "bg-primary-light hover:bg-primary text-typo": variant === "filled",
        "border border-primary-light text-primary-light hover:text-typo hover:border-primary hover:bg-primary":
          variant === "outlined",
        "text-typo border border-transparent hover:bg-dim": variant === "ghost",
      })}
    >
      {Icon && <Icon {...iconProps} />}
      <span>{text}</span>
    </button>
  );
};

export default Button;
