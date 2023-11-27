import { SOCIALS } from "@/constants";
import Link from "next/link";

const Socials = () => {
  return (
    <div className="flex items-center gap-3 justify-center lg:justify-start text-bgColor">
      {SOCIALS.map((item) => {
        const Icon = item.icon;
        return (
          <Link
            href={item.url}
            key={item.platform}
            className="p-2 rounded-full bg-white border border-bgColor hover:bg-bgColor hover:text-white transition-all"
          >
            <Icon size={18} />
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
