import { Button, Input } from "@chakra-ui/react";
import Head from "next/head";
import UserNavbar from "../../components/UserNavbar";
import PasswordInput from "../../components/PasswordInputSignup";
import Link from "next/link";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";

const SignUp = () => {
  const router = useRouter();
  const route = router.asPath;
  const [loading, setLoading] = useState(false);
  const context = useAuth();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirm: "",
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, "Too Short!")
        .max(20, "Too Long!")
        .required("name is required"),
      email: Yup.string().email("Invalid email").required("email is required"),
      password: Yup.string()
        .min(8, "Too Short!")
        .max(20, "Too Long!")
        .required("password is required"),
      confirm: Yup.string()
        .oneOf([Yup.ref("password"), null], "Password must match")
        .required("password is required"),
    }),

    onSubmit: async (values, { resetForm }) => {
      setLoading(true);

      context.signup(values.email, values.password, values.name, resetForm);
      setLoading(false);
    },
  });

  return (
    <div className="w-screen flex flex-col justify-between items-center">
      <Head>
        <title>Sign up</title>
      </Head>
      <UserNavbar route={route} />
      <div className="w-[314.705px] py-[48.6px] mt-[6rem]">
        <div className="w-full bg-white rounded-md">
          <div className="px-6 py-1 flex flex-col gap-6">
            <p className="font-light text-2xl text-center mt-6">
              Create an account
            </p>
            <form
              onSubmit={formik.handleSubmit}
              className="flex flex-col justify-center items-start gap-2"
            >
              <Input
                type="text"
                borderColor="#4C230A"
                placeholder="username"
                name="name"
                _focus={{ border: "none" }}
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.name && formik.errors.name ? (
                <div className="text-red-600 text-sm">{formik.errors.name}</div>
              ) : null}
              <Input
                type="email"
                name="email"
                borderColor="#4C230A"
                placeholder="Email"
                _focus={{ border: "none" }}
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
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
                placeholder="password"
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="text-red-600 text-sm">
                  {formik.errors.password}
                </div>
              ) : null}
              <PasswordInput
                value={formik.values.confirm}
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
                name="confirm"
                placeholder="confirm password"
              />
              {formik.touched.confirm && formik.errors.confirm ? (
                <div className="text-red-600 text-sm">
                  {formik.errors.confirm}
                </div>
              ) : null}
              <Button
                bg="#4C230A"
                _hover={{ bg: "#A53F2B" }}
                color="white"
                width="full"
                paddingY="5"
                type="submit"
                disabled={loading ? true : false}
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
