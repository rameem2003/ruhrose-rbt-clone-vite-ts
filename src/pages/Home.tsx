import { useEffect } from "react";
import Banner from "../components/screens/Home/Banner";
import SectionOne from "../components/screens/Home/SectionOne";
import SectionTwo from "../components/screens/Home/SectionTwo";
import SectionThree from "../components/screens/Home/SectionThree";
import SectionFour from "../components/screens/Home/SectionFour";

const Home = () => {
  useEffect(() => {
    console.log("Home");

    document.title = "Rivo";

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <Banner />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
    </>
  );
};

export default Home;
