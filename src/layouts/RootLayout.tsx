import { useContext } from "react";
// import Navbar from "../components/shared/Navbar";
import { Outlet } from "react-router";
import { MenuToggleContext } from "../context/MenuToggleProvider";
// import { HiBars3 } from "react-icons/hi2";
import Footer from "../components/shared/Footer";
import NavberNew from "../components/shared/NavberNew";
import MobileNav from "../components/shared/MobileNav";

const RootLayout = () => {
  const { toggle, setToggle } = useContext(MenuToggleContext)!;

  return (
    <>
      <MobileNav toggle={toggle} setToggle={setToggle} />
      <NavberNew toggle={toggle} setToggle={setToggle} />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
