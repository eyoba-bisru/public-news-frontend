import { ImLocation2 } from "react-icons/im";

type Props = {
  image: string;
  title: string;
  location: string;
};

const Card = ({ image, title, location }: Props) => {
  return (
    <div className="m-auto rounded-md overflow-hidden bg-white shadow-md duration-200 hover:shadow-xl">
      <img
        src={`http://localhost:4000/files/${image}`}
        alt="image"
        className="h-28 object-cover w-full"
      />
      <div className="p-2">
        <p className="text-medium mb-5 text-[16px] text-text">{title}</p>
        <div className="flex justify-between items-center ">
          <div className="flex gap-1 justify-center items-center">
            <ImLocation2 className="text-green-400" />
            <p>{location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
