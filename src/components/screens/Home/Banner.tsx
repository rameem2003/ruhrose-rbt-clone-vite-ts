import { FaWhatsapp } from "react-icons/fa";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

import banner from "../../../assets/banner.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ComponentReveal from "../../common/ComponentReveal";

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

      <section id="home" className=" w-full h-screen relative">
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
              <img className=" w-full h-full object-cover" src={banner} />
            </div>
          </SwiperSlide>
        </Swiper>

        <div className="w-full hidden  translate-y-[300px] flex pt-20 lg:pt-40 flex-col  items-center justify-center h-screen absolute top-0 left-0 z-10">
          <div className=" px-20 rounded-md  bg-white/80 shadow-xl backdrop-blur-3xl">
            <ComponentReveal y={-50}>
              <h1 className=" text-6xl  font-title-three font-extrabold text-center text-secondary">
                RIVO <span className=" italic">Canada</span>
              </h1>
            </ComponentReveal>

            <ComponentReveal y={-50} delay={0.8}>
              <p className="text-secondary w-auto lg:w-[700px] mx-auto mt-5 font-title-three text-center font-medium text-xl ">
                We take a fully hands-on approach, managing every stage of the
                supply chain—from the first idea to final delivery
              </p>
            </ComponentReveal>
            {/* <div className=" text-center">
              <button className="  mt-10 w-[60px] h-[60px] cursor-pointer animate-bounce rounded-full inline-flex items-center justify-center bg-transparent hover:bg-white duration-300">
                <BsArrowDown className=" text-secondary hover:text-black text-3xl font-semibold" />
              </button>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
