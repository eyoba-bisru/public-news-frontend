import React from "react";
import { Avatar } from "@chakra-ui/react";
import Head from "next/head";
import UserNavbar from "../../components/UserNavbar";
import { BsFillBookmarkPlusFill } from "react-icons/bs";
import Link from "next/link";
import Footer from "../../components/Footer";
import { NextRouter } from "next/router";
import axiosInstance from "../../lib/axiosInstance";
import convert from "../../lib/convert";

type Data = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  createdAt: Date;
  user: {
    shortName: string;
    name: string;
    logo: string;
  };
};

const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const Detail = ({ post }: { post: Data }) => {
  return (
    <div className="relative min-h-screen">
      <Head>
        <title>Detail</title>
      </Head>
      <UserNavbar />

      <div className="flex flex-col gap-8 w-full min-h-screen">
        <div className="min-h-screen flex lg:flex-row flex-col md:justify-start justify-center items-center gap-4 lg:gap-10 h-full">
          <div className="flex lg:justify-start md:justify-center sm:items-center justify-center md:items-center min-h-screen sm:ml-[7.5%] mt-[55px] lg:w-[65%] sm:[w-70%]">
            <div className="flex flex-col gap-2 justify-center md:justify-start items-center md:w-[80%] lg:w-full h-full w-[95%]">
              <div className="flex gap-2 justify-start h-full w-full">
                <div className="flex flex-col gap-1">
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2 items-center">
                      <Avatar
                        name={post?.user.name}
                        src={post?.user.logo}
                        className="object-contain object-center -z-10"
                      />
                      <div>
                        <p>{post?.user.name}</p>
                        <div className="flex gap-4">
                          <p>
                            {convert(
                              new Date(post?.createdAt!).getHours(),
                              new Date(post?.createdAt!).getMinutes()
                            )}
                          </p>
                          <div className="flex gap-1">
                            <p>{new Date(post?.createdAt!).getDate()}</p>
                            <p>
                              {
                                monthNames[
                                  new Date(post?.createdAt!).getMonth()
                                ]
                              }
                            </p>
                            <p>{new Date(post?.createdAt!).getFullYear()}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <Link href="/bookmark">
                      <BsFillBookmarkPlusFill className="text-primary w-5 h-14" />
                    </Link>
                  </div>

                  <div>
                    <img
                      src={post?.imageUrl}
                      alt="image"
                      className="md:w-full sm:h-[300px] md:h-[350px] lg:h-[370px] w-full h-[200px]"
                    />
                  </div>
                  <div className="flex flex-col gap-3 mt-4">
                    <p className="text-primary text-[18.08px] font-bold">
                      {post?.title}
                    </p>
                    <p>{post?.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sm:h-[750px] h-[1400px] lg:mt-[120px] bg-white lg:w-[35%] w-[70%] ml-[19%] sm:w-[70%] sm:ml-[20%] mr-[20%] lg:ml-0 lg:mr-[6.5%] flex flex-col items-center gap-5">
            <p className="text-[17.515px] text-text mt-2">Recommended</p>
            <Link
              href="/anotherdetail"
              className="flex flex-col-reverse sm:flex-row justify-cente items-center sm:h-[120px] h-[250px] sm:w-[80%]  w-full lg:w-full"
            >
              <div className="sm:w-[57%]  w-full flex justify-center items-center sm:h-full h-[35%]">
                <p className="flex justify-center items-center ml-4 sm:ml-4 md:ml-none text-[16px] font-bold">
                  Menilik II baptised as sahle mariyam
                </p>
              </div>
              <div className="sm:w-[43%] sm:h-full h-[65%] w-[80%] flex items-center justify-center">
                <img
                  src="https://th.bing.com/th/id/OIP.duIVaw6uAfEFU36SNdOJEAHaGL?w=247&h=206&c=7&r=0&o=5&pid=1.7"
                  className="w-[90%] h-[90%] rounded"
                />
              </div>
            </Link>
            <Link
              href="/anotherdetail"
              className="flex flex-col-reverse sm:flex-row justify-cente items-center sm:h-[120px] h-[250px] sm:w-[80%]  w-full lg:w-full"
            >
              <div className="sm:w-[57%]  w-full flex justify-center items-center sm:h-full h-[35%]">
                <p className="flex justify-center items-center ml-4 sm:ml-4 md:ml-none text-[16px] font-bold">
                  Menilik II baptised as sahle mariyam
                </p>
              </div>
              <div className="sm:w-[43%] sm:h-full h-[65%] w-[80%] flex items-center justify-center">
                <img
                  src="https://th.bing.com/th/id/OIP.duIVaw6uAfEFU36SNdOJEAHaGL?w=247&h=206&c=7&r=0&o=5&pid=1.7"
                  className="w-[90%] h-[90%] rounded"
                />
              </div>
            </Link>
            <Link
              href="/anotherdetail"
              className="flex flex-col-reverse sm:flex-row justify-cente items-center sm:h-[120px] h-[250px] sm:w-[80%]  w-full lg:w-full"
            >
              <div className="sm:w-[57%]  w-full flex justify-center items-center sm:h-full h-[35%]">
                <p className="flex justify-center items-center ml-4 sm:ml-4 md:ml-none text-[16px] font-bold">
                  Menilik II baptised as sahle mariyam
                </p>
              </div>
              <div className="sm:w-[43%] sm:h-full h-[65%] w-[80%] flex items-center justify-center">
                <img
                  src="https://th.bing.com/th/id/OIP.duIVaw6uAfEFU36SNdOJEAHaGL?w=247&h=206&c=7&r=0&o=5&pid=1.7"
                  className="w-[90%] h-[90%] rounded"
                />
              </div>
            </Link>
            <Link
              href="/anotherdetail"
              className="flex flex-col-reverse sm:flex-row justify-cente items-center sm:h-[120px] h-[250px] sm:w-[80%]  w-full lg:w-full"
            >
              <div className="sm:w-[57%]  w-full flex justify-center items-center sm:h-full h-[35%]">
                <p className="flex justify-center items-center ml-4 sm:ml-4 md:ml-none text-[16px] font-bold">
                  Menilik II baptised as sahle mariyam
                </p>
              </div>
              <div className="sm:w-[43%] sm:h-full h-[65%] w-[80%] flex items-center justify-center">
                <img
                  src="https://th.bing.com/th/id/OIP.duIVaw6uAfEFU36SNdOJEAHaGL?w=247&h=206&c=7&r=0&o=5&pid=1.7"
                  className="w-[90%] h-[90%] rounded"
                />
              </div>
            </Link>
            <Link
              href="/anotherdetail"
              className="flex flex-col-reverse sm:flex-row justify-cente items-center sm:h-[120px] h-[250px] sm:w-[80%]  w-full lg:w-full"
            >
              <div className="sm:w-[57%]  w-full flex justify-center items-center sm:h-full h-[35%]">
                <p className="flex justify-center items-center ml-4 sm:ml-4 md:ml-none text-[16px] font-bold">
                  Menilik II baptised as sahle mariyam
                </p>
              </div>
              <div className="sm:w-[43%] sm:h-full h-[65%] w-[80%] flex items-center justify-center">
                <img
                  src="https://th.bing.com/th/id/OIP.duIVaw6uAfEFU36SNdOJEAHaGL?w=247&h=206&c=7&r=0&o=5&pid=1.7"
                  className="w-[90%] h-[90%] rounded"
                />
              </div>
            </Link>
          </div>
        </div>

        <div className="w-full">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps(router: NextRouter) {
  const { data } = await axiosInstance.post<Data>("/post", {
    id: router.query.pid,
  });

  return { props: { post: data } };
}

export default Detail;
