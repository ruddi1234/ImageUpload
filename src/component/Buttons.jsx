import React from "react";
import { links } from "../constants";

const Buttons = () => {
  return (
    <div className="flex flex-row gap-2 justify-evenly w-full">
      {links?.map((link, index) => {
        return (
          <div key={index} className="flex px-3 py-1 bg-gray-100 text-black shadow-lg rounded-md hover:bg-gray-800 hover:text-white cursor-pointer">
            <a target="_blank" href={link.link}>{link.name}</a>
          </div>
        );
      })}
    </div>
  );
};

export default Buttons;
