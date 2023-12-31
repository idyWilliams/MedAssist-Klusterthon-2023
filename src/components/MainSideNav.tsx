
import { useSidebarState } from "../services/states";
import Aside from "./Aside";

const MainSideNav = () => {
  const sideBarOpen = useSidebarState((state) => state.sideBarOpen);
  const toggleSideBarOpen = useSidebarState((state) => state.toggleSidebar);
  return (
    <div className="">
      <div
        className={`fixed bg-[#020101a6] w-full h-[100%]   top-20  left-0 z-10 lg:hidden overflow-y-hidden border-r  ${
          !sideBarOpen ? "hidden" : ""
        }`}
        onClick={() => toggleSideBarOpen()}
      ></div>

      <Aside />

    </div>
  );
};

export default MainSideNav;

