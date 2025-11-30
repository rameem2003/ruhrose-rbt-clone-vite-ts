import Container from "../common/Container";
import logo from "../../assets/logo.png";
import { NavOption } from "../../constant/NavConstant";
import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router";

const MobileNav = ({
  toggle,
  setToggle,
}: {
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <aside
      className={` duration-300  fixed ${
        toggle ? "top-0" : "top-[-200%]"
      } left-0 z-100 w-full h-screen bg-primary py-20 flex items-center justify-center flex-col`}
    >
      <button className=" absolute top-5 right-5">
        <FaTimes
          onClick={() => setToggle(false)}
          size={40}
          className=" text-secondary cursor-pointer"
        />
      </button>

      <Container>
        <div className=" flex flex-col items-center gap-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={toggle ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{
              duration: 1.5,
              delay: 0.2,
              ease: "easeInOut",
              bounce: 0.5,
              type: "spring",
            }}
            className=" mt-10"
          >
            <ul className="">
              {NavOption.map((option, i) => (
                <li key={i}>
                  <HashLink
                    smooth
                    onClick={() => setToggle(false)}
                    to={option.href}
                    className=" text-center block mb-10 text-4xl md:text-6xl font-medium font-title-two text-secondary capitalize"
                  >
                    {option.name}
                  </HashLink>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={toggle ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
            transition={{
              duration: 1.5,
              delay: 0.2,
              ease: "easeInOut",
              bounce: 0.5,
              type: "spring",
            }}
            className=" mt-10"
          >
            <Link to="/">
              <img src={logo} alt="Logo" className="w-1/3 mx-auto" />
            </Link>
          </motion.div>
        </div>
      </Container>
    </aside>
  );
};

export default MobileNav;
