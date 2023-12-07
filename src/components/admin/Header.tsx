"use client";

import MaxWidthWrapper from "@/ui/MaxWidthWrapper";
import Link from "next/link";
import Button from "@/ui/Button";
import { signOut } from "next-auth/react";
import {
  LayoutTemplateIcon,
  LucideLogOut,
  BookText,
  Terminal,
} from "lucide-react";
import { useSession } from "next-auth/react";
import Logo from "@/ui/Logo";

const Header = () => {
  const session = useSession();
  const { status } = session;
  const loading = status === "loading";
  const authenticated = status === "authenticated";
  return (
    <header className="h-20 flex items-center justify-center border-b border-dim">
      <MaxWidthWrapper>
        <div className="flex justify-between items-center">
          <Logo />
          {loading && (
            <nav className="flex items-center gap-5">
              <div className="h-8 w-48 bg-dim animate-pulse"></div>
            </nav>
          )}
          {authenticated && (
            <nav className="flex items-center gap-8">
              <Link
                href="/admin/projects"
                className="hover:text-primary-green transition-all flex gap-2 items-center"
              >
                <LayoutTemplateIcon size={18} />
                Projects
              </Link>
              <Link
                href="/admin/projects"
                className="hover:text-primary-green transition-all flex gap-2 items-center"
              >
                <Terminal size={18} />
                Skills
              </Link>
              <Link
                href="/admin/projects"
                className="hover:text-primary-green transition-all flex gap-2 items-center"
              >
                <BookText size={18} />
                Blog
              </Link>
              <Button
                type="button"
                text="SignOut"
                onClick={() => {
                  signOut();
                }}
                Icon={LucideLogOut}
              />
            </nav>
          )}
        </div>
      </MaxWidthWrapper>
    </header>
  );
};

export default Header;
