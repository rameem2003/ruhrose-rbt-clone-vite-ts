import { FaWhatsapp } from "react-icons/fa";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

import { BsArrowDown } from "react-icons/bs";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules

const Banner = () => {
  return (
    <>
      <section className="mt-10 items-center justify-center w-full p-4 py-40 lg:py-48 xl:py-16 xl:px-8 shadow-custom  hidden">
        <div className=" flex flex-col md:flex-row items-center justify-center mx-3 2xl:mx-[120px] gap-10">
          <div className=" w-full lg:w-1/2" data-aos="fade-right">
            <h1 className=" text-[35px] text-center lg:text-left lg:text-[2.2rem] xl:text-[100px] font-extrabold leading-[1.2em]">
              Fashion Forward, Planet Friendly
            </h1>

            <p className=" text-center lg:text-left mt-4 text-[20px]  text-black leading-6 font-normal xl:w-[500px]">
              We specialise in delivering fast fashion sustainably, using
              organic and eco-friendly materials to reduce pollution with style.
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

      <section className=" w-full h-screen relative">
        <Swiper
          loop={true}
          // speed={1000}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          spaceBetween={30}
          effect={"fade"}
          navigation={false}
          pagination={false}
          modules={[EffectFade, Autoplay, Navigation, Pagination]}
          className="mySwiper h-screen"
        >
          <SwiperSlide>
            <div className="h-full">
              <img
                className=" w-full h-full"
                src="https://images.unsplash.com/photo-1522753071498-f3137a65aee3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-full">
              <img
                className=" w-full h-full"
                src="https://images.unsplash.com/photo-1741275270905-b4c6e4c4b1aa?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </div>
          </SwiperSlide>
        </Swiper>

        <div className="w-full flex flex-col bg-black/65 items-center justify-center h-screen absolute top-0 left-0 z-10">
          <h1 className=" text-6xl md:text-9xl font-title font-extrabold text-center text-white">
            Site Title
          </h1>

          <p className="text-white w-auto lg:w-[700px] mx-auto mt-5 font-title-two text-center font-medium text-xl md:text-2xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat
            eligendi animi veniam porro nesciunt fugit modi,
          </p>

          <button className=" cursor-pointer">
            <BsArrowDown className=" text-white text-[60px] font-semibold mt-20" />
          </button>
        </div>
      </section>
    </>
  );
};

export default Banner;
