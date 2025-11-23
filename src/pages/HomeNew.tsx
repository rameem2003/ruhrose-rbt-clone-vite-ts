import About from "../components/screens/Home/About";
import Banner from "../components/screens/Home/Banner";
import Catagories from "../components/screens/Home/Catagories";
import Varity from "../components/screens/Home/Varity";

const HomeNew = () => {
  return (
    <main className=" overflow-x-hidden">
      <Banner />
      <About />
      <Varity />
      <Catagories />
    </main>
  );
};

export default HomeNew;
