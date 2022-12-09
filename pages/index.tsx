import { Button } from "@chakra-ui/react";
import React from "react";
import Card from "../components/Card";
import ImageCard from "../components/ImageCard";
import UserNavbar from "../components/UserNavbar";
import { AiFillRightCircle } from "react-icons/ai";
import Footer from "../components/Footer";
import Head from "next/head";


const Home = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <UserNavbar />
      <div className="w-full py-[48.6px] flex justify-center items-center">
        <div className="w-full max-w-[1200px] px-6 md:px-6 mt-4">
          <h1 className="text-text text-2xl font-bold my-4">Latest news</h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
          </div>
          <p className='text-text text-xl font-bold my-4'>Other news</p>
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
            <Link href='/detail'>
              <Card />
            </Link>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>

          <div className='w-full grid place-content-center my-8'>
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
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home
