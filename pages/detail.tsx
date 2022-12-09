import React, { useEffect, useState } from 'react'
import { Avatar } from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import { BiCopyright } from 'react-icons/bi'
import Editornav from '../components/UserNavbar'
import UserNavbar from '../components/UserNavbar'
import { BsFillBookmarkPlusFill } from 'react-icons/bs'
import Link from 'next/link'
import Footer from '../components/Footer'
const detail = () => {
  return (
    <div className='relative min-h-screen'>
      <Head>
        <title>Detail</title>
      </Head>
      <UserNavbar />
      <div className='flex flex-col gap-8 w-full min-h-screen'>
        <div className='min-h-screen flex lg:flex-row flex-col md:justify-start justify-center items-center gap-4 lg:gap-10 h-full'>
          <div className='flex lg:justify-start md:justify-center sm:items-center justify-center md:items-center min-h-screen sm:ml-[7.5%] mt-[55px] lg:w-[65%] sm:[w-70%]'>
            <div className='flex flex-col gap-2 justify-center md:justify-start items-center md:w-[80%] lg:w-full h-full w-[95%]'>
              <div className='flex gap-2 justify-start h-full w-full'>
                <Avatar
                  name='EBC'
                  src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/EBC_logo.svg/1200px-EBC_logo.svg.png'
                  className='object-contain object-center -z-10'
                />

                <div className='flex flex-col gap-1'>
                  <div className='flex justify-between items-center'>
                    <div>
                      <p>Ethiopian Broadcasting Corporation</p>
                      <div className='flex gap-4'>
                        <p>11:00pm</p>
                        <div className='flex gap-1'>
                          <p>2</p>
                          <p>sep</p>
                          <p>2022</p>
                        </div>
                      </div>
                    </div>
                    <Link href='/bookmark'>
                      <BsFillBookmarkPlusFill className='text-primary w-5 h-14' />
                    </Link>
                  </div>

                  <div>
                    <img
                      src='https://gdb.voanews.com/A0E0EBFD-8F5A-434D-8A0D-6E3C8C3CCE65_w1023_r1_s.jpg'
                      alt='image'
                      className='md:w-full sm:h-[300px] md:h-[350px] lg:h-[370px] w-full h-[200px]'
                    />
                  </div>
                  <div className='flex flex-col gap-3 mt-4'>
                    <p className='text-primary text-[18.08px] font-bold'>
                      Ethiopian Flag Day
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quas facilis eius sapiente beatae exercitationem. Iusto
                      quibusdam assumenda qui nihil sint perspiciatis sequi
                      quam. Animi omnis voluptatum quo debitis quod laudantium.
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sunt, quasi eum omnis distinctio molestias accusantium
                      similique aliquam obcaecati tempora vitae perspiciatis
                      repellendus debitis eveniet, nulla tempore quisquam
                      doloremque sequi facere. Lorem ipsum dolor sit, amet
                      consectetur adipisicing elit. Ex ratione natus dignissimos
                      optio rem laborum enim suscipit omnis nobis, perspiciatis,
                      consequuntur quidem excepturi possimus impedit aperiam
                      dolore quos. Autem, voluptatibus! Lorem ipsum dolor sit
                      amet consectetur adipisicing elit. Optio voluptatem hic
                      eum eaque aperiam consequuntur, iste provident nisi
                      tenetur veniam similique ducimus quas dignissimos maiores
                      iusto sed est id quibusdam.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='sm:h-[750px] h-[1400px] lg:mt-[120px] bg-white lg:w-[35%] w-[70%] ml-[19%] sm:w-[70%] sm:ml-[20%] mr-[20%] lg:ml-0 lg:mr-[6.5%] flex flex-col items-center gap-5'>
            <p className='text-[17.515px] text-text mt-2'>Recommended</p>
            <Link
              href='/anotherdetail'
              className='flex flex-col-reverse sm:flex-row justify-cente items-center sm:h-[120px] h-[250px] sm:w-[80%]  w-full lg:w-full'
            >
              <div className='sm:w-[57%]  w-full flex justify-center items-center sm:h-full h-[35%]'>
                <p className='flex justify-center items-center ml-4 sm:ml-4 md:ml-none text-[16px] font-bold'>
                  Menilik II baptised as sahle mariyam
                </p>
              </div>
              <div className='sm:w-[43%] sm:h-full h-[65%] w-[80%] flex items-center justify-center'>
                <img
                  src='https://th.bing.com/th/id/OIP.duIVaw6uAfEFU36SNdOJEAHaGL?w=247&h=206&c=7&r=0&o=5&pid=1.7'
                  className='w-[90%] h-[90%] rounded'
                />
              </div>
            </Link>
            <Link
              href='/anotherdetail'
              className='flex flex-col-reverse sm:flex-row justify-cente items-center sm:h-[120px] h-[250px] sm:w-[80%]  w-full lg:w-full'
            >
              <div className='sm:w-[57%]  w-full flex justify-center items-center sm:h-full h-[35%]'>
                <p className='flex justify-center items-center ml-4 sm:ml-4 md:ml-none text-[16px] font-bold'>
                  Menilik II baptised as sahle mariyam
                </p>
              </div>
              <div className='sm:w-[43%] sm:h-full h-[65%] w-[80%] flex items-center justify-center'>
                <img
                  src='https://th.bing.com/th/id/OIP.duIVaw6uAfEFU36SNdOJEAHaGL?w=247&h=206&c=7&r=0&o=5&pid=1.7'
                  className='w-[90%] h-[90%] rounded'
                />
              </div>
            </Link>
            <Link
              href='/anotherdetail'
              className='flex flex-col-reverse sm:flex-row justify-cente items-center sm:h-[120px] h-[250px] sm:w-[80%]  w-full lg:w-full'
            >
              <div className='sm:w-[57%]  w-full flex justify-center items-center sm:h-full h-[35%]'>
                <p className='flex justify-center items-center ml-4 sm:ml-4 md:ml-none text-[16px] font-bold'>
                  Menilik II baptised as sahle mariyam
                </p>
              </div>
              <div className='sm:w-[43%] sm:h-full h-[65%] w-[80%] flex items-center justify-center'>
                <img
                  src='https://th.bing.com/th/id/OIP.duIVaw6uAfEFU36SNdOJEAHaGL?w=247&h=206&c=7&r=0&o=5&pid=1.7'
                  className='w-[90%] h-[90%] rounded'
                />
              </div>
            </Link>
            <Link
              href='/anotherdetail'
              className='flex flex-col-reverse sm:flex-row justify-cente items-center sm:h-[120px] h-[250px] sm:w-[80%]  w-full lg:w-full'
            >
              <div className='sm:w-[57%]  w-full flex justify-center items-center sm:h-full h-[35%]'>
                <p className='flex justify-center items-center ml-4 sm:ml-4 md:ml-none text-[16px] font-bold'>
                  Menilik II baptised as sahle mariyam
                </p>
              </div>
              <div className='sm:w-[43%] sm:h-full h-[65%] w-[80%] flex items-center justify-center'>
                <img
                  src='https://th.bing.com/th/id/OIP.duIVaw6uAfEFU36SNdOJEAHaGL?w=247&h=206&c=7&r=0&o=5&pid=1.7'
                  className='w-[90%] h-[90%] rounded'
                />
              </div>
            </Link>
            <Link
              href='/anotherdetail'
              className='flex flex-col-reverse sm:flex-row justify-cente items-center sm:h-[120px] h-[250px] sm:w-[80%]  w-full lg:w-full'
            >
              <div className='sm:w-[57%]  w-full flex justify-center items-center sm:h-full h-[35%]'>
                <p className='flex justify-center items-center ml-4 sm:ml-4 md:ml-none text-[16px] font-bold'>
                  Menilik II baptised as sahle mariyam
                </p>
              </div>
              <div className='sm:w-[43%] sm:h-full h-[65%] w-[80%] flex items-center justify-center'>
                <img
                  src='https://th.bing.com/th/id/OIP.duIVaw6uAfEFU36SNdOJEAHaGL?w=247&h=206&c=7&r=0&o=5&pid=1.7'
                  className='w-[90%] h-[90%] rounded'
                />
              </div>
            </Link>
          </div>
        </div>
        <div className='w-full'>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default detail
