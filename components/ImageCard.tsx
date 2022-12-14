import { ImLocation2 } from "react-icons/im";
type Props = {
  title: string;
  description: string;
  location: string;
  company: string;
  image: string;
};

const ImageCard = ({ company, description, image, location, title }: Props) => {
  return (
    <div
      className="bg-gray-100 m-auto max-w-md h-52 rounded-md"
      style={{
        backgroundImage: `url(
          ${image}
        )`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-row items-end h-full w-full">
        <div className="flex flex-col w-full pb-3 pt-10 px-3 bg-gradient-to-t from-black text-gray-200 rounded-md">
          <h3 className="text-base font-bold leading-5 uppercase">{title}</h3>
          <div className="inline-flex items-center">
            <span className="capitalize font-base text-xs my-1 mr-1">
              {description.length > 100
                ? `${description.slice(0, 100)}...`
                : description}
            </span>
          </div>

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
    </div>
  );
};

export default ImageCard;
