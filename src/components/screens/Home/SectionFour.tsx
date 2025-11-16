const SectionFour = () => {
  return (
    <section className="mt-10 flex items-center justify-center w-full p-4 py-16 lg:py-48 xl:py-16 xl:px-8 shadow-custom ">
      <div className=" items-center justify-center mx-3 xl:mx-[120px] gap-10">
        <h2 className=" text-[30px] md:text-[45px] lg:text-[70px] font-extrabold leading-[1.2em] text-center">
          Be the Change You Want to See
        </h2>

        <p className=" mx-auto mt-8 w-auto lg:w-[500px] text-[20px] font-normal text-center">
          We’ve only got one planet. It takes all of us to look after it. That’s
          why we’ve partnered with global fashion brands, filling their high
          streets stores with sustainable clothing.
        </p>

        <div className="text-center">
          <a
            className=" mt-5 inline-block text-base font-normal text-white py-4 px-16 rounded-[100px] bg-black"
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default SectionFour;
