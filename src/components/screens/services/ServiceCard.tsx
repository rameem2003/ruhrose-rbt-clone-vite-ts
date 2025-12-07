import { Link } from "react-router";

const ServiceCard = ({
  data,
}: {
  data: {
    label: string;
    image: string[] | null;
    description: string;
  };
}) => {
  return (
    <div className="w-full mx-2 md:w-[48%] lg:w-[31%] h-[300px] mb-10 relative overflow-hidden group cursor-pointer rounded-md">
      {/*  image  */}
      <img
        src={data.image ? data.image[0] : ""}
        alt="animated_card"
        className="w-full h-full object-cover group-hover:scale-[1.1] transition-all duration-700"
      />

      {/*  text  */}
      <div className="absolute top-[45%] transform group-hover:translate-y-[-45%] transition-all duration-500 w-full h-full left-0 z-20 right-0 flex items-center justify-center flex-col">
        <h1 className="text-[1.5rem] font-bold text-white text-center capitalize">
          {data.label}
        </h1>

        <Link
          to={`/service/${data.label}`}
          className="bg-secondary z-[1-] opacity-0 group-hover:z-20 group-hover:opacity-100 px-3 py-2 mt-3  transition-all duration-1000 text-white rounded-md text-[0.9rem]"
        >
          View Details
        </Link>
      </div>

      {/*  bottom shadow  */}
      <div className="w-full opacity-0 z-[-1] group-hover:opacity-100 group-hover:z-10 transition-all duration-500 bg-linear-to-b from-[rgb(0,0,0,0.001)] to-[rgb(0,0,0,0.5)] h-full absolute bottom-0 left-0 right-0"></div>
    </div>
  );
};

export default ServiceCard;
