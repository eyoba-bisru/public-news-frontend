import { RiAdminLine, RiDashboard2Line } from "react-icons/Ri";
import { BiAddToQueue } from "react-icons/Bi";
import { BsGearWideConnected } from "react-icons/Bs";
import { IoMdNotifications } from "react-icons/io";
import React, { FC } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

const Sidebar: FC = () => {
  return (
    <nav className="w-[206.225px] h-screen bg-primary">
      <ul className="list-none">
        <li className="py-[21px] pl-1 flex  items-center hover:bg-[#452009]">
          <RiAdminLine className="text-white pb-1 w-9 h-6 text-bold" />
          <div className="font-bold text-[#ffffff] font-inter">
            Administrator
          </div>
        </li>
        <hr />

        <li className="p-[17px] pl-1 flex  items-center hover:bg-[#452009]">
          <RiDashboard2Line className="text-white pb-1 w-9 h-6 text-bold" />
          <div className="text-[#ffffff] font-inter">Dashboard</div>
        </li>
        <li className="p-[17px] pl-1 flex  items-center hover:bg-[#452009]">
          <BiAddToQueue className="text-white pb-1 w-9 h-6 text-bold" />
          <div className="text-[#ffffff] font-inter">News companies</div>
        </li>

        <li className="p-[17px]  pl-1 flex hover:bg-[#452009]">
          <BsGearWideConnected className="text-white pb-1 w-9 h-6 text-bold" />
          <div className="text-[#ffffff] font-inter">
            <Accordion allowMultiple>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box>Configuration</Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel py={10} mt={7}>
                  News Category
                </AccordionPanel>
                <AccordionPanel pt={4}>Language Category</AccordionPanel>
              </AccordionItem>
            </Accordion>
          </div>
        </li>

        <li className="p-[17px] pl-1 flex  items-center hover:bg-[#452009]">
          <IoMdNotifications className="text-white pb-1 w-9 h-6 text-bold" />
          <div className="text-[#ffffff] font-inter">Notices</div>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
