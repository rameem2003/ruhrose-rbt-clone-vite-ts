import { Link } from "react-router";
import Container from "../../common/Container";
import ComponentReveal from "../../common/ComponentReveal";

const images = [
  "https://images.unsplash.com/photo-1522943854798-7ea1c5464eba?q=80&w=3274&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1498435999018-6803de1f1c1f?q=80&w=3273&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1541695226403-a09aa08e5135?q=80&w=3276&auto=format&fit=crop",

  "https://images.unsplash.com/photo-1609951651467-713256d1a3be?q=80&w=3328&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1525351326368-efbb5cb6814d?q=80&w=3181&auto=format&fit=crop",

  "https://images.unsplash.com/34/BA1yLjNnQCI1yisIZGEi_2013-07-16_1922_IMG_9873.jpg?q=80&w=3271&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1581472723648-909f4851d4ae?q=80&w=3270&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1635321856129-af8531379f4b?q=80&w=3000&auto=format&fit=crop",

  "https://images.unsplash.com/photo-1586348943529-beaae6c28db9?q=80&w=3230&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1579888286284-692fa4bdc42b?q=80&w=3280&auto=format&fit=crop",

  "https://images.unsplash.com/photo-1529369623266-f5264b696110?q=80&w=3174&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1583513702439-2e611c58e93d?q=80&w=3269&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=3327&auto=format&fit=crop",
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
