import React, { useEffect, useState } from 'react'
import { Avatar, useToast } from '@chakra-ui/react'
import Head from 'next/head'
import UserNavbar from '../../components/UserNavbar'
import { BsFillBookmarkPlusFill } from 'react-icons/bs'
import Link from 'next/link'
import Footer from '../../components/Footer'
import { NextRouter, useRouter } from 'next/router'
import axiosInstance from '../../lib/axiosInstance'
import { day, month, timeFunc, year } from '../../lib/timeConverter'
import { useAuth } from '../../context/AuthContext'
import swal from 'sweetalert'
import instance from '../../lib/axiosInstance'
import { MdBookmarkRemove } from 'react-icons/md'
import {
  AiFillDislike,
  AiFillLike,
  AiOutlineDislike,
  AiOutlineLike,
} from 'react-icons/ai'

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
type Reco = {
  id: string
  title: string
  imageUrl: string
}[]

type IsLiked = {
  isLiked: boolean
}
type IsUnliked = {
  isUnliked: boolean
}

type NumOfLiked = {
  num: Number
}

type Comments = {
  id: string
  name: string
  user: {
    name: string
  }
}[]
// type Reports = {
//   id: string
//   name: string
//   user: {
//     name: string
//   }
// }[]
const Detail = ({ post, recommend }: { post: Data; recommend: Reco }) => {
  const user = useAuth().user
  const [isLiked, setIsLiked] = useState<IsLiked>({ isLiked: false })
  const [isUnliked, setIsUnliked] = useState<IsUnliked>({ isUnliked: false })
  const [numOfLiked, setNumOfLiked] = useState<NumOfLiked>({ num: 0 })
  const [comments, setComments] = useState<Comments>([])
  const [report, setReport] = useState('')
  const [reports, setReports] = useState('')
  const [comment, setComment] = useState('')
  const router = useRouter()
  const toast = useToast()

  async function fetchComments() {
    const { data } = await instance.post('/post/getAllComments', {
      postId: router.query.pid,
    })
    setComments(data)
  }

  async function fetchData() {
    if (user) {
      const { data } = await instance.post('/post/isLiked', {
        postId: router.query.pid,
      })
      setIsLiked(data)
      const { data: unlike } = await instance.post('/post/isUnliked', {
        postId: router.query.pid,
      })
      setIsUnliked(unlike)
    }

    const { data: num } = await instance.post('/post/numOfLiked', {
      postId: router.query.pid,
    })
    setNumOfLiked(num)
  }

  console.log(isUnliked, isLiked)

  const handleRedirect = () => {
    swal({
      title: `You have to login to bookmark`,
      icon: 'warning',
      //@ts-ignore
      buttons: true,
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        router.replace('/auth/login')
      }
    })
  }

  const handleBookmark = async () => {
    try {
      const { data: bookmark } = await instance.post('/post/bookmark', {
        userId: user.id,
        postId: router.query.pid,
      })

      console.log(bookmark)

      toast({
        title: 'Bookmark added',
        variant: 'left-accent',
        isClosable: true,
        status: 'success',
        position: 'bottom-left',
      })

      setTimeout(() => {
        window.location.reload()
      }, 1000)
    } catch (error) {
      toast({
        // @ts-ignore
        title: error?.response?.data,
        variant: 'left-accent',
        isClosable: true,
        status: 'error',
        position: 'bottom-left',
      })
    }
  }

  const handleLike = async () => {
    try {
      const { data } = await instance.post('/post/like', {
        postId: router.query.pid,
      })
      setIsLiked(data)
      fetchData()
    } catch (error) {
      console.log(error)
    }
  }
  const handleUnlike = async () => {
    try {
      const { data } = await instance.post('/post/unlike', {
        postId: router.query.pid,
      })
      setIsUnliked(data)
      fetchData()
    } catch (error) {
      console.log(error)
    }
  }

  const handleRemove = () => {
    swal({
      title: 'Do you want to remove from bookmark?',
      icon: 'warning',
      // @ts-ignore
      buttons: true,
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        try {
          const { data: bookmark } = await instance.post(
            '/post/removeBookmark',
            {
              userId: user.id,
              postId: router.query.pid,
            }
          )

          toast({
            title: 'Bookmark removed',
            variant: 'left-accent',
            isClosable: true,
            status: 'success',
            position: 'bottom-left',
          })
        } catch (error) {
          toast({
            // @ts-ignore
            title: error?.response.data,
            variant: 'left-accent',
            isClosable: true,
            status: 'error',
            position: 'bottom-left',
          })
        }

        setTimeout(() => {
          window.location.reload()
        }, 1000)
      }
    })
  }

  async function handleSubmit(e: any) {
    e.preventDefault()
    if (!user) {
      if (comment) {
        toast({
          // @ts-ignore
          title: 'You need to login to comment',
          variant: 'left-accent',
          isClosable: true,
          status: 'error',
          position: 'bottom-left',
        })
      } else {
        toast({
          // @ts-ignore
          title: 'You need to login to report',
          variant: 'left-accent',
          isClosable: true,
          status: 'error',
          position: 'bottom-left',
        })
      }
    } else {
      if (comment) {
        const { data } = await instance.post('/post/comments', {
          name: comment,
          postId: router.query.pid,
        })
        setComment('')
      } else {
        const { data: reports } = await instance.post('/post/reports', {
          name: report,
          postId: router.query.pid,
        })
        setReport('')
        toast({
          // @ts-ignore
          title: 'Report sent successfully',
          variant: 'left-accent',
          isClosable: true,
          status: 'success',
          position: 'bottom-left',
        })
      }

      fetchComments()
    }
  }

  async function customize() {
    let customize = {};
    if (user) {
      customize = await instance.post("/post/customize", {
        contentId: post.content.id,
      });
    }
    console.log("customize", customize);
  }

  useEffect(() => {
    fetchData()
    fetchComments()
  }, [router.query.pid])

  let count = 0;
  useEffect(() => {
    if (count == 0) customize();
    count++;
  }, []);

  return (
    <div className='relative min-h-screen'>
      <Head>
        <title>Detail</title>
      </Head>
      <UserNavbar />

      <div className='flex flex-col gap-8 w-full min-h-screen'>
        <div className='flex lg:flex-row flex-col md:justify-start justify-center items-center lg:items-start gap-4 lg:gap-10 h-full mt-[48.6px]'>
          <div className='flex lg:justify-start md:justify-center sm:items-center justify-center md:items-center lg:ml-[6.5%] mt-[30px] lg:w-[65%] w-full'>
            <div className='flex flex-col gap-2 justify-center md:justify-start items-center md:w-full lg:w-full w-full ml-[20px] mr-[20px] mt-0 mb-0 sm:ml-[20px] sm:mr-[20px]sm:mt-[0px]sm:mb-[0px] md:ml-[30px] md:mr-[30px] md:mt-[0px] md:mb-[0px] lg:m-[0px]'>
              <div className='flex gap-2 justify-center h-full w-full'>
                <div className='flex flex-col gap-1'>
                  <div>
                    <div className='flex justify-between items-center'>
                      <div className='flex gap-2 items-center'>
                        <Avatar
                          name={post?.user.name}
                          className='object-contain object-center -z-10'
                        />
                        <div>
                          <p>{post?.user.name}</p>
                          <div className='flex gap-4'>
                            <p>{timeFunc(post.createdAt!)}</p>
                            <div className='flex gap-1'>
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
                              className='text-primary w-5 h-14'
                            />
                          ) : (
                            <BsFillBookmarkPlusFill
                              onClick={handleBookmark}
                              className='text-primary w-5 h-14'
                            />
                          )
                        ) : (
                          <BsFillBookmarkPlusFill
                            onClick={handleRedirect}
                            className='text-primary w-5 h-14'
                          />
                        )}
                      </button>
                      {/* </Link> */}
                    </div>
                    <div>
                      <img
                        src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/files/${post?.imageUrl}`}
                        alt='image'
                        className='md:w-full sm:h-[370px] lg:h-[370px] w-full h-[200px]'
                      />
                    </div>
                  </div>
                  <div className='flex flex-col gap-3 mt-4'>
                    <p className='text-primary text-[18.08px] font-bold'>
                      {post?.title}
                    </p>
                    <p>{post?.description}</p>
                  </div>
                  <div>
                    {post.sources ? (
                      <p className='font-bold italic mt-4'>
                        Sources: {post.sources}
                      </p>
                    ) : (
                      ''
                    )}
                  </div>
                  <div className='flex gap-12 text-xl mt-4'>
                    <div className='flex gap-2 justify-center items-center'>
                      {isLiked?.isLiked ? (
                        <AiFillLike
                          className='cursor-pointer'
                          onClick={handleLike}
                        />
                      ) : (
                        <AiOutlineLike
                          className='cursor-pointer'
                          onClick={handleLike}
                        />
                      )}
                      {/* @ts-ignore */}
                      <p>{numOfLiked.num}</p>
                    </div>
                    <div className='flex justify-center items-center'>
                      {isUnliked.isUnliked ? (
                        <AiFillDislike
                          className='cursor-pointer'
                          onClick={handleUnlike}
                        />
                      ) : (
                        <AiOutlineDislike
                          className='cursor-pointer'
                          onClick={handleUnlike}
                        />
                      )}
                    </div>
                  </div>
                  <div className='w-full'>
                    <div className='flex gap-2 justify-between'>
                      <form onSubmit={handleSubmit} className='w-full mt-8'>
                        <label className='block mb-2'>
                          <span className='text-gray-600'>Add a comment</span>
                          <textarea
                            className='block w-full mt-1 outline-none p-2 rounded'
                            // @ts-ignore
                            rows='3'
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            required
                          ></textarea>
                        </label>
                        <button className='px-3 py-2 mt-2 text-sm text-white bg-primary hover:bg-secondary rounded'>
                          Comment
                        </button>
                      </form>
                      <form onSubmit={handleSubmit} className='w-full mt-8'>
                        <label className='block mb-2'>
                          <span className='text-gray-600'>Add a Report</span>
                          <textarea
                            className='block w-full mt-1 outline-none p-2 rounded'
                            // @ts-ignore
                            rows='3'
                            value={report}
                            onChange={(e) => setReport(e.target.value)}
                            required
                          ></textarea>
                        </label>
                        <button
                          type='submit'
                          className='px-3 py-2 mt-2 text-sm text-white bg-primary hover:bg-secondary rounded'
                        >
                          Add report
                        </button>
                      </form>
                    </div>

                    <div className='mt-8'>
                      <section className='bg-white p-4'>
                        <div className='flex justify-between items-center'>
                          <h2 className='text-lg lg:text-2xl font-bold text-gray-900 '>
                            Comments ({comments.length})
                          </h2>
                        </div>
                        {comments.map((c) => {
                          return (
                            <article className='p-4 text-base bg-white rounded-lg '>
                              <footer className='flex justify-between items-center mb-2'>
                                <div className='flex items-center'>
                                  <p className='inline-flex items-center mr-3 gap-2 text-sm text-gray-900 '>
                                    <Avatar size='sm' name={c.user.name} />{' '}
                                    <p>{c.user.name}</p>
                                  </p>
                                </div>
                              </footer>
                              <p className='text-gray-500'>{c.name}</p>
                            </article>
                          )
                        })}
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {recommend.length == 0 ? (
            ''
          ) : (
            <div className='lg:mt-[86px] bg-white lg:w-[35%] w-[70%] hidden lg:flex flex-col items-center gap-5 lg:mr-[88px] rounded'>
              <p className='text-[17.515px] text-text mt-2'>Recommended</p>
              {recommend.map((d) => (
                <Link
                  href={'/detail/' + d.id}
                  key={d.id}
                  className='flex flex-col-reverse sm:flex-row justify-cente items-center sm:h-[120px] h-[250px] sm:w-[80%]  w-full lg:w-full'
                >
                  <div className='sm:w-[43%] sm:h-full h-[65%] w-[80%] flex items-center justify-center ml-2'>
                    <img
                      src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/files/${d.imageUrl}`}
                      className='w-[90%] h-[90%] rounded'
                    />
                  </div>
                  <div className='sm:w-[57%]  w-full flex justify-center items-center sm:h-full h-[35%]'>
                    <p className='flex justify-center items-center ml-4 sm:ml-4 md:ml-none text-[16px] font-bold'>
                      {d.title}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* <p>Hellow</p> */}
        </div>

        <div className='w-full'>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps(router: NextRouter) {
  const { data } = await axiosInstance.post<Data>('/post', {
    id: router.query.pid,
  })

  const { data: d } = await axiosInstance.post<Data>('/post/recommended', {
    id: data.id,
    contentId: data.content.id,
  })

  return { props: { post: data, recommend: d } }
}

export default Detail
