const SectionOne = () => {
  return (
    <section className="mt-10 flex items-center justify-center w-full px-4 py-8  xl:py-16 xl:px-8 shadow-custom ">
      <div className=" flex relative flex-col xl:flex-row items-center justify-center mx-2 2xl:mx-[120px] gap-10">
        <div
          className=" shadow-custom-two static rounded-lg p-4 xl:px-[80px] xl:py-[100px] w-full xl:w-1/2 left-5 xl:left-10 xl:relative "
          data-aos="fade-right"
        >
          <h2 className=" text-center lg:text-left text-[40px] 2xl:text-[70px] font-extrabold  text-black mb-7">
            Everything Starts With The Design
          </h2>
          <h3 className=" text-center lg:text-left text-[32px] font-medium text-black">
            Fashion never stands still. Neither do we.
          </h3>
          <p className=" text-center lg:text-left text-[20px] font-normal text-black mt-5">
            Brands are coming to us, bursting with new ideas for the coming
            season. Ruhrose transforms those exciting ideas into tangible,
            true-to-life designs ready for the production line. We work with
            brands every step of the way, producing everything from stylish
            streetwear to cosy couture
          </p>
        </div>
        <div
          className=" shadow-custom-two static rounded-lg overflow-hidden w-full xl:w-1/2 right-5 xl:right-10 xl:relative"
          data-aos="fade-left"
        >
          <img
            className=" w-full"
            src="https://i0.wp.com/www.ruhrose.com/wp-content/uploads/2024/08/designer-drawing-fashion-illustration-2023-11-27-05-20-03-utc-1-scaled.jpg?resize=1024%2C1536&ssl=1"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
