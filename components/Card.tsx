import { ImLocation2 } from "react-icons/im";

type Props = {
  image: string;
  title: string;
  location: string;
  company: string;
};

const Card = ({ image, title, location, company }: Props) => {
  return (
    <div className="m-auto rounded-md overflow-hidden bg-white shadow-md duration-200 hover:shadow-xl">
      <img src={image} alt="image" className="h-28 object-cover w-full" />
      <div className="p-2">
        <p className="text-medium mb-5 text-[16px] text-text">{title}</p>
        <div className="flex justify-between items-center ">
          <div className="flex gap-1 justify-center items-center">
            <ImLocation2 className="text-green-400" />
            <p>{location}</p>
          </div>
          <div className="w-max flex items-center justify-center gap-1 font-bold text-xs">
            <p>{company}</p>
            <img src="/verified.svg" alt="verified" className="h-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
