import { AiFillPlusCircle } from 'react-icons/ai'
import { FiEdit } from 'react-icons/fi'
import { BiCopyright, BiShow } from 'react-icons/bi'
import { MdDeleteForever } from 'react-icons/md'
import Editornav from '../../components/Editornav'
import Head from 'next/head'
import Link from 'next/link'
import instance from '../../lib/axiosInstance'
import { useEffect, useState } from 'react'
import swal from 'sweetalert'
import { useToast } from '@chakra-ui/react'
type Data = {
  id: string
  title: string
  content: {
    name: string
  }
  location: {
    name: string
  }
  language: {
    name: string
  }
}[]

const posts = () => {
  const [news, setNews] = useState<Data>([])
  const toast = useToast()

  async function fetchData() {
    const { data } = await instance.get('/post/postedNews')
    setNews(data)
  }
  const handleClick = (id: string) => {
    console.log(id)
    swal({
      title: 'Are you sure you want to delete?',
      icon: 'warning',
      //@ts-ignore
      buttons: true,
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        //@ts-ignore
        await instance.delete('/post/deletePost', { data: { id } })
        toast({
          // @ts-ignore
          title: 'Deletion success',
          variant: 'left-accent',
          isClosable: true,
          status: 'success',
          position: 'bottom-left',
        })
        fetchData()
      }
    })
  }
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className='relative'>
      <Head>
        <title>Posts</title>
      </Head>
      <div className='flex flex-col gap-4'>
        <Editornav />
        <div className='flex justify-center'>
          <div className='flex flex-col gap-10 px-6 w-[70%] h-screen'>
            <div className='flex justify-between items-center'>
              <p className=' text-text text-[19.21px] font-bold '>Posts</p>
              <Link href='editor/addpost'>
                <div className='flex bg-primary hover:bg-secondary gap-2 px-6 py-2  rounded-md cursor-pointer'>
                  <button className='text-white inline'>Add</button>
                  <AiFillPlusCircle className='text-white text-2xl' />
                </div>
              </Link>
            </div>
            <div>
              <table className='min-w-full border-collapse block md:table '>
                <thead className='block md:table-header-group'>
                  <tr className='border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative '>
                    <th className='bg-primary p-2 text-white  font-bold md:border md:border-grey-500 text-left block md:table-cell'>
                      Title
                    </th>
                    <th className='bg-primary p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell'>
                      News Location
                    </th>
                    <th className='bg-primary p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell'>
                      Content Category
                    </th>
                    <th className='bg-primary p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell'>
                      Language Category
                    </th>
                    <th className='bg-primary p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell'>
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className='block md:table-row-group '>
                  {news.map((n) => {
                    return (
                      <tr
                        key={n.id}
                        className='bg-white border border-grey-500 md:border-none block md:table-row'
                      >
                        <td className='p-2 md:border md:border-grey-500 text-left block md:table-cell'>
                          <span className='inline-block w-1/3 md:hidden font-bold'>
                            Title
                          </span>
                          {n.title}
                        </td>

                        <td className='p-2 md:border md:border-grey-500 text-left block md:table-cell'>
                          <span className='inline-block w-1/3 md:hidden font-bold'>
                            News Location
                          </span>
                          {n.location.name}
                        </td>
                        <td className='p-2 md:border md:border-grey-500 text-left block md:table-cell'>
                          <span className='inline-block w-1/3 md:hidden font-bold'>
                            Content Categroy
                          </span>
                          {n.content.name}
                        </td>
                        <td className='p-2 md:border md:border-grey-500 text-left block md:table-cell'>
                          <span className='inline-block w-1/3 md:hidden font-bold'>
                            Language Category
                          </span>
                          {n.language.name}
                        </td>
                        <td className='p-2 md:border md:border-grey-500 text-left block md:table-cell'>
                          <span className='flex gap-2'>
                            <span className='inline w-1/3 md:hidden font-bold'>
                              Action
                            </span>
                            <Link
                              href={`editor/show/${n.id}`}
                              className='bg-primary hover:bg-secondary text-white font-bold py-1 px-2 border border-primary hover:border-secondary rounded'
                            >
                              <BiShow />
                            </Link>
                            <Link
                              href={`editor/edit/${n.id}`}
                              className='bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 border border-green-500 rounded'
                            >
                              <FiEdit />
                            </Link>
                            <button
                              onClick={() => handleClick(n.id)}
                              className='bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded'
                            >
                              <MdDeleteForever />
                            </button>
                          </span>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
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

export default posts
