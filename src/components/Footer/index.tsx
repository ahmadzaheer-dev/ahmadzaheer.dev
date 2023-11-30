import MaxWidthWrapper from "@/ui/MaxWidthWrapper";
import { NAV_ITEMS } from "@/constants";
import Link from "next/link";
import Socials from "@/components/sections/Contact/Socials";
import Logo from "@/ui/Logo";

const Footer = () => {
  return (
    <>
      <div className="bg-dim/60 pt-32 pb-10">
        <MaxWidthWrapper>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div className="mb-8 sm:mb-0 self-center">
              <Logo />
            </div>
            <ul className="flex flex-row gap-8 items-center justify-center sm:justify-end flex-wrap">
              {NAV_ITEMS.map((item) => (
                <li
                  key={item.name}
                  className="mb-1 hover:text-primary-green transition-all"
                >
                  <Link href={item.path}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </MaxWidthWrapper>
      </div>
      <div className="bg-dim/60 border-t border-dim">
        <MaxWidthWrapper className="py-5 flex flex-col gap-5 sm:flex-row items-center justify-between">
          <span>© 2023 Ahmad Zaheer. All Rights Reserved.</span>
          <div>
            <Socials />
          </div>
        </MaxWidthWrapper>
      </div>
    </>
  );
};

export default Footer;
