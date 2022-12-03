import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BiMenuAltRight } from "react-icons/bi";
import { GrClose } from "react-icons/gr";
import { BsSearch } from "react-icons/bs";
import { useEffect, useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";

const data = [
  "Home",
  "Sport",
  "Health",
  "Bussiness",
  "Politics",
  "Entertaiment",
  "World",
  "Weather",
  "Travel",
  "History",
];

const data2 = data.slice(0, 5);
data2.push("More");

const data3 = data.slice(5);

const UserNavbar = () => {
  const [open, setOpen] = useState(false);
  const [screen, setScreen] = useState(0);

  function handleScreen() {
    setScreen(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleScreen);

    return () => {
      window.removeEventListener("resize", handleScreen);
    };
  }, []);

  return (
    <div className="w-screen h-[48.6px] bg-userNav flex justify-center items-center">
      <div className="w-screen max-w-[1200px] h-full bg-userNav flex justify-between items-center px-6 md:px-6">
        <div className="font-extrabold text-[26px] text-text">END.</div>
        <div
          className={`fixed transition-all right-0 top-[48.6px] bg-userNav z-10 w-[50vw] justify-center items-center ${
            open ? "translate-x-0" : "translate-x-[100%]"
          } md:flex md:translate-x-0 md:static md:w-auto`}
        >
          <ul className="flex flex-col md:flex-row md:gap-4">
            {/* {data2.map((menu) => {
              if (menu == "More") {
                return (
                  <Menu>
                    <MenuButton>
                      <div className="hover:shadow text-text text-[14px] md:text-[16px] hover:text-secondary hover:cursor-pointer transition-all h-10 flex justify-center items-center w-[50vw] font-medium md:w-auto">
                        Menu
                        <AiFillCaretDown />
                      </div>
                    </MenuButton>
                    <MenuList bgColor="rgb(188 185 147)">
                      <div className="bg-userNav">
                        {data3.map((menu) => {
                          return (
                            <MenuItem bg="rgb(188 185 147)">
                              <div className="w-full text-text text-[14px] hover:text-secondary hover:cursor-pointer transition-all h-10 flex justify-center items-center font-medium">
                                {menu}
                              </div>
                            </MenuItem>
                          );
                        })}
                      </div>
                    </MenuList>
                  </Menu>
                );
              }
              return (
                <li className="hover:shadow text-text text-[14px] md:text-[16px] hover:text-secondary hover:cursor-pointer transition-all h-10 flex justify-center items-center w-[50vw] font-medium md:w-auto">
                  {menu}
                </li>
              );
            })} */}

            {screen < 768
              ? data.map((menu) => {
                  return (
                    <li className="hover:shadow text-text text-[14px] md:text-[16px] hover:text-secondary hover:cursor-pointer transition-all h-10 flex justify-center items-center w-[50vw] font-medium md:w-auto">
                      {menu}
                    </li>
                  );
                })
              : data2.map((menu) => {
                  if (menu == "More") {
                    return (
                      <Menu>
                        <MenuButton>
                          <div className="hover:shadow text-text text-[14px] md:text-[16px] hover:text-secondary hover:cursor-pointer transition-all h-10 flex justify-center items-center w-[50vw] font-medium md:w-auto">
                            Menu
                            <AiFillCaretDown />
                          </div>
                        </MenuButton>
                        <MenuList bgColor="rgb(188 185 147)">
                          <div className="bg-userNav">
                            {data3.map((menu) => {
                              return (
                                <MenuItem bg="rgb(188 185 147)">
                                  <div className="w-full text-text text-[14px] hover:text-secondary hover:cursor-pointer transition-all h-10 flex justify-center items-center font-medium">
                                    {menu}
                                  </div>
                                </MenuItem>
                              );
                            })}
                          </div>
                        </MenuList>
                      </Menu>
                    );
                  }
                  return (
                    <li className="hover:shadow text-text text-[14px] md:text-[16px] hover:text-secondary hover:cursor-pointer transition-all h-10 flex justify-center items-center w-[50vw] font-medium md:w-auto">
                      {menu}
                    </li>
                  );
                })}
          </ul>
        </div>
        <div className="flex gap-4 justify-center items-center">
          <BsSearch className="h-6 w-6 cursor-pointer text-secondary" />
          <div className="bg-white hover:bg-slate cursor-pointer font-medium text-text rounded-md px-2 py-1 text-sm">
            Login
          </div>
          <div className="bg-primary hover:bg-secondary cursor-pointer font-medium text-white rounded-md px-2 py-1 text-sm">
            Sign up
          </div>
        </div>
        <BiMenuAltRight
          onClick={() => {
            setOpen(true);
          }}
          className={`h-8 w-8 cursor-pointer ${
            open ? "hidden" : "block"
          } md:hidden`}
        />
        <GrClose
          onClick={() => {
            setOpen(false);
          }}
          className={`h-8 w-8 cursor-pointer ${
            open ? "block" : "hidden"
          } md:hidden`}
        />
      </div>
    </div>
  );
};

export default UserNavbar;