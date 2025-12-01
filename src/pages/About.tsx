import ComponentReveal from "../components/common/ComponentReveal";
import Container from "../components/common/Container";
import about2 from "../assets/about2.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <main className={`  bg-primary py-10 `}>
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
            src={about2}
            alt="about image"
          />
        </motion.div>

        <div>
          <div className=" mt-20">
            <div className="">
              <ComponentReveal x={-50} delay={1}>
                <h1 className=" text-secondary  text-xl md:text-6xl font-title-two font-bold">
                  About Rivo
                </h1>
              </ComponentReveal>

              <ComponentReveal x={-50} delay={1}>
                <h2 className=" text-secondary text-base md:text-xl text-justify lg:text-left lg:text-2xl font-title-two font-bold mt-4">
                  At Rivo Canada Inc., we believe that apparel manufacturing
                  should be defined by trust, transparency, and responsibility.
                  Based in Calgary and built on over 40 years of combined
                  industry expertise, we are setting a new standard in global
                  manufacturing—empowering brands with the clarity, integrity,
                  and craftsmanship they deserve at every stage of their
                  journey.
                </h2>
              </ComponentReveal>

              <ComponentReveal y={-50}>
                <p className=" text-secondary  mt-4 text-sm text-justify lg:text-left lg:text-[20px] font-title-two font-medium">
                  We understand the challenges brands face—complex supply
                  chains, inconsistent quality, and unclear communication.
                  That’s why Rivo Canada Inc. exists: to be your reliable
                  partner, guiding you from concept to creation with unwavering
                  dedication and hands-on support.
                </p>

                <div className=" mt-10 flex w-full flex-wrap xl:flex-nowrap items-start gap-5 justify-between">
                  <div className=" w-full xl:w-1/2">
                    <h4 className=" text-secondary  text-xl font-title-two font-medium">
                      Our Purpose
                    </h4>
                    <p className="  text-secondary mt-4 text-sm font-title-two font-normal">
                      We connect apparel brands to rigorously vetted factory
                      partners worldwide, ensuring every step is seamless and
                      ethical. Our team brings not only strategic production
                      solutions but also deep insights that enable your brand to
                      grow confidently and sustainably.
                    </p>
                  </div>
                </div>

                <div className=" mt-10 flex w-full flex-wrap xl:flex-nowrap items-start gap-5 justify-between">
                  <div className=" w-full xl:w-1/2">
                    <h4 className=" text-secondary  text-xl font-title-two font-medium">
                      Our Mission
                    </h4>
                    <p className="  text-secondary mt-4 text-base font-title-two font-normal">
                      To empower Canadian brands by delivering affordable,
                      ethical, and innovative sourcing solutions—specializing in
                      markets underserved by traditional manufacturers,
                      including plus-size and adaptive/disability apparel.
                    </p>
                  </div>
                  <div className=" w-full xl:w-1/2">
                    <h4 className=" text-secondary  text-xl font-title-two font-medium">
                      Our Vision
                    </h4>
                    <p className=" text-secondary  mt-4 text-base font-title-two font-normal">
                      To become Canada’s most trusted and inclusive sourcing
                      partner, enabling companies of all sizes to produce
                      accessible, size-inclusive, and affordability-driven
                      product lines.
                    </p>
                  </div>
                </div>
                <div>
                  <section className=" px-6 py-12">
                    <h2 className="text-3xl sm:text-4xl text-secondary font-bold text-center mb-8">
                      Why Work With Us
                    </h2>

                    <ul className="space-y-5">
                      <li className="flex gap-3">
                        <span className="text-secondary text-xl">✔</span>
                        <p className="text-secondary">
                          <strong>Authentic Experience:</strong> Over 40 years
                          of combined industry leadership, focused on delivering
                          excellence.
                        </p>
                      </li>

                      <li className="flex gap-3">
                        <span className="text-secondary text-xl">✔</span>
                        <p className="text-secondary">
                          <strong>Transparent Communication:</strong> Proactive,
                          honest updates at every stage—so you’re always
                          informed and empowered.
                        </p>
                      </li>

                      <li className="flex gap-3">
                        <span className="text-secondary text-xl">✔</span>
                        <p className="text-secondary">
                          <strong>Responsible Sourcing:</strong> Ethical,
                          environmentally-conscious factory partnerships that
                          align with your values.
                        </p>
                      </li>

                      <li className="flex gap-3">
                        <span className="text-secondary text-xl">✔</span>
                        <p className="text-secondary">
                          <strong>Uncompromising Quality:</strong> Stringent
                          standards applied from initial sampling to final
                          delivery.
                        </p>
                      </li>

                      <li className="flex gap-3">
                        <span className="text-secondary text-xl">✔</span>
                        <p className="text-secondary">
                          <strong>Growth-Driven Partnership:</strong> Whether
                          you’re launching or scaling, we act as a true
                          extension of your team.
                        </p>
                      </li>
                    </ul>
                  </section>
                </div>

                <div className=" w-full ">
                  <h4 className=" text-secondary  text-xl font-title-two font-medium">
                    Our Commitment
                  </h4>
                  <p className="  text-secondary mt-4 text-sm font-title-two font-normal">
                    Founders Pervez and Shimon are driven by a passion for
                    building enduring relationships rooted in integrity and
                    sustainability. At Rivo Canada Inc., we do more than
                    manufacture apparel—we help shape brands prepared to thrive
                    responsibly in today’s competitive global market.
                  </p>
                </div>
              </ComponentReveal>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default About;
