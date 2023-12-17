import { cn } from "@/lib/utils";
import Link from "next/link";
type Props = {
  hideTextOnMobile?: boolean;
};

const Logo = ({ hideTextOnMobile = false }: Props) => {
  return (
    <Link href="/" className="text-2xl font-semibold flex gap-5 items-center">
      <svg
        width="46"
        height="46"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10 0C4.47717 0 0 4.47714 0 10V90C0 95.5229 4.47717 100 10 100H90C95.5228 100 100 95.5229 100 90V10C100 4.47714 95.5228 0 90 0H10ZM71.6829 32.1493L87.0588 47.9524L89.7729 50.7418L87.0588 53.5312L71.6829 69.3343L65.9491 63.7555L78.611 50.7418L65.9491 37.7281L71.6829 32.1493ZM12.1331 53.5312L27.5091 69.3343L33.2429 63.7555L20.5809 50.7418L33.2429 37.7281L27.5091 32.1493L12.1331 47.9524L9.41907 50.7418L12.1331 53.5312ZM52.7444 14L39.0001 84.8856L46.8538 86.4084L60.5981 15.5228L52.7444 14Z"
          fill="#79E0C1"
        />
      </svg>

      <div
        className={cn({
          "hidden lg:inline-block": hideTextOnMobile,
        })}
      >
        ahmad<span className="text-primary-green">zaheer</span>
      </div>
    </Link>
  );
};

export default Logo;
