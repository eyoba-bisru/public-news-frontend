import { Menu, MenuButton, MenuList, MenuItem, Avatar } from "@chakra-ui/react";
import Link from "next/link";
import { useAuth } from "../context/AuthContext";

const Editornav = () => {
  const logout = useAuth().logout;
  const user = useAuth().user;

  return (
    <div className="h-[49.155px] bg-userNav flex justify-between w-full">
      <p className="text-[25.99px] ml-[10%] text-primary font-extrabold text-center flex items-center font-inter">
        <Link href="/editor">END.</Link>
      </p>
      <div className="mr-[8%] flex items-center">
        <Menu>
          <MenuButton>
            <div className="flex gap-2 items-center justify-center border rounded-3xl p-1 border-primary">
              <Avatar
                textColor="#280004"
                bg="#D9D9D9"
                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/files/${user.logo}`}
                size="sm"
              />
              <p>{user.name}</p>
            </div>
          </MenuButton>
          <MenuList>
            <Link href="/editor/changepassword">
              <MenuItem>Change password</MenuItem>
            </Link>
            <MenuItem onClick={logout}>Logout</MenuItem>
          </MenuList>
        </Menu>
      </div>
    </div>
  );
};
export default Editornav;
