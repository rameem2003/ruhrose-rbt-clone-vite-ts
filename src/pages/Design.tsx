import Container from "../components/common/Container";
import ComponentReveal from "../components/common/ComponentReveal";
import design1 from "../assets/design1.jpg";
import { motion } from "framer-motion";
const Design = () => {
  return (
    <main className=" py-10 bg-primary">
      <Container>
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

        <ComponentReveal x={50} delay={1}>
          <h2 className=" text-secondary  text-3xl md:text-6xl font-title-three font-bold mt-4 leading-[50px] md:leading-[70px]">
            Design that{" "}
            <span className=" font-title-three italic">
              moves with the industry
            </span>
          </h2>

          <p className=" text-secondary  mt-4 text-sm mb-5 font-title-two font-medium">
            At Rivo Canada Inc., every collection starts with clarity. We take
            the time to understand a brand’s vision - its goals, audience, and
            creative direction and then develop products that reflect that
            identity with purpose. Rather than simply translating drawings into
            clothing, we craft pieces that are meaningful, market-ready, and
            aligned with your brand’s story.
          </p>
          <p className=" text-secondary  mt-4 text-sm mb-5 font-title-two font-medium">
            Our work extends far beyond design. We study trends, materials,
            construction methods, and cost efficiencies to ensure each style is
            both visually compelling and practical to produce. The result is
            apparel that performs well in the market - manufactured efficiently,
            priced strategically, and tailored to the customer it’s created for.
          </p>

          <div className=" flex w-full flex-wrap xl:flex-nowrap items-start gap-5 justify-between">
            <div className=" w-full xl:w-1/2">
              <p className="  text-secondary mt-4 text-sm font-title-two font-normal">
                From everyday essentials to unique statement items, we support
                brands at all stages of development. Whether you're building
                your first style or scaling a full assortment, our partnerships
                with reliable factories, technical teams, and quality
                specialists ensure a consistent and professional outcome every
                time.
              </p>
            </div>
            <div className=" w-full xl:w-1/2">
              <p className=" text-secondary  mt-4 text-sm font-title-two font-normal">
                We keep the entire process organized, transparent, and guided.
                By helping brands avoid common production pitfalls, we simplify
                the path from concept to finished garment. With Rivo Canada
                Inc., product creation becomes a smooth, thoughtful, and
                achievable experience - exactly how modern apparel development
                should feel.
              </p>
            </div>
          </div>
        </ComponentReveal>
      </Container>
    </main>
  );
};

export default Design;
