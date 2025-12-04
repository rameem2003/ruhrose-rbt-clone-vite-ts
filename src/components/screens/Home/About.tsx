import ComponentReveal from "../../common/ComponentReveal";
import Container from "../../common/Container";
import banner2 from "../../../assets/banner2.jpg";
import { Link } from "react-router";

const About = () => {
  return (
    <section id="about" className=" bg-primary py-40">
      <Container>
        <div className=" flex items-start flex-wrap lg:flex-nowrap justify-between gap-4">
          <div className="  w-full lg:w-1/2">
            {/* <ComponentReveal x={-50}>
              <h2 className=" text-secondary  text-3xl md:text-3xl font-title-two font-bold mt-4 leading-[50px]">
                Connecting designers and brands with{" "}
                <span className=" font-title-three italic">
                  vetted overseas clothing factories
                </span>
              </h2>
            </ComponentReveal> */}

            <ComponentReveal y={-50}>
              <p className=" text-secondary  mt-4 text-base font-title-two font-medium">
                Rivo Canada Inc. is a sourcing, product development, and supply
                chain management company focused on connecting Canadian
                businesses with vetted, cost-efficient overseas factories
                capable of producing standard apparel, plus-size collections,
                and adaptive/disability-friendly clothing and products. Rivo
                Canada Inc is committed to connecting designers, suppliers, and
                clothing intelligent center with clothing brands all around the
                world.
              </p>

              <div className=" mt-10 f w-full flex-wrap xl:flex-nowrap items-start gap-5 justify-between">
                <div className=" w-full">
                  <h4 className=" text-secondary  text-xl font-title-two font-medium">
                    Our Mission
                  </h4>
                  <p className="  text-secondary mt-4 text-base font-title-two font-normal">
                    To empower Canadian brands by delivering affordable,
                    ethical, and innovative sourcing solutions—specializing in
                    markets underserved by traditional manufacturers, including
                    plus-size and adaptive/disability apparel.
                  </p>
                </div>
                <div className=" w-full">
                  <h4 className=" text-secondary  text-xl font-title-two font-medium">
                    Our Vision
                  </h4>
                  <p className=" text-secondary  mt-4 text-base font-title-two font-normal">
                    To become Canada’s most trusted and inclusive sourcing
                    partner, enabling companies of all sizes to produce
                    accessible, size-inclusive, and affordability-driven product
                    lines.
                  </p>
                </div>
              </div>

              <Link
                to="/about"
                className="cursor-pointer block text-center py-3 px-6 border-2 border-secondary w-full font-medium font-title-two text-secondary duration-300 hover:bg-secondary hover:text-white mt-10"
              >
                Read More
              </Link>
            </ComponentReveal>
          </div>

          <div className=" w-full lg:w-1/2">
            <ComponentReveal x={50}>
              <img
                className=" rounded-tl-2xl rounded-br-2xl w-full max-h-[700px] object-cover"
                src={banner2}
                alt="About company"
              />
            </ComponentReveal>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
