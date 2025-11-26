import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router";
import Container from "../common/Container";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className=" w-full bg-primary ">
      <Container>
        <img src={logo} alt="logo" className="mx-auto" />
        <div className=" py-28 flex flex-col gap-20 md:flex-row md:gap-0 items-start justify-between">
          <div>
            <Link
              to="/"
              className=" text-2xl font-title-two text-secondary font-bold"
            >
              RIVO
            </Link>
          </div>

          <div>
            <ul>
              <li className=" mb-5">
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
              </li>
            </ul>
          </div>

          <div>
            <ul>
              <li className=" mb-5">
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
              </li>
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

        <a
          href="https://rolstudiobangladesh.vercel.app/"
          target="_blank"
          className="  block pb-5 text-xs md:text-sm font-title-two text-secondary text-center"
        >
          &copy; 2025 RIVO || All rights reserved || Developed by ROL Studio.
          Bangladesh
        </a>
      </Container>
    </footer>
  );
};

export default Footer;
