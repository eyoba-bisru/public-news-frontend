import { Avatar } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import { BiCopyright } from "react-icons/bi";
import Editornav from "../../components/Editornav";
const show = () => {
  return (
    <div className="relative min-h-screen">
      <Head>
        <title>Show Post</title>
      </Head>
      <Editornav />
      <div className="flex justify-center items-center mt-10">
        <div className="flex justify-center min-h-screen">
          <div className="flex flex-col gap-2 items-center h-full">
            <div className="flex gap-2 justify-center md:ml-[20%] md:mr-[20%] ml-[5%] mr-[5%] h-full">
              <Avatar
                name="EBC"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/EBC_logo.svg/1200px-EBC_logo.svg.png"
                className="object-contain object-center"
              />

              <div className="flex flex-col gap-1">
                <p>Ethiopian Broadcasting Corporation</p>
                <div className="flex gap-4">
                  <p>11:00pm</p>
                  <div className="flex gap-1">
                    <p>2</p>
                    <p>sep</p>
                    <p>2022</p>
                  </div>
                </div>
                <div>
                  <img
                    src="https://gdb.voanews.com/A0E0EBFD-8F5A-434D-8A0D-6E3C8C3CCE65_w1023_r1_s.jpg"
                    alt="image"
                    className="w-full"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <p className="text-primary text-[18.08px] font-bold">
                    Ethiopian Flag Day
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quas facilis eius sapiente beatae exercitationem. Iusto
                    quibusdam assumenda qui nihil sint perspiciatis sequi quam.
                    Animi omnis voluptatum quo debitis quod laudantium. Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Sunt,
                    quasi eum omnis distinctio molestias accusantium similique
                    aliquam obcaecati tempora vitae perspiciatis repellendus
                    debitis eveniet, nulla tempore quisquam doloremque sequi
                    facere. Lorem ipsum dolor sit, amet consectetur adipisicing
                    elit. Ex ratione natus dignissimos optio rem laborum enim
                    suscipit omnis nobis, perspiciatis, consequuntur quidem
                    excepturi possimus impedit aperiam dolore quos. Autem,
                    voluptatibus! Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Optio voluptatem hic eum eaque aperiam
                    consequuntur, iste provident nisi tenetur veniam similique
                    ducimus quas dignissimos maiores iusto sed est id quibusdam.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-2 right-[80px]">
        <p className="text-text text-[11.865px] font-medium">
          <BiCopyright className="inline" fontSize="14px" />{" "}
          <span>2022 END Media Network</span>
        </p>
      </div>
    </div>
  );
};

export default show;
