import { useEffect } from "react";
import Banner from "../components/screens/Home/Banner";
import SectionOne from "../components/screens/Home/SectionOne";
import SectionTwo from "../components/screens/Home/SectionTwo";
import SectionThree from "../components/screens/Home/SectionThree";
import AOS from "aos";
import "aos/dist/aos.css"; //
import SectionFour from "../components/screens/Home/SectionFour";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1800, // Animation duration
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
