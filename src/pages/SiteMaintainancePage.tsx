import image from "../assets/Ilustration.png";

const SiteMaintainancePage = () => {
  return (
    <main className=" bg-primary h-screen w-full flex items-center justify-center">
      <div className=" px-10 md:p-0 flex flex-col md:flex-row items-center justify-center gap-20">
        <div className=" w-full md:w-7/12">
          <img src={image} alt="Ilustration" />
        </div>
        <div className=" w-full md:w-5/12">
          <h2 className=" text-center md:text-left text-7xl font-title-three font-extrabold text-secondary">
            Oh Snap!
          </h2>
          <h3 className=" text-center md:text-left text-2xl font-title-three font-bold text-secondary my-2">
            This site is under maintainance
          </h3>
          <p className=" text-center md:text-left text-white font-title-two text-lg">
            We are currently working on improving our website. Please check back
            soon!
          </p>

          <h3 className=" text-center md:text-left text-3xl font-title-three text-secondary mt-4 font-bold">
            Rivo Canada Inc.
          </h3>
        </div>
      </div>
    </main>
  );
};

export default SiteMaintainancePage;
