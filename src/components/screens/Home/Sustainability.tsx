import Container from "../../common/Container";
import ComponentReveal from "../../common/ComponentReveal";
import sustainiability1 from "../../../assets/sustainiability1.jpg";
import { Link } from "react-router";

const Sustainability = () => {
  return (
    <section id="sustainability" className=" py-40 bg-primary">
      <Container>
        <div className="  flex flex-wrap lg:flex-nowrap items-center justify-between gap-20">
          <div className=" w-full lg:w-1/2">
            <ComponentReveal x={50}>
              <h2 className=" text-secondary  text-3xl md:text-6xl font-title-three font-bold mt-4 leading-[50px] md:leading-[70px]">
                Sustainability
              </h2>

              <p className=" text-secondary  mt-4 text-sm mb-5 font-title-two font-medium">
                At Rivo Canada Inc., sustainability isn’t a trend - it’s a
                responsibility. Every decision we make, from material selection
                to factory partnerships, is guided by the belief that fashion
                should respect both people and the planet. We work closely with
                manufacturers who follow ethical labor practices, maintain
                transparent operations, and continually invest in cleaner, safer
                production methods.
              </p>

              <Link
                to="/sustainability"
                className="cursor-pointer block text-center py-3 px-6 border-2 border-secondary w-full font-medium font-title-two text-secondary duration-300 hover:bg-secondary hover:text-white mt-10"
              >
                Read More
              </Link>
            </ComponentReveal>
          </div>
          <div className=" w-full lg:w-1/2">
            <ComponentReveal x={-50}>
              <img
                className=" rounded-tl-2xl rounded-br-2xl w-full max-h-[700px] object-cover"
                src={sustainiability1}
                alt="Sustainability"
              />
            </ComponentReveal>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Sustainability;
