import Link from "next/link";
import React, { useEffect, useState } from "react";
import axiosInstance from "../lib/axiosInstance";

type Data = {
  id: string;
  name: string;
  type: string;
}[];

const Footer = () => {
  const [sitemap, setSitemap] = useState<Data>([]);
  const [languages, setLanguages] = useState<Data>([]);

  async function fetchData() {
    const site = await axiosInstance("/configuration/sitemap");
    const lang = await axiosInstance("/configuration/languages");
    setSitemap(site.data);
    setLanguages(lang.data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-full h-auto md:h-[187.58px] bg-primary text-white flex items-center justify-center">
      <div className="w-full max-w-[1200px]">
        <div className="flex justify-center items-center md:flex-row flex-col md:gap-14 gap-10">
          <div className="flex gap-4 justify-center items-center md:block">
            <h2 className="font-bold text-[1.3rem] mb-2">Sitemap</h2>
            <div className="grid grid-cols-3 gap-x-6 my-2">
              {sitemap.length > 0 &&
                sitemap.map((site) => (
                  <Link
                    key={site.id}
                    href={`/${site.type + "/" + site.name.toLowerCase()}`}
                  >
                    <p>{site.name}</p>
                  </Link>
                ))}
            </div>
          </div>
          <div className="flex justify-center items-center gap-4 md:block">
            <h2 className="font-bold text-[1.3rem] mb-2">Languages</h2>
            <div className="grid grid-cols-2 gap-x-6">
              {languages.length > 0 &&
                languages.map((lang) => (
                  <Link
                    key={lang.id}
                    href={`/language/${lang.name.toLowerCase()}`}
                  >
                    <p>{lang.name}</p>
                  </Link>
                ))}
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
