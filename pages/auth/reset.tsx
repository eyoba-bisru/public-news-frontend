import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import UserNavbar from "../../components/UserNavbar";
import Head from "next/head";
import { useRouter } from "next/router";
import instance from "../../lib/axiosInstance";
import { useToast } from "@chakra-ui/react";

interface FormValues {
  password: string;
  confirmPassword: string;
}

const ResetPassword: React.FC = () => {
  const initialValues: FormValues = {
    password: "",
    confirmPassword: "",
  };

  const toast = useToast();

  const router = useRouter();

  const validationSchema = Yup.object().shape({
    password: Yup.string().required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm password is required"),
  });

  console.log(router);

  const handleSubmit = async (
    values: FormValues,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    try {
      await instance.post("/auth/reset", {
        token: router.query.token,
        password: values.password,
      });
      toast({
        title: "Password successfully reset",
        position: "bottom-left",
        isClosable: true,
        status: "success",
        variant: "left-accent",
      });
      router.replace("/auth/login");
    } catch (error) {
      toast({
        // @ts-ignore
        title: JSON.stringify(error?.response?.data),
        position: "bottom-left",
        isClosable: true,
        status: "error",
        variant: "left-accent",
      });
    }
    setSubmitting(false);
  };

  return (
    <div className="flex">
      <Head>
        <title>Reset password</title>
      </Head>
      <UserNavbar />
      <div className="w-full max-w-xs mx-auto mt-20">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="password"
                >
                  New Password
                </label>
                <Field
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  name="password"
                  type="password"
                />
                <ErrorMessage
                  component="div"
                  name="password"
                  className="text-red-500 text-xs italic mt-2"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="confirmPassword"
                >
                  Confirm New Password
                </label>
                <Field
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                />
                <ErrorMessage
                  component="div"
                  name="confirmPassword"
                  className="text-red-500 text-xs italic mt-2"
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Reset Password
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ResetPassword;
