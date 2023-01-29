type Props = {
  image: string;
  title: string;
  description: string;
  time: string;
  date: string;
};

const CategoryCard = ({ image, date, description, time, title }: Props) => {
  return (
    <div className="flex bg-white flex-col w-auto h-auto max-w-sm justify-center items-center sm:h-[145.205px] sm:flex-row sm:w-[600px] sm:max-w-full p-4 gap-4 rounded-md">
      <img className="h-full w-full sm:w-auto" src={image} alt="image" />
      <div className="h-full flex-col flex justify-between">
        <div className="flex flex-col gap-2 justify-center">
          <h2 className="text-text font-bold text-[1.1rem]">{title}</h2>
          <p className="text-gray-600 text-xs">
            {description.length > 50
              ? `${description.slice(0, 50)}...`
              : description}
          </p>
        </div>
        <div className="flex justify-between items-center mt-2">
          <div className="flex gap-4">
            <p className="text-[10px]">{time}</p>
            <p className="text-[10px]">{date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
