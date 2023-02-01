import { Button } from "@chakra-ui/react";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { BiCopyright } from "react-icons/bi";
import Editornav from "../../components/Editornav";
import PasswordInput from "../../components/PasswordInputSignup";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useAuth } from "../../context/AuthContext";
import instance from "../../lib/axiosInstance";
import { useToast } from "@chakra-ui/react";

type Values = {
  id: string;
  name: string;
}[];
type User = {
  name: string;
  email: string;
  password: string;
  phone: string;
  shortName: string;
  logo: string;
  id: string;
  suspended: boolean;
};

const addpost = () => {
  const [locations, setLocations] = useState<Values>([]);
  const [contents, setContents] = useState<Values>([]);
  const [languages, setLanguages] = useState<Values>([]);
  const [imageUrl, setImageUrl] = useState("");
  const toast = useToast();

  async function fetchLocations() {
    const { data } = await instance.get("/configuration/locations");
    setLocations(data);
  }
  async function fetchContents() {
    const { data } = await instance.get("/configuration/contents");
    setContents(data);
  }
  async function fetchLanguages() {
    const { data } = await instance.get("/configuration/languages");
    setLanguages(data);
  }
  useEffect(() => {
    fetchLocations();
    fetchContents();
    fetchLanguages();
  }, []);

  const formik: any = useFormik({
    initialValues: {
      titles: "",
      sources: "",
      description: "",
      imageUrl: "",
      selectlocation: "",
      selectcontent: "",
      selectlanguage: "",
    },

    validationSchema: Yup.object({
      titles: Yup.string().min(8, "Too Short!").max(20, "Too Long!"),
      description: Yup.string().min(100, "Too Short!"),
      selectlocation: Yup.string(),
      selectlanguage: Yup.string(),
      selectcontent: Yup.string(),
      imageUrl: Yup.string(),
      sources: Yup.string(),
    }),

    onSubmit: async (values, { resetForm }) => {
      console.log(formik.values.selectlocation);

      try {
        const formData = new FormData();
        formData.append("title", values.titles);
        formData.append("files", imageUrl);
        formData.append("description", values.description);
        formData.append("contentId", values.selectcontent);
        formData.append("locationId", values.selectlocation);
        formData.append("languageId", values.selectlanguage);
        formData.append("sources", values.sources);
        const { data } = await instance.post("/post/addPost", formData);
        toast({
          // @ts-ignore
          title: "News posted successfully",
          variant: "left-accent",
          isClosable: true,
          status: "success",
          position: "bottom-left",
        });
        resetForm();
      } catch (error) {
        console.log("hi error");
        console.log(error);
      }
    },
  });
  return (
    <div>
      <Head>
        <title>Add Posts</title>
      </Head>
      <div className="flex flex-col gap-10 min-h-screen relative">
        <Editornav />
        <div className="flex flex-col items-center justify-center gap-2 mb-32">
          <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
            <div className="flex md:flex-row flex-col gap-4">
              <div className="flex flex-col gap-7">
                <div className="flex flex-col gap-2 w-full md:w-[450px]">
                  <label htmlFor="title" className="text-text font-medium">
                    Title
                  </label>
                  <input
                    className=" bg-white rounded appearance-none border-2 border-white w-full py-2 px-4  leading-tight focus:outline-none focus:bg-white focus:border-primary"
                    id="title"
                    onChange={formik.handleChange}
                    value={formik.values.titles}
                    name="titles"
                    onBlur={formik.handleBlur}
                    type="text"
                    placeholder="title"
                    required
                  />
                  {formik.touched.titles && formik.errors.titles ? (
                    <div className="text-red-600 text-sm">
                      {formik.errors.titles}
                    </div>
                  ) : null}
                </div>
                <div className="flex flex-col gap-2 md:w-[450px]">
                  <label
                    htmlFor="description"
                    className="text-text font-medium"
                  >
                    Description
                  </label>
                  <textarea
                    name="description"
                    onChange={formik.handleChange}
                    value={formik.values.description}
                    onBlur={formik.handleBlur}
                    required
                    id="description"
                    className="resize-y h-[155px] rounded bg-white appearance-none border-2 border-white w-full py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-primary"
                  ></textarea>
                  {formik.touched.description && formik.errors.description ? (
                    <div className="text-red-600 text-sm">
                      {formik.errors.description}
                    </div>
                  ) : null}
                </div>
                <div>
                  <label htmlFor="title" className="text-text font-medium">
                    Source(optional)
                  </label>
                  <input
                    className=" bg-white rounded appearance-none border-2 border-white w-full py-2 px-4  leading-tight focus:outline-none focus:bg-white focus:border-primary"
                    id="title"
                    onChange={formik.handleChange}
                    value={formik.values.sources}
                    name="sources"
                    onBlur={formik.handleBlur}
                    type="text"
                    placeholder="#EBC, #BBC"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-8 w-full md:w-[450px]">
                <div className="flex flex-col gap-2">
                  <label htmlFor="location" className="text-text font-medium">
                    News Location
                  </label>

                  <select
                    id="location"
                    value={formik.values.selectlocaiton}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    name="selectlocation"
                    className="rounded bg-white text-sm focus:ring-primary focus:border-primary block w-full py-2.5"
                  >
                    {locations?.map((location) => (
                      <option key={location.id} value={location.id}>
                        {location.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col gap-2 w-full md:w-[450px]">
                  <label htmlFor="content" className="text-text font-medium">
                    Content Category
                  </label>
                  <select
                    id="content"
                    value={formik.values.selectcontent}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    name="selectcontent"
                    className="rounded bg-white border-2 border-white text-sm focus:ring-primary focus:border-primary block w-full py-2.5"
                  >
                    {contents?.map((content) => (
                      <option key={content.id} value={content.id}>
                        {content.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col gap-2 w-full md:w-[450px]">
                  <label htmlFor="language" className="text-text font-medium">
                    Language Category
                  </label>
                  <select
                    id="language"
                    value={formik.values.selectlanguage}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    name="selectlanguage"
                    className="rounded bg-white border-2 border-white text-sm focus:ring-primary focus:border-primary block w-full p-2.5"
                  >
                    {languages?.map((language) => (
                      <option key={language.id} value={language.id}>
                        {language.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col justify-center w-full md:w-[450px]">
                  <label htmlFor="image" className="text-text font-medium">
                    Image
                  </label>
                  <span className="sr-only"></span>
                  <input
                    type="file"
                    id="image"
                    accept="image/*"
                    // @ts-ignore
                    onChange={(e) => setImageUrl(e.target.files[0])}
                    required
                    className="ml-6 rounded block w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white hover:file:bg-secondary"
                  />
                </div>
              </div>
            </div>
            <div className="md:w-[30%] w-[50%] mx-auto mt-7">
              <Button
                bg="#4C230A"
                type="submit"
                _hover={{ bg: "#A53F2B" }}
                color="white"
                width="full"
                paddingY="5"
              >
                Post
              </Button>
            </div>
          </form>
        </div>
      </div>
      <div className="absolute bottom-1 md:right-[50px] right-[30px]">
        <p className="text-text text-[11.865px] font-medium">
          <BiCopyright className="inline" fontSize="14px" />
          <span>2022 END Media Network</span>
        </p>
      </div>
    </div>
  );
};

export default addpost;
