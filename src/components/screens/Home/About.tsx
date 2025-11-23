import ComponentReveal from "../../common/ComponentReveal";
import Container from "../../common/Container";

const About = () => {
  return (
    <section className=" my-40">
      <Container>
        <div className=" flex items-start flex-wrap lg:flex-nowrap justify-between gap-4">
          <div className=" w-full lg:w-1/2">
            <ComponentReveal x={-50}>
              <h4 className=" text-xl md:text-2xl font-title-two font-medium">
                About Us
              </h4>
            </ComponentReveal>

            <ComponentReveal x={-50}>
              <h2 className=" text-3xl md:text-5xl font-title-two font-bold mt-4 leading-[50px] md:leading-[70px]">
                We are <span className=" font-title">Dynamic Company </span>
                to <span className=" font-title">Sustainable Fashion</span>
              </h2>
            </ComponentReveal>

            <ComponentReveal y={-50}>
              <p className=" mt-4 text-[20px] font-title-two font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam quod quibusdam quia quae quos quia quibusdam quia quae
                quos.
              </p>

              <div className=" flex w-full flex-wrap xl:flex-nowrap items-start gap-5 justify-between">
                <div className=" w-full xl:w-1/2">
                  <p className=" mt-4 text-sm font-title-two font-normal">
                    We specialize in supporting fashion and lifestyle brands
                    through sourcing, custom manufacturing, buying, design,
                    brand development, technical packs, quality control,
                    following, image production, logistics, sales & marketing of
                    fashion products. Deepwear is a fashion agency that has an
                    international reach to support businesses like your own.
                  </p>
                </div>
                <div className=" w-full xl:w-1/2">
                  <p className=" mt-4 text-sm font-title-two font-normal">
                    We specialize in supporting fashion and lifestyle brands
                    through sourcing, custom manufacturing, buying, design,
                    brand development, technical packs, quality control,
                    following, image production, logistics, sales & marketing of
                    fashion products. Deepwear is a fashion agency that has an
                    international reach to support businesses like your own.
                  </p>
                </div>
              </div>
            </ComponentReveal>
          </div>

          <div className=" w-full lg:w-1/2">
            <ComponentReveal x={50}>
              <img
                className=" w-full max-h-[700px] object-cover"
                src="https://plus.unsplash.com/premium_photo-1674624533701-b85191890413?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
