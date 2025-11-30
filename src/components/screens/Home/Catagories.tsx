import { useState } from "react";
import { services } from "../../../constant/Services";
import ComponentReveal from "../../common/ComponentReveal";
import Container from "../../common/Container";
import { FaChevronDown } from "react-icons/fa";

const Catagories = () => {
  const [isAccordingOpen, setIsAccordingOpen] = useState<number | null>(0);

  const handleClick = (index: number | null) => {
    setIsAccordingOpen((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <section id="services" className="  py-40">
      <Container>
        <div className="w-full">
          <ComponentReveal y={-50}>
            <h4 className=" text-primary text-3xl md:text-6xl font-title-two font-bold mt-4 leading-[50px] md:leading-[70px]">
              Our <span className=" font-title-three">Services</span>
            </h4>
          </ComponentReveal>

          <ComponentReveal y={-50}>
            <h2 className=" text-primary text-xl  w-auto md:w-[700px] font-title-two font-medium mt-4">
              We offer a range of services to help you bring your designs to
              life, from sourcing and production to supply chain management and
              product development.
            </h2>
          </ComponentReveal>
        </div>

        <div className=" mt-10">
          {services?.map((according, index) => (
            <ComponentReveal y={-50} delay={index * 0.1} key={index}>
              <article key={index} className=" bg-primary mb-5 rounded p-3">
                <div
                  className="flex gap-2 cursor-pointer items-center justify-between w-full"
                  onClick={() => handleClick(index)}
                >
                  <h2 className="text-secondary font-title-three font-bold text-2xl">
                    {according.label}
                  </h2>
                  <p>
                    <FaChevronDown
                      className={`text-[1.2rem] text-secondary text-text transition-all duration-300 ${
                        isAccordingOpen === index && "rotate-180 "
                      }`}
                    />
                  </p>
                </div>
                <div
                  className={`grid transition-all duration-300 overflow-hidden ease-in-out ${
                    isAccordingOpen === index
                      ? "grid-rows-[1fr] opacity-100 mt-4"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  {isAccordingOpen === index &&
                    according.description.split("\n").map((line, i) => (
                      <p
                        key={i}
                        className=" text-white font-title-two overflow-hidden mb-5 "
                      >
                        {line}
                      </p>
                    ))}
                </div>

                {isAccordingOpen === index && according.subService && (
                  <div className=" mt-10 ml-3">
                    <h2 className=" text-secondary font-title-three font-semibold text-xl">
                      {according.subService.label}
                    </h2>
                    <ul className=" mt-5 list-decimal ml-5">
                      {according.subService.list.map((item, index) => (
                        <li
                          className=" text-white font-title-two mb-2"
                          key={index}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </article>
            </ComponentReveal>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Catagories;
