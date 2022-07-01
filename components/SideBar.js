import React from "react";
import {
  FaClipboardList,
  FaHashtag,
  FaHome,
  FaInbox,
  FaRegBell,
  FaRegBookmark,
  FaRegUser,
  FaTwitter,
} from "react-icons/fa";
import {HiOutlineDotsCircleHorizontal,HiOutlineDotsHorizontal} from 'react-icons/hi';
import SidebarLink from './SidebarLink';

function SideBar() {
  return (
    <div className="hidden sm:flex flex-col items-center xl:items-start lg:items-start xl:w-auto lg:w-auto p-2 fixed h-full">
      <div className="flex items-center justify-center w-8 h-8 hoverAnimation p-0 xl:ml-24 lg:ml-[130px]">
        <FaTwitter color="white" />
      </div>

      <div className="space-y-1 mt-2 mb-2.5 xl:ml-24 lg:ml-24">
        <SidebarLink text="Home" Icon={FaHome} active />
        <SidebarLink text="Explore" Icon={FaHashtag} />
        <SidebarLink text="Notifications" Icon={FaRegBell} />
        <SidebarLink text="Messages" Icon={FaInbox} />
        <SidebarLink text="Bookmarks" Icon={FaRegBookmark} />
        <SidebarLink text="Lists" Icon={FaClipboardList} />
        <SidebarLink text="Profile" Icon={FaRegUser} />
        <SidebarLink text="More" Icon={HiOutlineDotsCircleHorizontal} />
      </div>

      <button className="hidden xl:inline lg:inline ml-auto bg-[#1d9bf0] text-white rounded-full w-32 h-[35px] text-sm font-bold hover:bg-[#1a8cd8] lg:ml-24">
        Tweet
      </button>

      <div
        className="text-[#d9d9d9] flex items-center justify-center mt-auto hoverAnimation lg:ml-24 lg:-mr-5"
        
      >
        <img
          src="https://findicons.com/files/icons/2443/bunch_of_cool_bluish_icons/128/user.png"
          alt=""
          className="h-5 w-5 rounded-full lg:mr-2"
        />
        <div className="hidden lg:inline leading-[15px]">
          <h4 className="font-normal text-[12px]">session user name</h4>
          <p className="text-[#6e767d] font-light text-[12px]">session user tag</p>
        </div>
        <HiOutlineDotsHorizontal color="white" className="h-5 hidden lg:inline ml-5" />
      </div>
    </div>
  );
}

export default SideBar;
