import { Button, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import Head from "next/head";
import UserNavbar from "../../components/UserNavbar";
import { MdEmail } from "react-icons/md";
import PasswordInput from "../../components/PasswordInputSignup";
import Link from "next/link";
import { useRouter } from "next/router";

const SignUp = () => {
  const router = useRouter();
  const route = router.asPath;

  return (
    <div className="w-screen flex flex-col justify-between items-center">
      <Head>
        <title>Sign up</title>
      </Head>
      <UserNavbar route={route} />
      <div className="w-[314.705px] py-[48.6px] mt-[6rem]">
        <div className="w-full bg-white rounded-md h-[424.88px]">
          <div className="px-6 py-1 flex flex-col gap-6">
            <p className="font-light text-2xl text-center mt-6">
              Create an account
            </p>
            <form className="flex flex-col justify-center items-center gap-4">
              <Input
                type="text"
                borderColor="#4C230A"
                placeholder="username"
                _focus={{ border: "none" }}
              />
              <Input
                type="email"
                borderColor="#4C230A"
                placeholder="Email"
                _focus={{ border: "none" }}
              />
              <PasswordInput placeholder="password" />
              <PasswordInput placeholder="confirm password" />
              <Button
                bg="#4C230A"
                _hover={{ bg: "#A53F2B" }}
                color="white"
                width="full"
                paddingY="5"
              >
                Sign up
              </Button>
            </form>
          </div>
          <div className="bg-slate h-12 w-full mt-[25px] flex justify-center items-center rounded-bl-md rounded-br-md">
            <p className="font-medium text-sm">
              Have an account?
              <Link href="/auth/login">
                <span className="underline text-secondary ml-1 cursor-pointer">
                  Login
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
