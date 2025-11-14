import { useContext } from "react";
import Navbar from "../components/shared/Navbar";
import { Outlet } from "react-router";
import { MenuToggleContext } from "../context/MenuToggleProvider";

const RootLayout = () => {
  const { toggle, setToggle } = useContext(MenuToggleContext)!;

  return (
    <div className=" flex items-start justify-between overflow-x-hidden">
      <Navbar />
      <main
        className={`w-full relative ${
          toggle ? "left-[255px]" : "left-0"
        } lg:static lg:w-8/12 xl:w-9/12 duration-300 bg-red-500 ease-in min-h-screen`}
      >
        <div
          onClick={() => setToggle(!toggle)}
          className="w-14 h-14 block lg:hidden z-10 absolute top-5 left-5 bg-black rounded-full"
        ></div>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
