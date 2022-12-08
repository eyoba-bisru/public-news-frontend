const CategoryCard = () => {
  return (
    <div className="flex bg-white flex-col w-auto h-auto max-w-sm justify-center items-center sm:h-[145.205px] sm:flex-row sm:w-[600px] sm:max-w-full p-4 gap-4 rounded-md">
      <img
        className="h-full w-full sm:w-auto"
        src="https://cdn.pixabay.com/photo/2022/12/02/14/13/desert-7630943_960_720.jpg"
        alt="image"
      />
      <div className="h-full flex-col flex justify-between">
        <div className="flex flex-col gap-2 justify-center">
          <h2 className="text-text font-bold text-[1.1rem]">
            Noteworthy technology acquisitions 2021
          </h2>
          <p className="text-gray-600 text-xs">
            Here are the biggest enterprise technology acquisitions of 2021
            Lorem ipsum...
          </p>
        </div>
        <div className="flex justify-between items-center mt-2">
          <div className="flex gap-4">
            <p className="text-[10px]">11:00pm</p>
            <p className="text-[10px]">2 Sep 2022</p>
          </div>
          <div className="w-max flex items-center justify-center gap-1 font-bold text-xs">
            <p className="text-xs">EBC</p>
            <img src="/verified.svg" alt="verified" className="h-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
