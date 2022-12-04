import React from "react";
import SidebarWithHeader from "../components/Sidenav";
import { FiEdit } from "react-icons/fi";
import {
  Modal,
  Button,
  Box,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  InputGroup,
  Input,
  Select,
} from "@chakra-ui/react";
import { MdDeleteForever } from "react-icons/md";
import { AiFillPlusCircle } from "react-icons/ai";
import Head from "next/head";
const configuration = () => {
  return (
    <SidebarWithHeader>
      <Head>
        <title>Configuration</title>
      </Head>
      <div className="flex flex-col gap-10 px-6 h-screen">
        <p className=" text-primary text-[23.165px] font-bold">
          Configurations
        </p>

        <div className="w-full text-center flex justify-center">
          <div className="flex justify-center items-center gap-2 xs:w-full md:w-[90%] lg:w-[80%]">
            <Select width="56">
              <option value="option1">Content</option>
              <option value="option2">Language</option>
              <option value="option3">Location</option>
            </Select>
            <Input
              type="text"
              className="w-full"
              borderColor="#4C230A"
              placeholder="Title"
              _focus={{ border: "none" }}
            />
            <div className="flex bg-primary gap-2 px-6 py-2 mr-14 rounded-md cursor-pointer">
              <button className="text-white inline">Add</button>
              <AiFillPlusCircle className="text-white text-2xl xs:hidden md:block" />
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col gap-2 justify-center items-center">
          <div className="xs:w-full md:w-[90%] lg:w-[80%] bg-white p-4 flex justify-between items-center rounded-md">
            <p>Title</p>
            <div className="flex justify-center items-center gap-2">
              <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 border border-green-500 rounded">
                <FiEdit />
              </button>
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded">
                <MdDeleteForever />
              </button>
            </div>
          </div>
          <div className="xs:w-full md:w-[90%] lg:w-[80%] bg-white p-4 flex justify-between items-center rounded-md">
            <p>Title</p>
            <div className="flex justify-center items-center gap-2">
              <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 border border-green-500 rounded">
                <FiEdit />
              </button>
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded">
                <MdDeleteForever />
              </button>
            </div>
          </div>
        </div>
      </div>
    </SidebarWithHeader>
  );
};

export default configuration;
