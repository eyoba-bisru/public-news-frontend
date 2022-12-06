import { Button } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import { BiCopyright } from "react-icons/bi";
import Editornav from "../../components/Editornav";

const addpost = () => {
  return (
    <div>
      <Head>
        <title>Add Posts</title>
      </Head>
      <div className="flex flex-col gap-10 relative">
        <Editornav />
        <div className="flex flex-col items-center justify-center gap-5">
          <form className="flex md:flex-row flex-col gap-4">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2 w-full md:w-[450px]">
                <label htmlFor="title" className="text-text font-medium">
                  Title <span className="text-red-500">*</span>
                </label>
                <input
                  className=" bg-white rounded appearance-none border-2 border-white w-full py-2 px-4  leading-tight focus:outline-none focus:bg-white focus:border-primary"
                  id="title"
                  type="text"
                  placeholder="title"
                />
              </div>
              <div className="flex flex-col gap-2 md:w-[450px]">
                <label htmlFor="description" className="text-text font-medium">
                  Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="description"
                  id="description"
                  className="resize-y h-[250px] rounded bg-white appearance-none border-2 border-white w-full py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-primary"
                ></textarea>
              </div>
              <div className="flex flex-col gap-2 w-full md:w-[450px]">
                <label htmlFor="image" className="text-text font-medium">
                  Image <span className="text-red-500">*</span>
                </label>
                <span className="sr-only"></span>
                <input
                  type="file"
                  id="image"
                  className="ml-6 rounded block w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white hover:file:bg-secondary"
                />
              </div>
            </div>
            <div className="flex flex-col gap-7">
              <div className="flex flex-col gap-2">
                <label htmlFor="location" className="text-text font-medium">
                  News Location <span className="text-red-500">*</span>
                </label>
                <select
                  id="location"
                  className="rounded bg-white border-2 border-white mb-6 text-sm focus:ring-primary focus:border-primary block w-full p-2.5"
                >
                  <option value="Ethiopia">Ethiopia</option>
                  <option value="World">World</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="content" className="text-text font-medium">
                  Content Category <span className="text-red-500">*</span>
                </label>
                <select
                  id="content"
                  className="rounded bg-white border-2 border-white mb-6 text-sm focus:ring-primary focus:border-primary block w-full py-2.5"
                >
                  <option value="Sport">Sport</option>
                  <option value="Education">Education</option>
                  <option value="Health">Health</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="language" className="text-text font-medium">
                  Language Category <span className="text-red-500">*</span>
                </label>
                <select
                  id="language"
                  className="rounded bg-white border-2 border-white mb-6 text-sm focus:ring-primary focus:border-primary block w-full p-2.5"
                >
                  <option value="Amharic">Amharic</option>
                  <option value="English">English</option>
                </select>
              </div>
              <div className="flex flex-col gap-2 w-full md:w-[450px]">
                <label htmlFor="video" className="text-text font-medium">
                  Youtube Video <span className="text-red-500">*</span>
                </label>
                <input
                  className=" bg-white rounded appearance-none border-2 border-white w-full py-2 px-4  leading-tight focus:outline-none focus:bg-white focus:border-primary"
                  id="video"
                  type="text"
                  placeholder="video link"
                />
              </div>
            </div>
          </form>
          <Button
            bg="#4C230A"
            marginBlock="14"
            _hover={{ bg: "#A53F2B" }}
            color="white"
            width="30%"
            paddingY="5"
          >
            Post
          </Button>
        </div>
        <div className="absolute bottom-2 right-[80px]">
          <p className="text-text text-[11.865px] font-medium">
            <BiCopyright className="inline" fontSize="14px" />{" "}
            <span>2022 END Media Network</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default addpost;
