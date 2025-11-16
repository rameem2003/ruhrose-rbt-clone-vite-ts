import { useContext } from "react";
import Navbar from "../components/shared/Navbar";
import { Outlet } from "react-router";
import { MenuToggleContext } from "../context/MenuToggleProvider";
import { HiBars3 } from "react-icons/hi2";
import Footer from "../components/shared/Footer";

const RootLayout = () => {
  const { toggle, setToggle } = useContext(MenuToggleContext)!;

  return (
    <div className=" flex items-start justify-between overflow-x-hidden">
      <Navbar />
      <main
        className={`w-full relative ${
          toggle ? "left-[255px]" : "left-0"
        } lg:static lg:w-8/12 xl:w-[77%] duration-300  ease-in min-h-screen`}
      >
        <div
          onClick={() => setToggle(!toggle)}
          className="w-14 h-14 flex items-center justify-center lg:hidden z-10 absolute top-5 left-5 bg-black rounded-full"
        >
          <HiBars3 size={30} className=" text-white" />
        </div>
        <Outlet />
        <Footer />
      </main>
    </div>
  );
};

export default RootLayout;
