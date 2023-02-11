import { Button, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import Head from "next/head";
import UserNavbar from "../../components/UserNavbar";
import { MdEmail } from "react-icons/md";
import PasswordInput from "../../components/PasswordInputLogin";
import Link from "next/link";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";

const Login = () => {
  const router = useRouter();
  const route = router.asPath;
  const [loading, setLoading] = useState(false);
  const context = useAuth();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email").required("email is required"),
      password: Yup.string()
        .min(8, "Too Short!")
        .max(20, "Too Long!")
        .required("password is required"),
    }),

    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      context.login(values.email, values.password, resetForm);
      setLoading(false);
    },
  });

  return (
    <div className="w-screen flex flex-col justify-between items-center">
      <Head>
        <title>Login</title>
      </Head>
      <UserNavbar route={route} />
      <div className="h-[336.74px] py-[48.6px] w-[314.705px] mt-[6rem]">
        <div className="w-full bg-white rounded-md">
          <div className="px-6 py-1 flex flex-col gap-6">
            <p className="font-light text-2xl text-center mt-6">
              Login to your account
            </p>
            <form
              onSubmit={formik.handleSubmit}
              className="flex flex-col justify-center items-start gap-2"
            >
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  {<MdEmail color="#4C230A" />}
                </InputLeftElement>
                <Input
                  type="email"
                  name={"email"}
                  borderColor="#4C230A"
                  placeholder="Email"
                  _focus={{ border: "none" }}
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </InputGroup>
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-600 text-sm">
                  {formik.errors.email}
                </div>
              ) : null}
              <PasswordInput
                value={formik.values.password}
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
                name="password"
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="text-red-600 text-sm">
                  {formik.errors.password}
                </div>
              ) : null}
              <Button
                bg="#4C230A"
                type="submit"
                _hover={{ bg: "#A53F2B" }}
                color="white"
                // paddingX="28"
                width="full"
                paddingY="5"
                disabled={loading ? true : false}
              >
                Login
              </Button>
            </form>
          </div>
          <div className="bg-slate h-12 w-full mt-[20px] flex justify-center items-center rounded-bl-md rounded-br-md">
            <p className="font-medium text-sm">
              Don&apos;t have account?
              <Link href="/auth/signup">
                <span className="underline text-secondary ml-1 cursor-pointer">
                  Sign up
                </span>
              </Link>
            </p>
          </div>
        </div>
        <Link
          href="/auth/forgot"
          className="text-center underline text-primary cursor-pointer mt-4 text-sm"
        >
          <p>Forgot your password?</p>
        </Link>
      </div>
    </div>
  );
};

export default Login;
