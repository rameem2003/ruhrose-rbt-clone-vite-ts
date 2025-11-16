import { useContext } from "react";
import { MenuToggleContext } from "../../context/MenuToggleProvider";
import { Link, NavLink } from "react-router";
import { FaLinkedinIn } from "react-icons/fa";

const Navbar = () => {
  const { toggle } = useContext(MenuToggleContext)!;
  return (
    <nav
      className={`w-12/12 absolute top-0  ${
        toggle ? "left-0" : "left-[-300px]"
      } lg:static lg:w-4/12 xl:w-[23%] h-screen duration-300 ease-in pt-[90px] px-10 lg:px-[90px]`}
    >
      <div>
        <Link to="/">LOGO HERE</Link>

        <ul className=" my-[90px]">
          <li className="group my-3 block leading-6">
            <NavLink
              className={({ isActive }) =>
                `${
                  isActive &&
                  " text-black! after:content-[''] after:inline-block after:absolute after:bottom-0 after:left-0 after:w-full  after:bg-black after:h-px"
                } relative text-base text-fade uppercase font-normal transition duration-300 inline-block`
              }
              to="/"
            >
              HOME
              <span className="duration-300 block mt-px h-px w-0 bg-black group-hover:w-full"></span>
            </NavLink>
          </li>
          <li className="group my-3 block leading-6">
            <NavLink
              className={({ isActive }) =>
                `${
                  isActive &&
                  " text-black! after:content-[''] after:inline-block after:absolute after:bottom-0 after:left-0 after:w-full  after:bg-black after:h-px"
                } relative text-base text-fade uppercase font-normal transition duration-300 inline-block`
              }
              to="/design"
            >
              DESIGN
              <span className="duration-300 block mt-px h-px w-0 bg-black group-hover:w-full"></span>
            </NavLink>
          </li>
          <li className="group my-3 block leading-6">
            <NavLink
              className={({ isActive }) =>
                `${
                  isActive &&
                  " text-black! after:content-[''] after:inline-block after:absolute after:bottom-0 after:left-0 after:w-full  after:bg-black after:h-px"
                } relative text-base text-fade uppercase font-normal transition duration-300 inline-block`
              }
              to="/production"
            >
              PRODUCTION
              <span className="duration-300 block mt-px h-px w-0 bg-black group-hover:w-full"></span>
            </NavLink>
          </li>
          <li className="group my-3 block leading-6">
            <NavLink
              className={({ isActive }) =>
                `${
                  isActive &&
                  " text-black! after:content-[''] after:inline-block after:absolute after:bottom-0 after:left-0 after:w-full  after:bg-black after:h-px"
                } relative text-base text-fade uppercase font-normal transition duration-300 inline-block`
              }
              to="/sustainability"
            >
              Sustainability
              <span className="duration-300 block mt-px h-px w-0 bg-black group-hover:w-full"></span>
            </NavLink>
          </li>
          <li className="group my-3 block leading-6">
            <NavLink
              className={({ isActive }) =>
                `${
                  isActive &&
                  " text-black! after:content-[''] after:inline-block after:absolute after:bottom-0 after:left-0 after:w-full  after:bg-black after:h-px"
                } relative text-base text-fade uppercase font-normal transition duration-300 inline-block`
              }
              to="/collaboration"
            >
              COLLABORATION
              <span className="duration-300 block mt-px h-px w-0 bg-black group-hover:w-full"></span>
            </NavLink>
          </li>
          <li className="group my-3 block leading-6">
            <NavLink
              className={({ isActive }) =>
                `${
                  isActive &&
                  " text-black! after:content-[''] after:inline-block after:absolute after:bottom-0 after:left-0 after:w-full  after:bg-black after:h-px"
                } relative text-base text-fade uppercase font-normal transition duration-300 inline-block`
              }
              to="/contact"
            >
              CONTACT US
              <span className="duration-300 block mt-px h-px w-0 bg-black group-hover:w-full"></span>
            </NavLink>
          </li>
          <li className="group my-3 block leading-6">
            <NavLink
              className={({ isActive }) =>
                `${
                  isActive &&
                  " text-black! after:content-[''] after:inline-block after:absolute after:bottom-0 after:left-0 after:w-full  after:bg-black after:h-px"
                } relative text-base text-fade uppercase font-normal transition duration-300 inline-block`
              }
              to="/profile"
            >
              PROFILE
              <span className="duration-300 block mt-px h-px w-0 bg-black group-hover:w-full"></span>
            </NavLink>
          </li>
          <li className="group my-3 block leading-6">
            <NavLink
              className={({ isActive }) =>
                `${
                  isActive &&
                  " text-black! after:content-[''] after:inline-block after:absolute after:bottom-0 after:left-0 after:w-full  after:bg-black after:h-px"
                } relative text-base text-fade uppercase font-normal transition duration-300 inline-block`
              }
              to="/blog"
            >
              BLOG
              <span className="duration-300 block mt-px h-px w-0 bg-black group-hover:w-full"></span>
            </NavLink>
          </li>
        </ul>
      </div>

      <div className=" w-full">
        <span className=" h-px w-2/12 inline-block bg-black"></span>

        <a
          className=" block mt-2"
          href="http://"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
