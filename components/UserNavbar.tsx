import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BiMenuAltRight } from "react-icons/bi";
import { GrClose } from "react-icons/gr";
import { BsSearch } from "react-icons/bs";
import { useEffect, useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import Link from "next/link";
import axiosInstance from "../lib/axiosInstance";

const d = [
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

const data2 = d.slice(0, 5);
data2.push("More");

const data3 = d.slice(5);

type Props = {
  route?: string;
};

type Data = {
  id: string;
  name: string;
}[];

const UserNavbar = ({ route }: Props) => {
  const [open, setOpen] = useState(false);
  const [screen, setScreen] = useState<number>(0);

  // const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<Data>([]);

  async function fetchData() {
    const { data } = await axiosInstance.get<Data>("/configuration/all");
    // console.log(data);
    setData(data);
    setData([{ id: "home", name: "Home" }, ...data]);
    // setIsLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  function handleScreen() {
    setScreen(window.innerWidth);
  }

  useEffect(() => {
    setScreen(window.innerWidth);
    window.addEventListener("resize", handleScreen);

    return () => {
      window.removeEventListener("resize", handleScreen);
    };
  }, []);

  return (
    <div className="fixed w-screen h-[48.6px] bg-userNav flex justify-center items-center">
      <div className="w-screen max-w-[1200px] h-full bg-userNav flex justify-between items-center px-6 md:px-6">
        <div className="font-extrabold text-[26px] text-text">
          <Link href="/">END.</Link>
        </div>
        <div
          className={`fixed transition-all right-0 top-[48.6px] bg-userNav z-10 w-[100vw] justify-center items-center ${
            open ? "translate-x-0" : "translate-x-[100%]"
          } md:flex md:translate-x-0 md:static md:w-auto`}
        >
          <ul
            className={` md:flex-row md:gap-4 ${
              screen < 768 ? "grid grid-cols-4" : "flex flex-col"
            }`}
          >
            {screen < 768
              ? data?.map((menu) => {
                  return (
                    <Link
                      href={`/${
                        menu.name != "Home" ? menu.name.toLowerCase() : "/"
                      }`}
                    >
                      <li
                        key={menu.id}
                        className="hover:shadow text-text text-[14px] md:text-[16px] hover:text-secondary hover:cursor-pointer transition-all h-10 flex justify-center items-center w-[25vw] font-medium md:w-auto"
                      >
                        {menu.name}
                      </li>
                    </Link>
                  );
                })
              : data
                  .slice(0, 5)
                  .concat({ id: "more", name: "More" })
                  .map((menu) => {
                    if (menu.name == "More") {
                      return (
                        <Menu key={menu.id}>
                          <MenuButton>
                            <div className="hover:shadow text-text text-[14px] md:text-[16px] hover:text-secondary hover:cursor-pointer transition-all h-10 flex justify-center items-center w-[50vw] font-medium md:w-auto">
                              More
                              <AiFillCaretDown />
                            </div>
                          </MenuButton>
                          <MenuList
                            bgColor="rgb(188 185 147)"
                            display="grid"
                            gridTemplateColumns="2"
                          >
                            <div className="bg-userNav">
                              {data.slice(5).map((menu) => {
                                return (
                                  <Link href={`/${menu.name.toLowerCase()}`}>
                                    <MenuItem
                                      bg="rgb(188 185 147)"
                                      key={menu.id}
                                    >
                                      <div className="w-full text-text text-[14px] hover:text-secondary hover:cursor-pointer transition-all h-10 flex justify-center items-center font-medium">
                                        {menu.name}
                                      </div>
                                    </MenuItem>
                                  </Link>
                                );
                              })}
                            </div>
                          </MenuList>
                        </Menu>
                      );
                    }
                    return (
                      <Link
                        href={`/${
                          menu.name != "Home" ? menu.name.toLowerCase() : "/"
                        }`}
                      >
                        <li
                          key={menu.id}
                          className="hover:shadow text-text text-[14px] md:text-[16px] hover:text-secondary hover:cursor-pointer transition-all h-10 flex justify-center items-center w-[50vw] font-medium md:w-auto"
                        >
                          {menu.name}
                        </li>
                      </Link>
                    );
                  })}
          </ul>
        </div>
        <div className="flex gap-4 justify-center items-center">
          <Link href="/search">
            <BsSearch className="h-6 w-6 cursor-pointer text-secondary" />
          </Link>
          {route == "/auth/login" ? (
            <Link href="/auth/signup">
              <div className="bg-primary hover:bg-secondary cursor-pointer font-medium text-white rounded-md px-2 py-1 text-sm">
                Sign up
              </div>
            </Link>
          ) : route == "/auth/signup" ? (
            <Link href="/auth/login">
              <div className="bg-white hover:bg-slate cursor-pointer font-medium text-text rounded-md px-2 py-1 text-sm">
                Login
              </div>
            </Link>
          ) : (
            <>
              <Link href="/auth/login">
                <div className="bg-white hover:bg-slate cursor-pointer font-medium text-text rounded-md px-2 py-1 text-sm">
                  Login
                </div>
              </Link>
              <Link href="/auth/signup">
                <div className="bg-primary hover:bg-secondary cursor-pointer font-medium text-white rounded-md px-2 py-1 text-sm">
                  Sign up
                </div>
              </Link>
            </>
          )}
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
