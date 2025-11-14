import { useContext } from "react";
import { MenuToggleContext } from "../../context/MenuToggleProvider";

const Navbar = () => {
  const { toggle } = useContext(MenuToggleContext)!;
  return (
    <nav
      className={`w-12/12 absolute top-0  ${
        toggle ? "left-0" : "left-[-300px]"
      } lg:static lg:w-4/12 xl:w-3/12 h-screen bg-blue-600 duration-300 ease-in`}
    >
      navbar
    </nav>
  );
};

export default Navbar;
