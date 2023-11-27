import MaxWidthWrapper from "@/ui/MaxWidthWrapper";
import { NAV_ITEMS } from "@/constants";
import Link from "next/link";
import Socials from "@/components/sections/Contact/Socials";
import Logo from "@/components/Logo";

const Footer = () => {
  return (
    <>
      <div className="bg-dim/60 pt-32 pb-10">
        <MaxWidthWrapper>
          <div className="flex items-center">
            <Logo />
            <div className="basis-2/3">
              <ul className="flex gap-8 items-center justify-end">
                {NAV_ITEMS.map((item) => (
                  <li className="mb-1 hover:text-primary-green transition-all">
                    <Link href={item.path}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
      <div className="bg-dim/60 border-t border-dim">
        <MaxWidthWrapper className="py-5 flex items-center justify-between">
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
