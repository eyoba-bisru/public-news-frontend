import React from "react";
import { Avatar, useToast } from "@chakra-ui/react";
import Head from "next/head";
import UserNavbar from "../../components/UserNavbar";
import { BsFillBookmarkPlusFill } from "react-icons/bs";
import Link from "next/link";
import Footer from "../../components/Footer";
import { NextRouter, useRouter } from "next/router";
import axiosInstance from "../../lib/axiosInstance";
import convert from "../../lib/convert";
import { monthNames } from "../../lib/months";
import { day, month, timeFunc, year } from "../../lib/timeConverter";
import { useAuth } from "../../context/AuthContext";
import swal from "sweetalert";
import instance from "../../lib/axiosInstance";
import { MdBookmarkRemove } from "react-icons/md";

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
  content: {
    id: string;
  };
  Bookmark: {
    userId: string;
    user: {
      id: string;
    };
    postId: string;
  }[];
};
type Reco = {
  id: string;
  title: string;
  imageUrl: string;
}[];

const Detail = ({ post, recommend }: { post: Data; recommend: Reco }) => {
  const user = useAuth().user;
  const router = useRouter();
  const toast = useToast();

  const handleRedirect = () => {
    swal({
      title: `You have to login to bookmark`,
      icon: "warning",
      //@ts-ignore
      buttons: true,
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        router.replace("/auth/login");
      }
    });
  };

  const handleBookmark = async () => {
    try {
      const { data: bookmark } = await instance.post("/post/bookmark", {
        userId: user.id,
        postId: post.id,
      });

      console.log(bookmark);

      toast({
        title: "Bookmark added",
        variant: "left-accent",
        isClosable: true,
        status: "success",
        position: "bottom-left",
      });

      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (error) {
      toast({
        // @ts-ignore
        title: error?.response?.data,
        variant: "left-accent",
        isClosable: true,
        status: "error",
        position: "bottom-left",
      });
    }
  };

  const handleRemove = () => {
    swal({
      title: "Do you want to remove from bookmark?",
      icon: "warning",
      // @ts-ignore
      buttons: true,
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        try {
          const { data: bookmark } = await instance.post(
            "/post/removeBookmark",
            {
              userId: user.id,
              postId: post.id,
            }
          );

          toast({
            title: "Bookmark removed",
            variant: "left-accent",
            isClosable: true,
            status: "success",
            position: "bottom-left",
          });
        } catch (error) {
          toast({
            // @ts-ignore
            title: error?.response.data,
            variant: "left-accent",
            isClosable: true,
            status: "error",
            position: "bottom-left",
          });
        }

        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }
    });
  };

  return (
    <div className="relative min-h-screen">
      <Head>
        <title>Detail</title>
      </Head>
      <UserNavbar />

      <div className="flex flex-col gap-8 w-full min-h-screen">
        <div className="flex lg:flex-row flex-col md:justify-start justify-center items-center lg:items-start gap-4 lg:gap-10 h-full mt-[48.6px]">
          <div className="flex lg:justify-start md:justify-center sm:items-center justify-center md:items-center lg:ml-[6.5%] mt-[30px] lg:w-[65%] w-full">
            <div className="flex flex-col gap-2 justify-center md:justify-start items-center md:w-full lg:w-full w-full ml-[20px] mr-[20px] mt-0 mb-0 sm:ml-[20px] sm:mr-[20px]sm:mt-[0px]sm:mb-[0px] md:ml-[30px] md:mr-[30px] md:mt-[0px] md:mb-[0px] lg:m-[0px]">
              <div className="flex gap-2 justify-center h-full w-full">
                <div className="flex flex-col gap-1">
                  <div>
                    <div className="flex justify-between items-center">
                      <div className="flex gap-2 items-center">
                        <Avatar
                          name={post?.user.name}
                          src={`http://localhost:4000/files/${post?.user.logo}`}
                          className="object-contain object-center -z-10"
                        />
                        <div>
                          <p>{post?.user.name}</p>
                          <div className="flex gap-4">
                            <p>{timeFunc(post.createdAt!)}</p>
                            <div className="flex gap-1">
                              <p>{day(post.createdAt!)}</p>
                              <p>{month(post.createdAt)}</p>
                              <p>{year(post.createdAt)}</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* <Link href="/bookmark"> */}
                      <button>
                        {user ? (
                          post.Bookmark.some(
                            (el) =>
                              el.userId === user.id && el.postId === post.id
                          ) ? (
                            <MdBookmarkRemove
                              onClick={handleRemove}
                              className="text-primary w-5 h-14"
                            />
                          ) : (
                            <BsFillBookmarkPlusFill
                              onClick={handleBookmark}
                              className="text-primary w-5 h-14"
                            />
                          )
                        ) : (
                          <BsFillBookmarkPlusFill
                            onClick={handleRedirect}
                            className="text-primary w-5 h-14"
                          />
                        )}
                      </button>
                      {/* </Link> */}
                    </div>
                    <div>
                      <img
                        src={`http://localhost:4000/files/${post?.imageUrl}`}
                        alt="image"
                        className="md:w-full sm:h-[370px] lg:h-[370px] w-full h-[200px]"
                      />
                    </div>
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
          {recommend.length == 0 ? (
            ""
          ) : (
            <div className="p-4 lg:mt-[86px] bg-white lg:w-[35%] w-[70%] hidden lg:flex flex-col items-center gap-5 lg:mr-[88px] rounded">
              <p className="text-[17.515px] text-text mt-2">Recommended</p>
              {recommend.map((d) => (
                <Link
                  href={"/detail/" + d.id}
                  key={d.id}
                  className="flex flex-col-reverse sm:flex-row justify-cente items-center sm:h-[120px] h-[250px] sm:w-[80%]  w-full lg:w-full"
                >
                  <div className="sm:w-[43%] sm:h-full h-[65%] w-[80%] flex items-center justify-center">
                    <img
                      src={`http://localhost:4000/files/${d.imageUrl}`}
                      className="w-[90%] h-[90%] rounded"
                    />
                  </div>
                  <div className="sm:w-[57%]  w-full flex justify-center items-center sm:h-full h-[35%]">
                    <p className="flex justify-center items-center ml-4 sm:ml-4 md:ml-none text-[16px] font-bold">
                      {d.title}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}
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

  const { data: d } = await axiosInstance.post<Data>("/post/recommended", {
    id: data.id,
    contentId: data.content.id,
  });

  return { props: { post: data, recommend: d } };
}

export default Detail;
