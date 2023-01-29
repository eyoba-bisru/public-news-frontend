import { Avatar, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BiMenuAltRight } from "react-icons/bi";
import { GrClose } from "react-icons/gr";
import { BsBookmarks, BsFillBookmarkFill, BsSearch } from "react-icons/bs";
import { useEffect, useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import Link from "next/link";
import axiosInstance from "../lib/axiosInstance";
import { useRouter } from "next/router";
import React from "react";
import { useAuth } from "../context/AuthContext";
import { MdLogout, MdOutlineChangeCircle } from "react-icons/md";

type Props = {
  route?: string;
};

type Data = {
  id: string;
  name: string;
  type: string;
}[];

const UserNavbar = ({ route }: Props) => {
  const [open, setOpen] = useState(false);
  const [screen, setScreen] = useState<number>(0);
  const router = useRouter();

  const [data, setData] = useState<Data>([]);
  const user = useAuth().user;
  const logout = useAuth().logout;

  async function fetchData() {
    const { data } = await axiosInstance.get<Data>("/configuration/contents");
    setData(data);
    setData([{ id: "home", name: "Home", type: "" }, ...data]);
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
            {data.map((d) => {
              return (
                <Link
                  href={`/${
                    d.name != "Home" ? d.type + "/" + d.name.toLowerCase() : "/"
                  }`}
                  key={d.id}
                >
                  <li
                    className={`text-text text-[14px] md:text-[16px] hover:text-secondary hover:cursor-pointer transition-all h-10 flex justify-center items-center w-[25vw] font-medium md:w-auto ${
                      router.asPath ===
                      "/" + d.type + "/" + d.name.toLowerCase()
                        ? "text-secondary"
                        : d.name == "Home" && router.asPath == "/"
                        ? "text-secondary"
                        : "text-text"
                    }`}
                  >
                    {d.name}
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
          {user ? (
            // <Avatar name={user.name} size={"sm"} />
            <Menu>
              <MenuButton>
                <Avatar
                  textColor="#280004"
                  bg="#D9D9D9"
                  name={user.name}
                  size="sm"
                />
              </MenuButton>
              <MenuList>
                <Link href="/bookmark">
                  <MenuItem className="gap-2">
                    <BsBookmarks />
                    Bookmark
                  </MenuItem>
                </Link>
                <Link href="/auth/changepassword">
                  <MenuItem className="gap-2">
                    <MdOutlineChangeCircle />
                    Change password
                  </MenuItem>
                </Link>
                <MenuItem className="gap-2" onClick={logout}>
                  <MdLogout />
                  Logout
                </MenuItem>
              </MenuList>
            </Menu>
          ) : route == "/auth/login" ? (
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
          {}
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

export default React.memo(UserNavbar);
