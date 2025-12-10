import Container from "../common/Container";
import { FaLinkedin } from "react-icons/fa";
import { NavOption } from "../../constant/NavConstant";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <footer className=" w-full bg-primary pt-40">
      <Container>
        <img src="/logo.png" alt="logo" className="mx-auto" />
        <div className=" py-28 flex flex-col gap-20 md:flex-row md:gap-0 items-start justify-between">
          <div>
            <HashLink
              smooth
              to="/#home"
              className=" text-2xl font-title-two text-secondary font-bold"
            >
              RIVO
            </HashLink>
          </div>

          <div>
            <ul>
              {NavOption.slice(0, 3).map((option, i) => (
                <li key={i} className=" mb-5">
                  <HashLink
                    smooth
                    className="font-normal text-base font-title-two text-secondary"
                    to={option.href}
                  >
                    {option.name}
                  </HashLink>
                </li>
              ))}
              {/* <li className=" mb-5">
                <Link
                  className="font-normal text-base font-title-two text-secondary"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className=" mb-5">
                <Link
                  className="font-normal text-base font-title-two text-secondary"
                  to="/"
                >
                  Design
                </Link>
              </li>
              <li className=" mb-5">
                <Link
                  className="font-normal text-base font-title-two text-secondary"
                  to="/"
                >
                  Production
                </Link>
              </li> */}
            </ul>
          </div>

          <div>
            <ul>
              {NavOption.slice(3, 6).map((option, i) => (
                <li key={i} className=" mb-5">
                  <HashLink
                    smooth
                    className="font-normal text-base font-title-two text-secondary"
                    to={option.href}
                  >
                    {option.name}
                  </HashLink>
                </li>
              ))}
              {/* <li className=" mb-5">
                <Link
                  className="font-normal text-base font-title-two text-secondary"
                  to="/"
                >
                  Sustainability
                </Link>
              </li>
              <li className=" mb-5">
                <Link
                  className="font-normal text-base font-title-two text-secondary"
                  to="/"
                >
                  Collaboration
                </Link>
              </li>
              <li className=" mb-5">
                <Link
                  className="font-normal text-base font-title-two text-secondary"
                  to="/"
                >
                  Contact Us
                </Link>
              </li> */}
            </ul>
          </div>

          <div>
            <h2 className="font-normal text-base font-title-two text-secondary">
              Social
            </h2>

            <FaLinkedin
              size={24}
              className=" mt-4 cursor-pointer font-title-two text-secondary"
            />
          </div>
        </div>

        <span className="  block pb-5 text-xs md:text-sm font-title-two text-secondary text-center">
          &copy; 2025 RIVO || All rights reserved || {""}
          <a href="https://rolstudiobangladesh.vercel.app/" target="_blank">
            Developed by ROL Studio Bangladesh
          </a>
          <span className=" mx-2">X</span>
          <a href="https://sdsifat.com/" target="_blank">
            SD Sifat
          </a>
        </span>
      </Container>
    </footer>
  );
};

export default Footer;
