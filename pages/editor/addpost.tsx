import { Button } from '@chakra-ui/react'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import { BiCopyright } from 'react-icons/bi'
import Editornav from '../../components/Editornav'
import PasswordInput from '../../components/PasswordInputSignup'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useAuth } from '../../context/AuthContext'
import instance from '../../lib/axiosInstance'
import { useToast } from '@chakra-ui/react'
type Values = {
  id: string
  name: string
}[]
const addpost = () => {
  const [locations, setLocations] = useState<Values>([])
  const [contents, setContents] = useState<Values>([])
  const [languages, setLanguages] = useState<Values>([])
  async function fetchLocations() {
    const { data } = await instance.get('/configuration/locations')
    setLocations(data)
  }
  async function fetchContents() {
    const { data } = await instance.get('/configuration/contents')
    setContents(data)
  }
  async function fetchLanguages() {
    const { data } = await instance.get('/configuration/languages')
    setLanguages(data)
  }
  useEffect(() => {
    fetchLocations()
    fetchContents()
    fetchLanguages()
  }, [])

  const formik: any = useFormik({
    initialValues: {
      titles: '',
      description: '',
      selectlocation: 'location',
    },

    validationSchema: Yup.object({
      titles: Yup.string().min(8, 'Too Short!').max(20, 'Too Long!'),
      description: Yup.string().min(100, 'Too Short!'),
      selectlocation: Yup.string(),
    }),

    onSubmit: async (values, { resetForm }) => {
      alert(JSON.stringify(values, null, 2))
      try {
        console.log('hi')
        console.log(values.selectlocation)
        resetForm()
      } catch (error) {
        console.log(error)
      }
    },
  })
  return (
    <div>
      <Head>
        <title>Add Posts</title>
      </Head>
      <div className='flex flex-col gap-10 min-h-screen relative'>
        <Editornav />
        <div className='flex flex-col items-center justify-center gap-2 mb-32'>
          <form onSubmit={formik.handleSubmit} className='flex flex-col gap-4'>
            <div className='flex md:flex-row flex-col gap-4'>
              <div className='flex flex-col gap-8'>
                <div className='flex flex-col gap-2 w-full md:w-[450px]'>
                  <label htmlFor='title' className='text-text font-medium'>
                    Title
                  </label>
                  <input
                    className=' bg-white rounded appearance-none border-2 border-white w-full py-2 px-4  leading-tight focus:outline-none focus:bg-white focus:border-primary'
                    id='title'
                    onChange={formik.handleChange}
                    value={formik.values.titles}
                    name='titles'
                    onBlur={formik.handleBlur}
                    type='text'
                    placeholder='title'
                    required
                  />
                  {formik.touched.titles && formik.errors.titles ? (
                    <div className='text-red-600 text-sm'>
                      {formik.errors.titles}
                    </div>
                  ) : null}
                </div>
                <div className='flex flex-col gap-2 md:w-[450px]'>
                  <label
                    htmlFor='description'
                    className='text-text font-medium'
                  >
                    Description
                  </label>
                  <textarea
                    name='description'
                    onChange={formik.handleChange}
                    value={formik.values.description}
                    onBlur={formik.handleBlur}
                    required
                    id='description'
                    className='resize-y h-[240px] rounded bg-white appearance-none border-2 border-white w-full py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-primary'
                  ></textarea>
                  {formik.touched.description && formik.errors.description ? (
                    <div className='text-red-600 text-sm'>
                      {formik.errors.description}
                    </div>
                  ) : null}
                </div>
              </div>
              <div className='flex flex-col gap-8 w-full md:w-[450px]'>
                <div className='flex flex-col gap-2'>
                  <label htmlFor='location' className='text-text font-medium'>
                    News Location
                  </label>

                  <select
                    id='location'
                    value={formik.values.selectslocaiton}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    name='selectlocation'
                    className='rounded bg-white text-sm focus:ring-primary focus:border-primary block w-full py-2.5'
                  >
                    {locations?.map((location) => (
                      <option key={location.id}>{location.name}</option>
                    ))}
                  </select>
                </div>
                <div className='flex flex-col gap-2 w-full md:w-[450px]'>
                  <label htmlFor='content' className='text-text font-medium'>
                    Content Category
                  </label>
                  <select
                    id='content'
                    className='rounded bg-white border-2 border-white text-sm focus:ring-primary focus:border-primary block w-full py-2.5'
                  >
                    {contents?.map((content) => (
                      <option key={content.id}>{content.name}</option>
                    ))}
                  </select>
                </div>
                <div className='flex flex-col gap-2 w-full md:w-[450px]'>
                  <label htmlFor='language' className='text-text font-medium'>
                    Language Category
                  </label>
                  <select
                    id='language'
                    className='rounded bg-white border-2 border-white text-sm focus:ring-primary focus:border-primary block w-full p-2.5'
                  >
                    {languages?.map((language) => (
                      <option key={language.id}>{language.name}</option>
                    ))}
                  </select>
                </div>
                <div className='flex flex-col justify-center w-full md:w-[450px]'>
                  <label htmlFor='image' className='text-text font-medium'>
                    Image
                  </label>
                  <span className='sr-only'></span>
                  <input
                    type='file'
                    id='image'
                    required
                    className='ml-6 rounded block w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white hover:file:bg-secondary'
                  />
                </div>
              </div>
            </div>
            <div className='md:w-[30%] w-[50%] mx-auto mt-7'>
              <Button
                bg='#4C230A'
                type='submit'
                _hover={{ bg: '#A53F2B' }}
                color='white'
                width='full'
                paddingY='5'
              >
                Post
              </Button>
            </div>
          </form>
        </div>
      </div>
      <div className='absolute bottom-1 md:right-[50px] right-[30px]'>
        <p className='text-text text-[11.865px] font-medium'>
          <BiCopyright className='inline' fontSize='14px' />
          <span>2022 END Media Network</span>
        </p>
      </div>
    </div>
  )
}

export default addpost
