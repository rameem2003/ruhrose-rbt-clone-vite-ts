import { FaWhatsapp } from "react-icons/fa";

const Banner = () => {
  return (
    <section className="mt-10 flex items-center justify-center w-full p-4 py-40 lg:py-48 xl:py-16 xl:px-8 shadow-custom ">
      <div className=" flex flex-col md:flex-row items-center justify-center mx-3 2xl:mx-[120px] gap-10">
        <div className=" w-full lg:w-1/2" data-aos="fade-right">
          <h1 className=" text-[35px] text-center lg:text-left lg:text-[2.2rem] xl:text-[100px] font-extrabold leading-[1.2em]">
            Fashion Forward, Planet Friendly
          </h1>

          <p className=" text-center lg:text-left mt-4 text-[20px]  text-black leading-6 font-normal xl:w-[500px]">
            We specialise in delivering fast fashion sustainably, using organic
            and eco-friendly materials to reduce pollution with style.
          </p>

          <div className=" text-center mt-8 flex flex-col items-center">
            <a
              className=" mb-5 inline-block text-base font-normal text-white py-4 px-16 rounded-[100px] bg-black"
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
            >
              Profile
            </a>
            <a
              className=" inline-flex items-center justify-center gap-2 text-base font-normal text-white py-4 px-16 rounded-[100px] bg-black"
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp /> WhatsApp
            </a>
          </div>
        </div>
        <div className=" w-full lg:w-1/2">
          <img
            className="bounce-animation"
            src="https://i0.wp.com/www.ruhrose.com/wp-content/uploads/2025/01/Clothing-manufacturer-in-london-factory.jpg?resize=729%2C1024&ssl=1"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
