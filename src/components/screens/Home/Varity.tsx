import { Link } from "react-router";
import Container from "../../common/Container";
import ComponentReveal from "../../common/ComponentReveal";
import small1 from "../../../assets/small.jpg";
import small2 from "../../../assets/small0.jpg";
import small3 from "../../../assets/small3.jpg";
import small4 from "../../../assets/small4.jpg";
import small5 from "../../../assets/small5.jpg";
import small6 from "../../../assets/small6.jpg";
import small7 from "../../../assets/small7.jpg";
import small8 from "../../../assets/small8.jpg";
import small11 from "../../../assets/small11.jpg";
import small12 from "../../../assets/sustainiability1.jpg";
import sustainiability2 from "../../../assets/sustainiability2.jpg";
import production from "../../../assets/productionimg.jpg";
import about from "../../../assets/about1.jpg";

const images = [
  small1,
  small2,
  small3,
  small4,
  small5,
  small6,
  small7,
  small8,
  small11,
  small12,
  sustainiability2,
  production,
  about,
];

const Varity = () => {
  return (
    <section id="design" className=" py-40">
      <Container>
        <div className="  flex flex-wrap lg:flex-nowrap items-center justify-between gap-20">
          <div className=" w-full lg:w-1/2">
            <ComponentReveal x={-50}>
              <div className=" flex items-center flex-wrap justify-between gap-1 md:hidden">
                {images.slice(0, 6).map((src, i) => (
                  <div key={i} className="w-[48%]">
                    <img src={src} alt="" className="gallery_img" />
                  </div>
                ))}
              </div>

              <article className="gallery_wrapper gap-2 justify-center hidden! md:grid!">
                {images.map((src, i) => (
                  <img key={i} src={src} alt="" className="gallery_img" />
                ))}
              </article>
            </ComponentReveal>
          </div>
          <div className=" w-full lg:w-1/2">
            <ComponentReveal x={50}>
              <h2 className=" text-primary  text-3xl md:text-6xl font-title-three font-bold mt-4 leading-[50px] md:leading-[70px]">
                Design that{" "}
                <span className=" font-title-three italic">
                  moves with the industry
                </span>
              </h2>

              <p className=" text-primary  mt-4 text-sm mb-5 font-title-two font-medium">
                At Rivo Canada Inc., every collection starts with clarity. We
                take the time to understand a brand’s vision - its goals,
                audience, and creative direction and then develop products that
                reflect that identity with purpose. Rather than simply
                translating drawings into clothing, we craft pieces that are
                meaningful, market-ready, and aligned with your brand’s story.
              </p>

              <Link
                to="/design"
                className="cursor-pointer block text-center py-3 px-6 border-2 border-primary  w-full font-medium font-title-two text-primary duration-300 hover:bg-primary   hover:text-white mt-10"
              >
                Read More
              </Link>
            </ComponentReveal>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Varity;
