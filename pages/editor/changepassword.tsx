import { Button } from "@chakra-ui/react";
import Head from "next/head";
import UserNavbar from "../../components/UserNavbar";
import PasswordInput from "../../components/PasswordInputSignup";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useAuth } from "../../context/AuthContext";
import instance from "../../lib/axiosInstance";
import { useToast } from "@chakra-ui/react";
import Editornav from "../../components/Editornav";

const Changepassword = () => {
  const context = useAuth();

  const toast = useToast();

  const formik: any = useFormik({
    initialValues: {
      oldpassword: "",
      newpassword: "",
      retypepassword: "",
    },

    validationSchema: Yup.object({
      oldpassword: Yup.string()
        .min(8, "Too Short!")
        .max(20, "Too Long!")
        .required("password is required"),
      newpassword: Yup.string()
        .min(8, "Too Short!")
        .max(20, "Too Long!")
        .required("password is required"),
      retypepassword: Yup.string()
        .oneOf([Yup.ref("newpassword"), null], "Passwords must match")
        .required("password is required"),
    }),

    onSubmit: async (values, { resetForm }) => {
      alert(JSON.stringify(values, null, 2));
      try {
        const { data } = await instance.post("/auth/changepassword", {
          oldPassword: values.oldpassword,
          email: context.user.email,
          password: values.newpassword,
        });
        console.log(data);
        toast({
          // @ts-ignore
          title: "Password changed successfully",
          variant: "left-accent",
          isClosable: true,
          status: "success",
          position: "bottom-left",
        });
        resetForm();
      } catch (error) {
        toast({
          // @ts-ignore
          title: error.response.data,
          variant: "left-accent",
          isClosable: true,
          status: "error",
          position: "bottom-left",
        });
        console.log(error);
      }
    },
  });

  return (
    <div className="w-screen flex flex-col justify-between items-center">
      <Head>
        <title>Change Password</title>
      </Head>
      <Editornav />
      <div className="w-[314.705px] py-[48.6px] mt-[4rem]">
        <div className="w-full bg-white rounded-md">
          <div className="px-6 py-1 flex flex-col gap-6">
            <p className="font-light text-2xl text-center mt-6">
              Change Password
            </p>
            <form
              onSubmit={formik.handleSubmit}
              className="flex flex-col justify-center items-center gap-4"
            >
              <div className="flex flex-col gap-2">
                <PasswordInput
                  placeholder="oldpassword"
                  handleChange={formik.handleChange}
                  value={formik.values.oldpassword}
                  name="oldpassword"
                  handleBlur={formik.handleBlur}
                />
                {formik.touched.oldpassword && formik.errors.oldpassword ? (
                  <div className="text-red-600 text-sm">
                    {formik.errors.oldpassword}
                  </div>
                ) : null}
                <PasswordInput
                  placeholder="newpassword"
                  handleChange={formik.handleChange}
                  value={formik.values.newpassword}
                  name="newpassword"
                  handleBlur={formik.handleBlur}
                />
                {formik.touched.newpassword && formik.errors.newpassword ? (
                  <div className="text-red-600 text-sm">
                    {formik.errors.newpassword}
                  </div>
                ) : null}
                <PasswordInput
                  placeholder="retypepassword"
                  handleChange={formik.handleChange}
                  value={formik.values.retypepassword}
                  name="retypepassword"
                  handleBlur={formik.handleBlur}
                />
                {formik.touched.retypepassword &&
                formik.errors.retypepassword ? (
                  <div className="text-red-600 text-sm">
                    {formik.errors.retypepassword}
                  </div>
                ) : null}
              </div>

              <Button
                bg="#4C230A"
                _hover={{ bg: "#A53F2B" }}
                color="white"
                width="full"
                paddingY="5"
                marginBottom="4"
                type="submit"
              >
                Change Password
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Changepassword;
