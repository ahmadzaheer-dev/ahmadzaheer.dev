import { NavItem } from "@/types/types";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Props = {
  item: NavItem;
  isActive: boolean;
};

const MenuItem = ({ item, isActive }: Props) => {
  return (
    <div key={item.name + "-nav-item"}>
      <Link
        className={cn(
          "transition-all py-2 relative before:content-[''] before:absolute before:transition-all before:left-1/2 before:-translate-x-1/2 before:bottom-0 before:w-0 before:h-px before:bg-primary-green hover:before:w-4/5",
          {
            "text-primary-green before:w-4/5": isActive,
          }
        )}
        href={item.path}
      >
        {item.name}
      </Link>
    </div>
  );
};

export default MenuItem;
