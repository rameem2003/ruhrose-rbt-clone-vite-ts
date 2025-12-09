import { useParams } from "react-router";
import ComponentReveal from "../components/common/ComponentReveal";
import Container from "../components/common/Container";
import { useEffect, useState } from "react";
import { services } from "../constant/Services";
import ErrorComponent from "../components/common/ErrorComponent";
import Contact from "../components/common/Contact";

const ServiceDetail = () => {
  const [serviceData, setServiceData] = useState<any | null>(null);
  const { label } = useParams();

  useEffect(() => {
    let filter = services.filter((item) => item.label === label);
    setServiceData(filter[0]);
  }, [label]);
  console.log(serviceData);

  useEffect(() => {
    document.title = `${label} || Rivo Canada Inc.` || "Rivo Canada Inc.";

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [label]);

  if (!serviceData) {
    return (
      <main className=" bg-primary py-40">
        <Container>
          <ErrorComponent />
        </Container>
      </main>
    );
  }

  return (
    <main className=" bg-primary py-10">
      <Container>
        <div className=" py-20 ">
          <ComponentReveal x={-50} delay={1}>
            <h1 className=" text-secondary text-4xl mb-10  sm:text-6xl md:text-[70px] lg:text-[90px] xl:text-[120px] font-title-two font-bold">
              {serviceData?.label}
            </h1>
          </ComponentReveal>
          <ComponentReveal x={-50} delay={1}>
            {serviceData?.description
              .split("\n")
              .map((line: string, i: number) => (
                <p
                  key={i}
                  className=" text-base md:text-xl   font-title-two font-bold mt-4 text-left text-secondary overflow-hidden mb-5 "
                >
                  {line}
                </p>
              ))}
          </ComponentReveal>

          <ComponentReveal x={50} delay={1}>
            <div className=" flex items-center justify-between">
              {serviceData?.image.length == 1 ? (
                <img
                  className=" mt-10 w-full  h-auto lg:h-[600px] object-cover"
                  src={serviceData?.image[0]}
                  alt="about image"
                />
              ) : (
                serviceData?.image.map((image: string, i: number) => (
                  <img
                    key={i}
                    className=" mt-10 w-[48%]  h-auto lg:h-[600px] object-cover"
                    src={image}
                    alt="about image"
                  />
                ))
              )}
            </div>
          </ComponentReveal>

          <ComponentReveal y={-50} delay={1}>
            {serviceData?.subService && (
              <div className=" mt-10">
                <h2 className=" text-secondary font-title-three font-semibold text-xl">
                  {serviceData?.subService.label}
                </h2>
                <ul className=" mt-5 list-decimal ml-5">
                  {serviceData?.subService.list.map(
                    (item: string, index: number) => (
                      <li
                        className=" text-white font-title-two mb-2"
                        key={index}
                      >
                        {item}
                      </li>
                    )
                  )}
                </ul>
              </div>
            )}
          </ComponentReveal>
        </div>
      </Container>

      <div className=" mb-10">
        <Contact />
      </div>
    </main>
  );
};

export default ServiceDetail;
