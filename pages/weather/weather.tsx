import React, { useState, useEffect } from "react";

// import axios
import axios from "axios";

// import icons
import {
  IoMdSunny,
  IoMdRainy,
  IoMdCloudy,
  IoMdSnow,
  IoMdThunderstorm,
  IoMdSearch,
} from "react-icons/io";

import {
  BsCloudHaze2Fill,
  BsCloudDrizzleFill,
  BsEye,
  BsWater,
  BsThermometer,
  BsWind,
} from "react-icons/bs";

import { TbTemperatureCelsius } from "react-icons/tb";
import { ImSpinner8 } from "react-icons/im";
import UserNavbar from "../../components/UserNavbar";
import Head from "next/head";

// api key
const APIkey = "e084d57e16a6742d314f7822f5fb11b8";

const App = () => {
  //   const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    Promise.all(
      [
        "Addis Ababa",
        "Bahir Dar",
        "Gondar",
        "Lalibela",
        "Mekele",
        "Jima",
        "Gode",
        "Asosa",
        "Jijiga",
        "Harar",
        "Semera",
      ].map((c) => {
        return axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${c}&units=metric&appid=${APIkey}`
        );
      })
    ).then(
      ([
        addis,
        bahir,
        gondar,
        mekele,
        jima,
        semera,
        lalibela,
        gode,
        asosa,
        jiji,
        harar,
      ]) => {
        setCities([
          addis.data,
          bahir.data,
          gondar.data,
          mekele.data,
          jima.data,
          semera.data,
          lalibela.data,
          gode.data,
          asosa.data,
          jiji.data,
          harar.data,
        ]);
        setIsLoading(false);
      }
    );

    console.log(cities);
  }, []);

  const date = new Date();

  function icons(data: any) {
    switch (data.weather[0].main) {
      case "Clouds":
        return <IoMdCloudy />;
        break;
      case "Haze":
        return <BsCloudHaze2Fill />;
        break;
      case "Rain":
        return <IoMdRainy className="text-[#31cafb]" />;
        break;
      case "Clear":
        return <IoMdSunny className="text-[#ffde33]" />;
        break;
      case "Drizzle":
        return <BsCloudDrizzleFill className="text-[#31cafb]" />;
        break;
      case "Snow":
        return <IoMdSnow className="text-[#31cafb]" />;
        break;
      case "Thunderstorm":
        return <IoMdThunderstorm />;
        break;
    }
  }

  return (
    <div className="h-screen">
      <Head>
        <title>Weather</title>
      </Head>
      <UserNavbar />
      <div className="pt-16">
        <div className="gap-4 p-8 max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-content-center">
          {isLoading ? (
            <img
              src="/Spinner.svg"
              className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
              alt="spinner"
            />
          ) : (
            cities.map((city) => {
              return (
                <div className="flex items-center justify-center">
                  <div className="flex flex-col bg-white rounded p-4 w-full max-w-xs">
                    <div className="font-bold text-xl">
                      {city.name}, {city.sys.country}
                    </div>
                    <div className="text-sm text-gray-500">
                      {date.getUTCDate()}/{date.getUTCMonth() + 1}/
                      {date.getUTCFullYear()}
                    </div>
                    <div className="mt-6 text-6xl self-center inline-flex items-center justify-center rounded-lg text-indigo-400 h-24 w-24">
                      {icons(city)}
                    </div>
                    <div className="flex flex-row items-center justify-center mt-6">
                      <div className="font-medium text-6xl">
                        {parseInt(city.main.temp)}°
                      </div>
                      <div className="flex flex-col items-center ml-6">
                        <div>Feels like</div>
                        <div className="mt-1">
                          <span className="text-sm">
                            <i className="far fa-long-arrow-up"></i>
                          </span>
                          <span className="text-sm font-light text-gray-500">
                            {city.main.feels_like}°
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between mt-6">
                      <div className="flex flex-col items-center">
                        <div className="font-medium text-sm">Wind</div>
                        <div className="text-sm text-gray-500">
                          {city.wind.speed}m/s
                        </div>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="font-medium text-sm">Humidity</div>
                        <div className="text-sm text-gray-500">
                          {city.main.humidity}%
                        </div>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="font-medium text-sm">Visibility</div>
                        <div className="text-sm text-gray-500">
                          {city.visibility / 1000} km
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
