import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  useToast,
} from "@chakra-ui/react";
import Head from "next/head";
import UserNavbar from "../../components/UserNavbar";
import { MdEmail } from "react-icons/md";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useAuth } from "../../context/AuthContext";
import instance from "../../lib/axiosInstance";
import { useState } from "react";
const Forgot = () => {
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email").required("email is required"),
    }),

    onSubmit: async (values, { resetForm }) => {
      setIsLoading(true);
      try {
        await instance.post("/auth/forgotpassword", { email: values.email });
        toast({
          title: "Email sent to your email",
          position: "bottom-left",
          isClosable: true,
          status: "success",
          variant: "left-accent",
        });
        resetForm();
      } catch (error) {
        toast({
          title: "Please check your email address",
          position: "bottom-left",
          isClosable: true,
          status: "error",
          variant: "left-accent",
        });
      }

      setIsLoading(false);
    },
  });
  return (
    <div className="w-screen flex flex-col justify-between items-center">
      <Head>
        <title>Forget Password</title>
      </Head>
      <UserNavbar />
      <div className="w-[314.705px] py-[48.6px] mt-[6rem]">
        <div className="w-full bg-white rounded-md">
          <div className="px-6 py-1 flex flex-col gap-6">
            <p className="font-light text-2xl text-center mt-6">
              Forgot Password
            </p>
            <form
              onSubmit={formik.handleSubmit}
              className="flex flex-col justify-center items-center gap-4"
            >
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<MdEmail color="#4C230A" />}
                />
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
              </InputGroup>
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-600 text-sm">
                  {formik.errors.email}
                </div>
              ) : null}
              <Button
                type="submit"
                bg="#4C230A"
                _hover={{ bg: "#A53F2B" }}
                color="white"
                width="full"
                paddingY="5"
                marginBottom="3"
              >
                Reset
                {isLoading ? (
                  <img
                    src="/Spinner2.svg"
                    width="20px"
                    height="20px"
                    alt="spinner"
                    className="text-white"
                  />
                ) : null}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forgot;
