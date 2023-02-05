import { Button, Img } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import ImageCard from "../components/ImageCard";
import UserNavbar from "../components/UserNavbar";
import { AiFillRightCircle } from "react-icons/ai";
import Footer from "../components/Footer";
import Head from "next/head";
import Link from "next/link";
import axiosInstance from "../lib/axiosInstance";

type Data = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  location: {
    name: string;
  };
  category: {
    name: string;
  };
  content: {
    name: string;
  };
}[];

const Home = () => {
  const [data, setData] = useState<Data>([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchData() {
    setIsLoading(true);
    const { data } = await axiosInstance.get<Data>("post/postsHome");
    setData(data);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <UserNavbar />
      {isLoading ? (
        <img src="/Spinner.svg" className="mx-auto pt-20" alt="spinner" />
      ) : data.length == 0 ? (
        <div>No news posted</div>
      ) : (
        <>
          <div className="w-full py-[48.6px] flex justify-center items-center">
            <div className="w-full max-w-[1200px] px-6 md:px-6 mt-4">
              <h1 className="text-text text-2xl font-bold my-4">Latest news</h1>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {data.slice(0, 6).map((d) => (
                  <Link key={d.id} href={`/detail/${d.id}`}>
                    <ImageCard
                      content={d.content.name}
                      title={d.title}
                      description={d.description}
                      image={d.imageUrl}
                      location={d.location.name}
                    />
                  </Link>
                ))}
              </div>
              {data.length <= 8 ? (
                ""
              ) : (
                <>
                  {" "}
                  <p className="text-text text-xl font-bold my-4">Other news</p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {data.slice(6, data.length).map((d) => (
                      <Link key={d.id} href={`/detail/${d.id}`}>
                        <Card
                          content={d.content.name}
                          image={d.imageUrl}
                          location={d.location.name}
                          title={d.title}
                        />
                      </Link>
                    ))}
                  </div>
                </>
              )}

              <div className="w-full grid place-content-center my-8">
                <Link href="/search">
                  <Button
                    rightIcon={<AiFillRightCircle />}
                    background="#4C230A"
                    color="white"
                    _hover={{ background: "#A53F2B" }}
                    _active={{ background: "#A53F2B" }}
                    fontSize="lg"
                    height="12"
                  >
                    Explore More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export async function getServerSideProps() {
  const { data } = await axiosInstance.post("/post/addVistor");

  return { props: { data } };
}

export default Home;
