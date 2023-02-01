import { Avatar } from '@chakra-ui/react'
import { D } from 'chart.js/dist/chunks/helpers.core'
import Head from 'next/head'
import { NextRouter, useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { BiCopyright } from 'react-icons/bi'
import Editornav from '../../../components/Editornav'
import instance from '../../../lib/axiosInstance'
import axiosInstance from '../../../lib/axiosInstance'
import { day, month, timeFunc, year } from '../../../lib/timeConverter'

type Data = {
  id: string
  title: string
  description: string
  imageUrl: string
  sources: string | null
  createdAt: Date
  user: {
    name: string
  }
  content: {
    id: string
  }
  Bookmark: {
    userId: string
    user: {
      id: string
    }
    postId: string
  }[]
}
const Show = ({ post }: { post: Data }) => {
  const router = useRouter()
  // const [show, setShow] = useState<Data>([])

  // async function fetchData() {
  //   const { data } = await instance.post<Data>('/post', {
  //     id: router.query.showid,
  //   })
  //   setShow(data)
  // }
  // useEffect(() => {
  //   fetchData()
  // }, [])
  // console.log(show)

  return (
    <div className='relative min-h-screen'>
      <Head>
        <title>Show Post</title>
      </Head>
      <Editornav />
      <div className='flex justify-center items-center mt-10'>
        <div className='flex justify-center min-h-screen'>
          <div className='flex flex-col gap-2 items-center h-full'>
            <div className='flex gap-2 justify-center md:ml-[20%] md:mr-[20%] ml-[5%] mr-[5%] h-full'>
              <Avatar
                name={post?.user.name}
                className='object-contain object-center bg-primary'
              />

              <div className='flex flex-col gap-1'>
                <p>{post?.user.name}</p>
                <div className='flex gap-4'>
                  <p>{timeFunc(post.createdAt!)}</p>
                  <div className='flex gap-1'>
                    <p>{day(post.createdAt!)}</p>
                    <p>{month(post.createdAt)}</p>
                    <p>{year(post.createdAt)}</p>
                  </div>
                </div>
                <div>
                  <img
                    src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/files/${post?.imageUrl}`}
                    alt='image'
                    className='md:w-full sm:h-[370px] lg:h-[370px] w-full h-[200px]'
                  />
                </div>
                <div className='flex flex-col gap-3'>
                  <p className='text-primary text-[18.08px] font-bold'>
                    {post?.title}
                  </p>
                  <p>{post?.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='absolute bottom-2 right-[80px]'>
        <p className='text-text text-[11.865px] font-medium'>
          <BiCopyright className='inline' fontSize='14px' />{' '}
          <span>2022 END Media Network</span>
        </p>
      </div>
    </div>
  )
}
export async function getServerSideProps(router: NextRouter) {
  const { data } = await axiosInstance.post<Data>('/post', {
    id: router.query.showid,
  })
  console.log(data)

  return { props: { post: data } }
}

export default Show
