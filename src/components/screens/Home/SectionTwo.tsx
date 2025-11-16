import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { Link } from "react-router";

const SectionTwo = () => {
  return (
    <section className="my-20 flex items-center justify-center w-full p-4 py-40 lg:py-48 xl:py-16 xl:px-8 shadow-custom-one ">
      <div className=" flex flex-col md:flex-row items-center justify-center mx-3 2xl:mx-[120px] gap-10">
        <div className=" w-full lg:w-1/2">
          <img
            src="https://i0.wp.com/www.ruhrose.com/wp-content/uploads/2024/09/ruhrose-pants.jpg?fit=400%2C500&ssl=11"
            alt=""
          />
        </div>
        <div className=" w-full lg:w-1/2" data-aos="fade-up">
          <h2 className=" text-center lg:text-left text-[50px]  lg:text-[70px] font-extrabold leading-6 text-black mb-7">
            Production
          </h2>
          <h3 className=" text-center lg:text-left text-[32px] font-medium text-black">
            Never Compromising on Production Quality
          </h3>
          <p className=" text-center lg:text-left text-[20px] font-normal text-black mt-5">
            From the moment we receive the design to the completion of
            high-quality samples, speed is everything to us. Fashion doesn’t
            wait, so why should you? We accommodate small order quantities
            without compromising on sustainability.
          </p>

          <Link
            to={""}
            className=" group inline-flex w-[60px] h-[60px] items-center justify-center rounded-full mt-8 hover:bg-black duration-300 "
          >
            <IoArrowForwardCircleOutline className="  text-3xl group-hover:text-white " />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
