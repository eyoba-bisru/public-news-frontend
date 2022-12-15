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
      <div className='flex flex-col gap-4 items-center'>
        <div className='flex items-center gap-1 w-full justify-center mt-[66px] relative'>
          <form className='flex items-center w-full gap-1 justify-center'>
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
            <BsSearch className='absolute text-text md:ml-[70%] ml-[75%]' />
          </form>
        </div>
        <div className='h-auto flex justify-center items-center md:w-[75.15%] sm:w-[80.15%] w-[90.15%] md:h-[187.58px] bg-primary text-white flex items-center justify-center rounded-tl-none rounded-bl rounded-tr-none rounded-br'>
          <div className='w-full max-w-[1200px]'>
            <div className='flex justify-center items-center md:flex-row flex-col md:gap-14 gap-10'>
              <div className='flex sm:flex-row mt-[2px] sm:mt-[0px] flex-col gap-2 sm:gap-4 justify-center items-center md:block'>
                <h2 className='font-bold text-[1.3rem] mb-2'>Sitemap</h2>
                <div className='grid grid-cols-3 gap-x-6 my-2'>
                  {sitemap.map((site) => (
                    <Link href={`/${site.name.toLowerCase()}`}>
                      <p key={site.id}>{site.name}</p>
                    </Link>
                  ))}
                </div>
              </div>
              <div className='flex sm:flex-row mt-[2px] sm:mt-[0px] flex-col gap-2 sm:gap-4 justify-center items-center gap-4 md:block'>
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
