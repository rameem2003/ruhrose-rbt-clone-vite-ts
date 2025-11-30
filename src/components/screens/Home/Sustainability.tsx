import Container from "../../common/Container";
import ComponentReveal from "../../common/ComponentReveal";
import sustainablity from "../../../assets/sustainablity.jpg";

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
              <p className=" text-secondary  mt-4 text-sm mb-5 font-title-two font-medium">
                We prioritize environmentally responsible materials such as
                organic cotton, recycled fibers, low-impact dyes, and certified
                sustainable textiles. Our team evaluates the environmental
                footprint of each stage of development - helping clients create
                products that reduce waste, conserve resources, and support
                long-term circularity.
              </p>

              <div className=" flex w-full flex-wrap xl:flex-nowrap items-start gap-5 justify-between">
                <div className=" w-full xl:w-1/2">
                  <p className="  text-secondary mt-4 text-sm font-title-two font-normal">
                    Sustainable fashion is not just about choosing better
                    fabrics; it’s about designing smarter. We help brands
                    optimize patterns, reduce excess inventory, and develop
                    timeless pieces that stay relevant beyond the season. By
                    combining thoughtful design with responsible sourcing, we
                    help our clients build collections that perform well
                    commercially while contributing to a more sustainable
                    industry.
                  </p>
                </div>
                <div className=" w-full xl:w-1/2">
                  <p className=" text-secondary  mt-4 text-sm font-title-two font-normal">
                    With Rivo Canada Inc., you don’t have to choose between
                    quality, creativity, and sustainability - you can have all
                    three.
                  </p>
                </div>
              </div>
            </ComponentReveal>
          </div>
          <div className=" w-full lg:w-1/2">
            <ComponentReveal x={-50}>
              <img
                className=" rounded-tl-2xl rounded-br-2xl w-full max-h-[700px] object-cover"
                src={sustainablity}
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
