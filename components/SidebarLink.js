import React from "react";

function SidebarLink({ Icon, text, active }) {
  return (
    <div
      className={`text-[#d9d9d9] flex items-center justify-center xl:justify-start lg:justify-start text-lg space-x-3 hoverAnimation h-8 ${
        active && "font-bold"
      }`}
      onClick={() => active && router.push("/")}
    >
      <Icon className="h-4" />
      <span className="hidden xl:inline lg:inline text-[18px]">{text}</span>
    </div>
  );
}

export default SidebarLink;
