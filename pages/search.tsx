import React from 'react'
import UserNavbar from '../components/UserNavbar'
import { BsSearch } from 'react-icons/bs'
import { BiCopyright } from 'react-icons/bi'
import Head from 'next/head'
const search = () => {
  return (
    <div className='flex flex-col gap-4 relative h-screen'>
      <Head>
        <title>Search</title>
      </Head>
      <div className='z-10'>
        <UserNavbar />
      </div>
      <div className='flex flex-col gap-4'>
        <div className='flex items-center gap-1 justify-center mt-[66px] relative'>
          <select
            id='content'
            className=' bg-white md:w-[15%] sm:w-[20%] w-[30%] rounded-tl rounded-bl-none rounded-tr-none rounded-rl-none border-2 border-white py-[7px] px-4 leading-tight focus:outline-none focus:bg-white focus:border-primary'
          >
            <option value='Ethiopia'>Ethiopia</option>
            <option value='World'>World</option>
            <option value='Technology'>Techonolgy</option>
            <option value='Culture'>Culture</option>
            <option value='Business'>Buisness</option>
            <option value='Politics'>Politics</option>
            <option value='Weather'>Weather</option>
            <option value='Health'>Health</option>
            <option value='Travel'>Travel</option>
            <option value='History'>History</option>
            <option value='Sport'>Sport</option>
            <option value='Nature'>Nature</option>
            <option value='Amharic'>Amharic</option>
            <option value='Tigrigna'>Tigrigna</option>
            <option value='Oromigna'>Oromigna</option>
            <option value='Somaligna'>Somaligna</option>
            <option value='Afarigna'>Afarigna</option>
            <option value='Wolaytigna'>Wolaytigna</option>
            <option value='English'>English</option>
            <option value='Arab'>Arab</option>
          </select>
          <input
            className='bg-white w-[60%] rounded-tl-none rounded-bl-none rounded-tr rounded-br-none  border-2 border-white py-[8px] px-4 leading-tight focus:outline-none focus:bg-white focus:border-primary'
            id='title'
            type='text'
            placeholder='Search'
          />
          <BsSearch className='absolute text-text md:ml-[70%] ml-[80%]' />
        </div>
        <div className='sm:h-[251.99px] h-[400px] flex justify-center'>
          <div className='bg-primary md:w-[75%] sm:w-[80%] w-[91%] rounded-tl-none rounded-tr-none rounded-bl rounded-br h-full border-4 border-primary'>
            <div className='flex sm:flex-row flex-col justify-center sm:gap-[4%] md:gap-[10%] gap-6 w-full h-full items-center'>
              <div className='flex flex-col gap-4 sm:items-baseline items-center'>
                <p className='text-white text-[19.775px] font-medium'>
                  Categories
                </p>
                <div className='flex gap-2 text-[15px] text-white ml-6'>
                  <div className='flex-col gap-2 text-white'>
                    <p>Ethiopia</p>
                    <p>World</p>
                    <p>Technology</p>
                    <p>Culture</p>
                  </div>
                  <div className='flex-col gap-2'>
                    <p>Business</p>
                    <p>Politics</p>
                    <p>Weather</p>
                    <p>Health</p>
                  </div>
                  <div className='flex-col gap-2'>
                    <p>Travel</p>
                    <p>History</p>
                    <p>Sport</p>
                    <p>Nature</p>
                  </div>
                </div>
              </div>
              <div className='flex flex-col gap-4 sm:items-baseline items-center'>
                <p className='text-white text-[19.775px] font-medium'>News</p>
                <div className='flex gap-2 text-[15px] text-white ml-6'>
                  <div className='flex-col gap-2'>
                    <p>Amharic</p>
                    <p>Tigrigna</p>
                    <p>Oromiffa</p>
                    <p>Somaligna</p>
                  </div>
                  <div className='flex-col gap-2'>
                    <p>Afarigna</p>
                    <p>Wolaytigna</p>
                    <p>English</p>
                    <p>Arabic</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='absolute bottom-2 right-[80px]'>
        <p className='text-text text-[11.865px] font-medium'>
          <BiCopyright className='inline' fontSize='14px' />
          <span>2022 END Media Network</span>
        </p>
      </div>
    </div>
  )
}

export default search
