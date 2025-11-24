// import { useContext } from "react";
// import Navbar from "../components/shared/Navbar";
import { Outlet } from "react-router";
// import { MenuToggleContext } from "../context/MenuToggleProvider";
// import { HiBars3 } from "react-icons/hi2";
import Footer from "../components/shared/Footer";

const RootLayout = () => {
  // const { toggle, setToggle } = useContext(MenuToggleContext)!;

  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
