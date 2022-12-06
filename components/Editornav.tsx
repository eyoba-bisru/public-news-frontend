import React from "react";
import { Menu, MenuButton, MenuList, MenuItem, Avatar } from "@chakra-ui/react";

const Editornav = () => {
  return (
    <div className="h-[49.155px] bg-userNav flex justify-between w-full">
      <p className="text-[25.99px] ml-[10%] text-primary font-extrabold text-center flex items-center font-inter">
        END.
      </p>
      <div className="mr-[8%] flex items-center">
        <Menu>
          <MenuButton>
            <Avatar textColor="#280004" bg="#D9D9D9" name="Eyob" size="sm" />
          </MenuButton>
          <MenuList>
            <MenuItem>Signout</MenuItem>
          </MenuList>
        </Menu>
      </div>
    </div>
  );
};
export default Editornav;
