import React from "react";
import { useSidebarState } from "../../services/states";
import { HiOutlineSearch } from "react-icons/hi";
import { MdOutlineClose, MdOutlineViewHeadline } from "react-icons/md";
import NavButton from "../NavButton";
import { IoIosAdd } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";

const Nav = () => {
  const showSideBar = useSidebarState((state) => state.sideBarOpen);
  const toggleSidebar = useSidebarState((state) => state.toggleSidebar);

  return (
    <div className="  border-b border-[#D9D9D9] h-[80px] w-full px-10 flex items-center justify-between shadow z-50 bg-[#fff]">
      <div className="flex lg:hidden md:block block items-center justify-center md:gap-2 xxs:gap-3">
        <div className="lg:hidden md:block block">
          {showSideBar ? (
            <div
              onClick={() => toggleSidebar(false)}
              className=" cursor-pointer text-[#323232] "
            >
              <MdOutlineClose size={34} />
            </div>
          ) : (
            <div
              onClick={() => toggleSidebar(true)}
              className=" cursor-pointer text-[#323232] "
            >
              <MdOutlineViewHeadline size={34} />
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center justify-between w-full gap-20">
        <div className="lg:relative lg:flex lg:items-center lg:justify-center md:hidden hidden">
          <div className="relative">
            <input
              type="text"
              placeholder="Search anything"
              className="text-sm focus:outline-none active:outline-none h-9 w-[664px] bg-[#fff] rounded-lg pl-4 border"
            />
            <div className="absolute top-0 right-0 mt-2 mr-2">
              <HiOutlineSearch size={20} />
            </div>
          </div>
        </div>

        <div className=" flex gap-2 items-end">
          <div className="flex items-center justify-center gap-4">
            <NavButton
              className={Dependent}
              text={
                <div className="flex items-center">
                  <IoIosAdd size={23} />
                  <p>Add Dependent</p>
                </div>
              }
              path="/sign-up"
            />
          </div>
          <div className="border rounded-lg border-[#62B6CB] p-2 text-slate-600">
            <RxAvatar size={24} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;

const Dependent =
  "border border-primary text-secondary text-sm lg:py-2 xxs:py-3 px-[35px] rounded-md bg-primary hover:bg-secondary hover:text-primary transition-all duration-500 active:scale-90 select-none tracking-wider font-medium whitespace-nowrap";
