import UserNavbar from "../components/UserNavbar";
import { BsSearch } from "react-icons/bs";
import { BiCopyright } from "react-icons/bi";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import axiosInstance from "../lib/axiosInstance";

import Head from "next/head";
import instance from "../lib/axiosInstance";
import Card from "../components/Card";
type Data = {
  id: string;
  name: string;
  type: string;
}[];

type Posts = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  location: {
    name: string;
  };
  content: {
    name: string;
  };
}[];

type Props = {
  content: Data;
  site: Data;
  lang: Data;
};

const search = ({ content, site: sitemap, lang: languages }: Props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState<Posts>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const { data } = await instance.post("/post/search", { q: searchTerm });
        setResults(data);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };

    if (searchTerm) {
      fetchData();
    } else {
      setResults([]);
    }
  }, [searchTerm]);

  return (
    <div className="flex flex-col gap-4 relative h-screen">
      <Head>
        <title>Search</title>
      </Head>
      <div className="z-10">
        <UserNavbar />
      </div>
      <div className="flex flex-col gap-4 items-center">
        <div className="flex items-center gap-1 w-full justify-center mt-[66px] relative">
          <form
            className="flex items-center gap-2 justify-center"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              className="bg-white rounded-md border-2 border-white py-[8px] px-4 leading-tight focus:outline-none focus:bg-white focus:border-primary"
              id="title"
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {/* <button
              type="submit"
              className="text-white bg-primary rounded-md px-2 py-1"
            >
              Search
            </button> */}
          </form>
        </div>
        <div>
          {isLoading ? (
            <img src="/Spinner.svg" alt="spinner" />
          ) : results.length == 0 && searchTerm != "" ? (
            <div>No result found</div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {results.map((result) => (
                <Link key={result.id} href={`/detail/${result.id}`}>
                  <Card
                    content={result.content.name}
                    image={result.imageUrl}
                    location={result.location.name}
                    title={result.title}
                  />
                </Link>
              ))}
            </div>
          )}
        </div>
        <div className="relative h-auto py-12 flex justify-center items-center w-full bg-primary text-white rounded-tl-none rounded-bl rounded-tr-none rounded-br">
          <div className="w-full max-w-[1200px]">
            <div className="flex justify-center items-center md:flex-row flex-col md:gap-14 gap-10">
              <div className="flex sm:flex-row mt-[2px] sm:mt-[0px] flex-col gap-2 sm:gap-4 justify-center items-center md:block">
                <h2 className="font-bold text-[1.3rem] mb-2">Sitemap</h2>
                <div className="grid grid-cols-3 gap-x-6 my-2">
                  {sitemap.map((site) => (
                    <Link
                      href={`/${site.type + "/" + site.name.toLowerCase()}`}
                      key={site.id}
                    >
                      <p>{site.name}</p>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="flex sm:flex-row mt-[2px] sm:mt-[0px] flex-col sm:gap-4 justify-center items-center gap-4 md:block">
                <h2 className="font-bold text-[1.3rem] mb-2">Languages</h2>
                <div className="grid grid-cols-2 gap-x-6">
                  {languages.map((lang) => (
                    <Link
                      key={lang.id}
                      href={`/language/${lang.name.toLowerCase()}`}
                    >
                      <p>{lang.name}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="bottom-2 right-[80px] absolute">
            <p className="text-white text-[11.865px] font-medium">
              <BiCopyright className="inline" fontSize="14px" />
              <span>2022 END Media Network</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  const content = await axiosInstance("/configuration/all");
  const site = await axiosInstance("/configuration/sitemap");
  const lang = await axiosInstance("/configuration/languages");

  return { props: { content: content.data, site: site.data, lang: lang.data } };
}

export default search;
