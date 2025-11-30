import Container from "../common/Container";
import logo from "../../assets/logo.png";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";
import { NavOption } from "../../constant/NavConstant";
import { HashLink } from "react-router-hash-link";
const NavberNew = ({
  toggle,
  setToggle,
}: {
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  console.log(toggle);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 w-full duration-300 ${
        scrolled ? "bg-primary" : "bg-transparent"
      } `}
    >
      <Container>
        <div className=" flex items-center justify-between py-2">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.5,
              delay: 0.2,
              ease: "easeInOut",
              bounce: 0.5,
              type: "spring",
            }}
          >
            <Link to="/">
              <img src={logo} alt="Logo" className="w-[80px]" />
            </Link>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.5,
              delay: 0.2,
              ease: "easeInOut",
              bounce: 0.5,
              type: "spring",
            }}
            className=" block lg:hidden items-center gap-5 justify-end"
          >
            <button
              onClick={() => setToggle(true)}
              className=" relative z-10000"
            >
              <HiBars3BottomRight
                size={40}
                className=" text-secondary cursor-pointer"
              />
            </button>
          </motion.ul>

          <motion.ul
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.5,
              delay: 0.2,
              ease: "easeInOut",
              bounce: 0.5,
              type: "spring",
            }}
            className=" hidden gap-10 lg:flex items-center justify-end"
          >
            {NavOption.map((option, i) => (
              <li key={i}>
                <HashLink
                  smooth
                  to={option.href}
                  className=" text-base uppercase font-normal font-title-two text-secondary"
                >
                  {option.name}
                </HashLink>
              </li>
            ))}
            {/* <li>
              <Link
                to="/"
                className=" text-lg font-medium font-title-two text-secondary capitalize"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className=" text-lg font-medium font-title-two text-secondary capitalize"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/collections"
                className=" text-lg font-medium font-title-two text-secondary capitalize"
              >
                Collections
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className=" text-lg font-medium font-title-two text-secondary capitalize"
              >
                Contact
              </Link>
            </li> */}
          </motion.ul>
        </div>
      </Container>
    </nav>
  );
};

export default NavberNew;
