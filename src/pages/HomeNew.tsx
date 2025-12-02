import { useEffect } from "react";
import About from "../components/screens/Home/About";
import Banner from "../components/screens/Home/Banner";
import Catagories from "../components/screens/Home/Catagories";
import Sustainability from "../components/screens/Home/Sustainability";
import Varity from "../components/screens/Home/Varity";
import Contact from "../components/common/Contact";

const HomeNew = () => {
  useEffect(() => {
    console.log("Home");

    document.title = "Rivo";

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <main className=" overflow-x-hidden">
      <Banner />
      <About />
      <Varity />
      <Sustainability />
      <Catagories />
      <Contact />
    </main>
  );
};

export default HomeNew;
