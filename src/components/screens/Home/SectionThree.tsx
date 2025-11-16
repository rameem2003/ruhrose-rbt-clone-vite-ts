import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { Link } from "react-router";
const SectionThree = () => {
  return (
    <section className="my-20 flex items-center justify-center w-full p-4 py-40 lg:py-48 xl:py-16 xl:px-8 shadow-custom-one ">
      <div className=" flex flex-col md:flex-row items-center justify-center mx-3 2xl:mx-[120px] gap-10">
        <div className=" w-full lg:w-1/2" data-aos="fade-up">
          <h2 className=" text-center lg:text-left text-[40px] lg:text-[70px] font-extrabold leading-6 text-black mb-7">
            Sustainability
          </h2>
          <h3 className=" text-center lg:text-left text-[32px] font-medium text-black">
            Fast Fashion That’s Forward Thinking
          </h3>
          <p className=" text-center lg:text-left text-[20px] font-normal text-black mt-5">
            We’re a sustainable clothing manufacturer. We design and produce
            using organic and recycled materials and employ water- and
            energy-saving technologies to minimise the environmental impact of
            every thread. Your customers will be stylish today so future
            generations can have a better tomorrow.
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
            src="https://i0.wp.com/www.ruhrose.com/wp-content/uploads/2024/08/cropped-shot-of-a-group-of-people-holding-plants-g-2023-11-27-05-21-39-utc-1-scaled.jpg?fit=500%2C550&ssl=1"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default SectionThree;
