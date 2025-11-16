import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className=" w-full bg-black text-white ">
      <div className="px-20 py-28 flex flex-col gap-20 md:flex-row md:gap-0 items-start justify-between">
        <div>
          <Link to="/" className=" text-2xl font-bold">
            RuhRose
          </Link>
        </div>

        <div>
          <ul>
            <li className=" mb-5">
              <Link className="font-normal text-base text-gray-300" to="/">
                Home
              </Link>
            </li>
            <li className=" mb-5">
              <Link className="font-normal text-base text-gray-300" to="/">
                Design
              </Link>
            </li>
            <li className=" mb-5">
              <Link className="font-normal text-base text-gray-300" to="/">
                Production
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <ul>
            <li className=" mb-5">
              <Link className="font-normal text-base text-gray-300" to="/">
                Sustainability
              </Link>
            </li>
            <li className=" mb-5">
              <Link className="font-normal text-base text-gray-300" to="/">
                Collaboration
              </Link>
            </li>
            <li className=" mb-5">
              <Link className="font-normal text-base text-gray-300" to="/">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-normal text-base text-gray-300">Social</h2>

          <FaLinkedin
            size={24}
            className=" mt-4 cursor-pointer text-gray-300"
          />
        </div>
      </div>

      <a
        href="https://rolstudiobangladesh.vercel.app/"
        target="_blank"
        className="  block pb-5 text-xs md:text-sm text-gray-300 text-center"
      >
        &copy; 2025 ROL Studio Bangladesh || All rights reserved.
      </a>
    </footer>
  );
};

export default Footer;
