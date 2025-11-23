import ComponentReveal from "../../common/ComponentReveal";
import Container from "../../common/Container";

const Catagories = () => {
  return (
    <section className=" my-40">
      <Container>
        <div className="w-full">
          <ComponentReveal y={-50}>
            <h4 className=" text-2xl md:text-4xl font-title-two font-semibold">
              Our Catagories Lineup
            </h4>
          </ComponentReveal>

          <ComponentReveal y={-50}>
            <h2 className=" text-xl  w-auto md:w-[700px] font-title-two font-medium mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              similique expedita magni quasi aperiam dolorem placeat voluptatum
              repellat pariatur tempore, ipsum velit consectetur sed suscipit
              hic perspiciatis vitae, voluptates aspernatur esse mod inventore!
            </h2>
          </ComponentReveal>
        </div>
      </Container>
    </section>
  );
};

export default Catagories;
