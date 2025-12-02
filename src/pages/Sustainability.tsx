import Container from "../components/common/Container";
import { motion } from "framer-motion";
import sustainiability from "../assets/sustainiability.jpg";
import sustainiability2 from "../assets/sustainiability2.jpg";
import ComponentReveal from "../components/common/ComponentReveal";
import { useEffect } from "react";
import Contact from "../components/common/Contact";
const Sustainability = () => {
  useEffect(() => {
    document.title = "Sustainability";

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <main className=" py-10 bg-primary">
      <Container>
        <div className=" py-20 text-center">
          <ComponentReveal x={-50} delay={1}>
            <h1 className=" text-secondary text-4xl  sm:text-6xl md:text-[70px] lg:text-[90px] xl:text-[120px] font-title-two font-bold">
              Sustainability
            </h1>
          </ComponentReveal>
          <ComponentReveal x={-50} delay={1}>
            <h2 className=" text-secondary text-base md:text-xl text-center  font-title-two font-bold mt-4">
              At Rivo Canada Inc., sustainability isn’t a trend - it’s a
              responsibility. Every decision we make, from material selection to
              factory partnerships, is guided by the belief that fashion should
              respect both people and the planet. We work closely with
              manufacturers who follow ethical labor practices, maintain
              transparent operations, and continually invest in cleaner, safer
              production methods.
            </h2>
          </ComponentReveal>
        </div>

        <div className=" w-full mb-10">
          <ComponentReveal x={50} delay={1}>
            <p className=" text-secondary  mt-4 text-base mb-5 font-title-two font-medium">
              We prioritize environmentally responsible materials such as
              organic cotton, recycled fibers, low-impact dyes, and certified
              sustainable textiles. Our team evaluates the environmental
              footprint of each stage of development - helping clients create
              products that reduce waste, conserve resources, and support
              long-term circularity.
            </p>

            <div className=" gap-5 flex-wrap lg:flex-nowrap flex items-center justify-between">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.5,
                  delay: 0.8,
                  ease: "easeInOut",
                  bounce: 0.5,
                  type: "spring",
                }}
                className=" w-full lg:w-1/2"
              >
                <img
                  className=" mt-10  h-auto lg:h-[600px] w-full object-cover "
                  src={sustainiability2}
                  alt="Sustainability"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.5,
                  delay: 0.8,
                  ease: "easeInOut",
                  bounce: 0.5,
                  type: "spring",
                }}
                className=" w-full lg:w-1/2"
              >
                <img
                  className=" mt-10  h-auto lg:h-[600px] w-full object-top"
                  src={sustainiability}
                  alt="Sustainability"
                />
              </motion.div>
            </div>

            <div className=" flex w-full flex-wrap xl:flex-nowrap items-start gap-5 justify-between">
              <div className=" w-full xl:w-1/2">
                <p className="  text-secondary mt-4 text-base font-title-two font-normal">
                  Sustainable fashion is not just about choosing better fabrics;
                  it’s about designing smarter. We help brands optimize
                  patterns, reduce excess inventory, and develop timeless pieces
                  that stay relevant beyond the season. By combining thoughtful
                  design with responsible sourcing, we help our clients build
                  collections that perform well commercially while contributing
                  to a more sustainable industry.
                </p>
              </div>
              <div className=" w-full xl:w-1/2">
                <p className=" text-secondary  mt-4 text-base font-title-two font-normal">
                  With Rivo Canada Inc., you don’t have to choose between
                  quality, creativity, and sustainability - you can have all
                  three.
                </p>
              </div>
            </div>
          </ComponentReveal>
        </div>
      </Container>
      <Contact />
    </main>
  );
};

export default Sustainability;
