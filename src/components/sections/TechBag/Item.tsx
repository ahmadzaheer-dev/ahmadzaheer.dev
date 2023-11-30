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
        className="py-3 px-5 inline-block bg-bgColor rounded-md cursor-pointer hover:bg-primary-green hover:text-bgColor transition-all font-semibold"
      >
        {item.name}
      </div>
      {displayPopup && (
        <div
          style={{
            bottom: mouseCoordinatesFromBL.y + 30,
            left: mouseCoordinatesFromBL.x,
            marginLeft: "-112px",
          }}
          className="absolute w-56 p-5 rounded-md z-10 bg-primary-green text-bgColor before:absolute before:content-[''] before:-inset-1 before:border before:border-primary-green/60 before:rounded-lg before:shadow-lg"
        >
          <h3 className={getHeadingStyles("h4")}>{item.name}</h3>
          <p className="text-sm font-bold mb-5 capitalize">{item.category}</p>
          <div className="w-full h-1 rounded-md overflow-hidden bg-dim">
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
