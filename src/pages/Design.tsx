import { useEffect } from "react";
import SectionOne from "../components/screens/Design/SectionOne";
import AOS from "aos";
import SectionTwo from "../components/screens/Design/SectionTwo";
import SectionThree from "../components/screens/Design/SectionThree";
import SectionFour from "../components/screens/Design/SectionFour";
import SectionFive from "../components/screens/Design/SectionFive";

const Design = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000, // Animation duration
    });
  }, []);
  return (
    <>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
    </>
  );
};

export default Design;
