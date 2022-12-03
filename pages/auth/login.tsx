import { Button, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import Head from "next/head";
import UserNavbar from "../../components/UserNavbar";
import { MdEmail } from "react-icons/md";
import PasswordInput from "../../components/PasswordInput";

const Login = () => {
  return (
    <div className="w-screen flex flex-col justify-between items-center">
      <Head>
        <title>Login</title>
      </Head>
      <UserNavbar />
      <div className="h-[336.74px] w-[314.705px] mt-[6rem]">
        <div className="w-full bg-white rounded-md h-[307.925px]">
          <div className="px-6 py-1 flex flex-col gap-6">
            <p className="font-light text-2xl text-center mt-6">
              Login to your account
            </p>
            <form className="flex flex-col justify-center items-center gap-4">
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<MdEmail color="#4C230A" />}
                />
                <Input
                  type="email"
                  borderColor="#4C230A"
                  placeholder="Email"
                  _focus={{ border: "none" }}
                />
              </InputGroup>
              <PasswordInput />
              <Button
                bg="#4C230A"
                _hover={{ bg: "#A53F2B" }}
                color="white"
                paddingX="28"
                paddingY="5"
              >
                Login
              </Button>
            </form>
          </div>
          <div className="bg-slate h-12 w-full mt-[20px] flex justify-center items-center rounded-bl-md rounded-br-md">
            <p className="font-medium text-sm">
              Don't have account?
              <span className="underline text-secondary ml-1 cursor-pointer">
                Sign up
              </span>
            </p>
          </div>
        </div>
        <p className="text-center underline text-primary cursor-pointer mt-4 text-sm">
          Forgot your password?
        </p>
      </div>
    </div>
  );
};

export default Login;
