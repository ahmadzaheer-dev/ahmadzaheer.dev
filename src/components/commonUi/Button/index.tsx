import type { LucideIcon, LucideProps } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { HTMLAttributeAnchorTarget } from "react";

type Props = {
  text: string;
  Icon?: LucideIcon;
  iconProps?: LucideProps;
  variant?: "filled" | "outlined" | "ghost" | "secondary";
} & (
  | { type: "button"; onClick: () => void }
  | { type: "link"; href: string; target?: HTMLAttributeAnchorTarget }
);

const Button = (props: Props) => {
  const { text, Icon, iconProps, variant = "filled" } = props;
  const className = cn("flex gap-3 px-4 py-3 rounded-md transition-all", {
    "hover:bg-primary-green bg-white text-bgColor font-semibold":
      variant === "filled",
    "bg-primary-green hover:bg-white text-bgColor font-semibold":
      variant === "secondary",
    "border border-primary-green text-primary-green hover:text-typo hover:border-primary-green hover:bg-primary-green":
      variant === "outlined",
    "text-typo border border-transparent hover:bg-dim": variant === "ghost",
  });
  return (
    <>
      {props.type === "button" ? (
        <button onClick={props.onClick} className={className}>
          {Icon && <Icon {...iconProps} />}
          <span>{text}</span>
        </button>
      ) : (
        <Link
          href={props.href}
          className={className}
          target={props.target ? props.target : "_self"}
        >
          {Icon && <Icon {...iconProps} />}
          <span>{text}</span>
        </Link>
      )}
    </>
  );
};

export default Button;
