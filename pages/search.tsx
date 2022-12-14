import UserNavbar from '../components/UserNavbar'
import { BsSearch } from 'react-icons/bs'
import { BiCopyright } from 'react-icons/bi'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import axiosInstance from '../lib/axiosInstance'

import Head from 'next/head'
type Data = {
  id: string
  name: string
}[]
const search = () => {
  const [content, setContent] = useState<Data>([])
  const [sitemap, setSitemap] = useState<Data>([])
  const [languages, setLanguages] = useState<Data>([])
  async function fetchData() {
    const content = await axiosInstance('/configuration/all')
    const site = await axiosInstance('/configuration/sitemap')
    const lang = await axiosInstance('/configuration/languages')
    console.log(content.data)
    setContent(content.data)
    setSitemap(site.data)
    setLanguages(lang.data)
  }

  useEffect(() => {
    fetchData()
    console.log(sitemap)
    console.log(languages)
  }, [])
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
          <form>
            <select
              id='content'
              className=' bg-white md:w-[15%] sm:w-[20%] w-[30%] rounded-tl rounded-bl-none rounded-tr-none rounded-rl-none border-2 border-white py-[7px] px-4 leading-tight focus:outline-none focus:bg-white focus:border-primary'
            >
              <option value='all'>All</option>
              {content.map((d) => (
                <option value={d.name.toLowerCase()} key={d.id}>
                  {d.name}
                </option>
              ))}
            </select>
            <input
              className='bg-white w-[60%] rounded-tl-none rounded-bl-none rounded-tr rounded-br-none  border-2 border-white py-[8px] px-4 leading-tight focus:outline-none focus:bg-white focus:border-primary'
              id='title'
              type='text'
              placeholder='Search'
            />
            <BsSearch className='absolute text-text md:ml-[70%] ml-[80%]' />
          </form>
        </div>
        <div className='w-full h-auto md:h-[187.58px] bg-primary text-white flex items-center justify-center'>
          <div className='w-full max-w-[1200px]'>
            <div className='flex justify-center items-center md:flex-row flex-col md:gap-14 gap-10'>
              <div className='flex gap-4 justify-center items-center md:block'>
                <h2 className='font-bold text-[1.3rem] mb-2'>Sitemap</h2>
                <div className='grid grid-cols-3 gap-x-6 my-2'>
                  {sitemap.map((site) => (
                    <Link href={`/${site.name.toLowerCase()}`}>
                      <p key={site.id}>{site.name}</p>
                    </Link>
                  ))}
                </div>
              </div>
              <div className='flex justify-center items-center gap-4 md:block'>
                <h2 className='font-bold text-[1.3rem] mb-2'>Languages</h2>
                <div className='grid grid-cols-2 gap-x-6'>
                  {languages.map((lang) => (
                    <Link href={`/${lang.name.toLowerCase()}`}>
                      <p key={lang.id}>{lang.name}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className='sm:h-[251.99px] h-[400px] flex justify-center'>
          <div className='bg-primary md:w-[75%] sm:w-[80%] w-[91%] rounded-tl-none rounded-tr-none rounded-bl rounded-br h-full border-4 border-primary'>
            <div className='flex sm:flex-row flex-col justify-center sm:gap-[4%] md:gap-[10%] gap-6 w-full h-full items-center'>
              <div className='flex flex-col gap-4 sm:items-baseline items-center'>
                <p className='text-white text-[19.775px] font-medium'>
                  Categories
                </p>
                <div className='flex gap-2 text-[15px] text-white ml-6'>
                  <div className='flex-col gap-2 text-white'>
                    {}
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
                    {languages.slice(0,4).map((lang) => (
                      <Link href={`/${lang.name.toLowerCase()}`}>
                        <p key={lang.id}>{lang.name}</p>
                      </Link>
                    ))}
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
        </div> */}
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
