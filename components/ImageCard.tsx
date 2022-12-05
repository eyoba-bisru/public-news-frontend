import { ImLocation2 } from "react-icons/im";
type Props = {
  title: string;
  description: string;
  location: string;
  company: string;
  image: string;
};

const ImageCard = () => {
  return (
    <div
      className="bg-gray-100 m-auto max-w-md h-52 rounded-md"
      style={{
        backgroundImage: `url(
          "https://images.pexels.com/photos/235621/pexels-photo-235621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        )`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-row items-end h-full w-full">
        <div className="flex flex-col w-full pb-3 pt-10 px-3 bg-gradient-to-t from-black text-gray-200 rounded-md">
          <h3 className="text-base font-bold leading-5 uppercase">
            Barriers up in Shanghai as China Covid protests spread
          </h3>
          <div className="inline-flex items-center">
            <span className="capitalize font-base text-xs my-1 mr-1">
              The demonstrations are an unexpected challange to president Xi
              Jingipin’s strick...
            </span>
          </div>

          <div className="flex justify-between items-center ">
            <div className="flex gap-1 justify-center items-center">
              <ImLocation2 className="text-green-400" />
              <p>China</p>
            </div>
            <div className="w-max flex items-center justify-center gap-1 font-bold text-xs">
              <p>EBC</p>
              <img src="/verified.svg" alt="verified" className="h-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
