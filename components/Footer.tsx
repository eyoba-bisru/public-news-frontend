import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-auto md:h-[187.58px] bg-primary text-white flex items-center justify-center">
      <div className="w-full max-w-[1200px]">
        <div className="flex justify-center items-center md:flex-row flex-col md:gap-14 gap-10">
          <div className="flex gap-4 justify-center items-center md:block">
            <h2 className="font-bold text-[1.3rem] mb-2">Sitemap</h2>
            <div className="grid grid-cols-3 gap-x-6 my-2">
              <p>Ethiopia</p>
              <p>Ethiopia</p>
              <p>Ethiopia</p>
              <p>Ethiopia</p>
              <p>Ethiopia</p>
              <p>Ethiopia</p>
              <p>Ethiopia</p>
              <p>Ethiopia</p>
              <p>Ethiopia</p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-4 md:block">
            <h2 className="font-bold text-[1.3rem] mb-2">Languages</h2>
            <div className="grid grid-cols-2 gap-x-6">
              <p>Amharic</p>
              <p>Amharic</p>
              <p>Amharic</p>
              <p>Amharic</p>
              <p>Amharic</p>
              <p>Amharic</p>
            </div>
          </div>
          <div>
            <img src="/Group 65.svg" alt="copywrite" className="h-40" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
