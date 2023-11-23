"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { NAV_ITEMS } from "@/constants";
import MenuItem from "@/components/Nav/Menu/MenuItem";
import Button from "@/ui/Button";
import { ArrowDownToLine } from "lucide-react";

const Menu = () => {
  const params = useParams();
  const [currentPathHash, setCurrentPathHash] = useState<string>();

  useEffect(() => {
    setCurrentPathHash(window.location.hash);
  }, [params]);

  // TODO: Have to activate links depending upon scroll position

  return (
    <nav>
      <div className="hidden lg:flex gap-8 items-center">
        {NAV_ITEMS.map((item) => (
          <MenuItem
            key={item.name + "-nav-item"}
            item={item}
            isActive={currentPathHash === item.path}
          />
        ))}
        <Button
          onClick={() => {}}
          text="Download CV"
          Icon={ArrowDownToLine}
          iconProps={{ size: 20 }}
        />
      </div>
      <div className="block lg:hidden">
        {
          // TODO: Have to implement mobile nav here
        }
      </div>
    </nav>
  );
};

export default Menu;
