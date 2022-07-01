import React from "react";
import Input from "./Input";
import { HiOutlineSparkles } from "react-icons/hi";

function Feed() {
  return (
    <div className="text-white flex-grow border-l border-r border-gray-700 max-w-2xl sm:ml-[60px] lg:ml-[350px]">
      <div className="text-[#d9d9d9] flex items-center sm:justify-between px-3 sticky py-1 top-0 z-50 bg-black border-b border-gray-700">
        <h2 className="text-[12px] sm:text-[12px] font-bold">Home</h2>
        <div className="hoverAnimation w-5 h-5 flex items-center justify-center lg:px-0 ml-auto">
          <HiOutlineSparkles className="h-5 text-white" />
        </div>
      </div>

      <Input />
    </div>
  );
}

export default Feed;
