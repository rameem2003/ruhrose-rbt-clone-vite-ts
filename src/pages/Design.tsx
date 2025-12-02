import Container from "../components/common/Container";
import ComponentReveal from "../components/common/ComponentReveal";
import design1 from "../assets/design1.jpg";
import { motion } from "framer-motion";
import { useEffect } from "react";
import Contact from "../components/common/Contact";
const Design = () => {
  useEffect(() => {
    document.title = "Design";

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
              Design that{" "}
              <span className=" font-title-three italic">
                moves with the industry
              </span>
            </h1>
          </ComponentReveal>
          <ComponentReveal x={-50} delay={1}>
            <h2 className=" text-secondary text-base md:text-xl text-center  font-title-two font-bold mt-4">
              At Rivo Canada Inc., every collection starts with clarity. We take
              the time to understand a brand’s vision - its goals, audience, and
              creative direction and then develop products that reflect that
              identity with purpose. Rather than simply translating drawings
              into clothing, we craft pieces that are meaningful, market-ready,
              and aligned with your brand’s story.
            </h2>
          </ComponentReveal>
        </div>
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
        >
          <img
            className=" mt-10  h-auto lg:h-[600px] w-full object-cover"
            src={design1}
            alt=" Design image"
          />
        </motion.div>

        <div className=" mb-10">
          <ComponentReveal x={50} delay={1}>
            <p className=" text-secondary  mt-4 text-sm mb-5 font-title-two font-medium">
              Our work extends far beyond design. We study trends, materials,
              construction methods, and cost efficiencies to ensure each style
              is both visually compelling and practical to produce. The result
              is apparel that performs well in the market - manufactured
              efficiently, priced strategically, and tailored to the customer
              it’s created for.
            </p>

            <div className=" flex w-full flex-wrap xl:flex-nowrap items-start gap-5 justify-between">
              <div className=" w-full xl:w-1/2">
                <p className="  text-secondary mt-4 text-sm font-title-two font-normal">
                  From everyday essentials to unique statement items, we support
                  brands at all stages of development. Whether you're building
                  your first style or scaling a full assortment, our
                  partnerships with reliable factories, technical teams, and
                  quality specialists ensure a consistent and professional
                  outcome every time.
                </p>
              </div>
              <div className=" w-full xl:w-1/2">
                <p className=" text-secondary  mt-4 text-sm font-title-two font-normal">
                  We keep the entire process organized, transparent, and guided.
                  By helping brands avoid common production pitfalls, we
                  simplify the path from concept to finished garment. With Rivo
                  Canada Inc., product creation becomes a smooth, thoughtful,
                  and achievable experience - exactly how modern apparel
                  development should feel.
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

export default Design;
