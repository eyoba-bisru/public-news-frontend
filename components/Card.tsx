import React from "react";
import { ImLocation2 } from "react-icons/im";

const Card = () => {
  return (
    <div className="m-auto rounded-md overflow-hidden bg-white shadow-md duration-200 hover:scale-105 hover:shadow-xl">
      <img
        src="https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="plant"
        className="h-28 object-cover w-full"
      />
      <div className="p-2">
        <p className="text-medium mb-5 text-[16px] text-text">
          Lorem ipsum dolor sit amet...
        </p>
        {/* <button className="w-full rounded-md bg-indigo-600  py-2 text-indigo-100 hover:bg-indigo-500 hover:shadow-md duration-75">
          See More
        </button> */}
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
  );
};

export default Card;
