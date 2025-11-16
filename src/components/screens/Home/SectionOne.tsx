import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { Link } from "react-router";

const SectionOne = () => {
  return (
    <section className="my-20 flex items-center justify-center w-full p-4 py-40 lg:py-48 xl:py-16 xl:px-8 shadow-custom-one ">
      <div className=" flex flex-col md:flex-row items-center justify-center mx-3 2xl:mx-[120px] gap-10">
        <div className=" w-full lg:w-1/2" data-aos="fade-up">
          <h2 className=" text-center lg:text-left text-[50px]  lg:text-[70px] font-extrabold leading-6 text-black mb-7">
            Design
          </h2>
          <h3 className=" text-center lg:text-left  text-[32px] font-medium text-black">
            Always Pushing What’s Possible
          </h3>
          <p className="  text-center lg:text-left text-[20px] font-normal text-black mt-5">
            We’re continuously creating world-class designs based on client
            briefs. Within days, we’ve got digital samples ready to go and be
            transformed into stylish garments.
          </p>

          <Link
            to={""}
            className=" group inline-flex w-[60px] h-[60px] items-center justify-center rounded-full mt-8 hover:bg-black duration-300 "
          >
            <IoArrowForwardCircleOutline className="  text-3xl group-hover:text-white " />
          </Link>
        </div>
        <div className=" w-full lg:w-1/2">
          <img
            className="w-full"
            src="https://i0.wp.com/www.ruhrose.com/wp-content/uploads/2025/01/denim-design-pants-.jpg?resize=683%2C1024&ssl=1"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
