const SectionTwo = () => {
  return (
    <section className="my-20 overflow-x-hidden flex items-center justify-center w-full p-4 py-40 lg:py-48 xl:p-16 shadow-custom-one ">
      <div className=" flex flex-col md:flex-row items-center justify-center mx-3 2xl:mx-[120px] gap-10">
        <div className=" w-full lg:w-1/2" data-aos="fade-right">
          <h2 className=" text-center lg:text-left text-[30px]  xl:text-[70px] font-extrabold  text-black ">
            We Design with Sustainability in Mind
          </h2>

          <p className="  text-center lg:text-left text-base xl:text-[20px] font-normal text-black mt-2">
            Sustainability remains at the heart of what we do. We oversee the
            entire production process, from handling the design to sourcing
            materials, ahead thinking about the kinds of materials we could use.
          </p>
        </div>
        <div className=" w-full lg:w-1/2" data-aos="fade-left">
          <img
            className="w-full"
            src="https://i0.wp.com/www.ruhrose.com/wp-content/uploads/2024/08/top-view-of-a-fashion-designer-drawing-a-fashion-s-2023-12-19-01-27-26-utc-1-scaled.jpg?resize=1024%2C1024&ssl=1"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
