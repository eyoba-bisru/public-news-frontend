import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import SidebarWithHeader from '../../components/Sidenav'
import Link from 'next/link'
import instance from '../../lib/axiosInstance'
import { MdDeleteForever } from 'react-icons/md'
import swal from 'sweetalert'
import { useToast } from '@chakra-ui/react'
type Data = {
  name: string
  id: string
  userId: string
  postId: string
  title: string
  post: {
    title: string
  }
  user: {
    email: string
  }
}[]
const report = () => {
  const [report, setReport] = useState<Data>([])
  const toast = useToast()

  async function fetchData() {
    const { data } = await instance.get('/post/reportFetch')
    setReport(data)
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
        await instance.delete('/post/reportDelete', { data: { id } })
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
    <SidebarWithHeader>
      <Head>
        <title>Report</title>
      </Head>
      <div className='h-screen'>
        <div className='relative overflow-x-auto'>
          <table className='w-full text-sm text-left text-gray-500 '>
            <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
              <tr>
                <th scope='col' className='px-6 py-3'>
                  Users
                </th>
                <th scope='col' className='px-6 py-3'>
                  Post
                </th>
                <th scope='col' className='px-6 py-3'>
                  Report
                </th>
                <th scope='col' className='px-6 py-3'>
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {report.map((rep) => {
                return (
                  <tr className='bg-white border-b'>
                    <th
                      scope='row'
                      className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'
                    >
                      {rep.user.email}
                    </th>
                    <td className='px-6 py-4'>{rep.post.title}</td>
                    <td className='px-6 py-4'>{rep.name}</td>

                    <td className='px-6 py-4'>
                      <button
                        type='button'
                        onClick={() => handleClick(rep.id)}
                        className='bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded'
                      >
                        <MdDeleteForever />
                      </button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </SidebarWithHeader>
  )
}

export default report
