"use client";

import { useState } from "react";
import { Skill } from "@/types/types";
import { getHeadingStyles } from "@/ui/utils";

type Props = {
  item: Skill;
  mouseCoordinatesFromBL: { x: number; y: number };
};

const Item = ({ item, mouseCoordinatesFromBL }: Props) => {
  const [displayPopup, setDisplayPopup] = useState(false);
  return (
    <>
      <div
        onMouseEnter={() => setDisplayPopup(true)}
        onMouseLeave={() => setDisplayPopup(false)}
        className="py-3 px-5 inline-block bg-bgColor rounded-md cursor-pointer hover:bg-primary-light transition-all"
      >
        {item.name}
      </div>
      {displayPopup && (
        <div
          style={{
            bottom: mouseCoordinatesFromBL.y + 30,
            left: mouseCoordinatesFromBL.x,
          }}
          className="absolute w-56 p-5 rounded-md bg-gradient-to-r z-10 from-primary to-primary-light"
        >
          <h3 className={getHeadingStyles("h4")}>{item.name}</h3>
          <p className="text-sm font-bold mb-5 capitalize">{item.category}</p>
          <div className="w-full h-1 rounded-full overflow-hidden bg-dim">
            <div
              style={{ width: `${item.skillLevel}%` }}
              className="h-full bg-white transition-all"
            ></div>
          </div>
        </div>
      )}
    </>
  );
};

export default Item;
