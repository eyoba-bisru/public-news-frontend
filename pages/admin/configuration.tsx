import SidebarWithHeader from '../../components/Sidenav'
import { FiEdit } from 'react-icons/fi'
import { Input, Select, useToast } from '@chakra-ui/react'
import { MdDeleteForever } from 'react-icons/md'
import { AiFillEdit, AiFillPlusCircle } from 'react-icons/ai'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import instance from '../../lib/axiosInstance'
import swal from 'sweetalert'
type Values = {
  data: {
    id: string
    name: string
  }[]
}
const configuration = () => {
  const [values, setvalues] = useState<Values>()
  const [isEdit, setIsEdit] = useState(false)
  const [id, setId] = useState('')
  const toast = useToast()

  const formik = useFormik({
    initialValues: {
      title: '',
      selected: 'content',
    },

    validationSchema: Yup.object({
      title: Yup.string().required('title is required'),
      selected: Yup.string(),
    }),

    onSubmit: async (values, { resetForm }) => {
      if (!isEdit) {
        try {
          if (values.selected === 'content')
            await instance.post('/configuration/addContent', {
              name: values.title,
            })
          else if (values.selected == 'language')
            await instance.post('/configuration/addLanguage', {
              name: values.title,
            })
          else
            await instance.post('/configuration/addLocation', {
              name: values.title,
            })

          toast({
            // @ts-ignore
            title: `${values.selected} saved successfully`,
            variant: 'left-accent',
            isClosable: true,
            status: 'success',
            position: 'bottom-left',
          })

          setvalues(
            await instance.get(`/configuration/${formik.values.selected}s`)
          )
        } catch (error) {
          toast({
            // @ts-ignore
            title: error.response.data,
            variant: 'left-accent',
            isClosable: true,
            status: 'error',
            position: 'bottom-left',
          })
        }

        resetForm({
          values: {
            title: '',
            selected: formik.values.selected,
          },
        })
      } else {
        if (formik.values.selected === 'content')
          await instance.patch('/configuration/content', {
            id,
            name: formik.values.title,
          })
        else if (formik.values.selected === 'language')
          await instance.patch('/configuration/language', {
            id,
            name: formik.values.title,
          })
        else
          await instance.patch('/configuration/location', {
            id,
            name: formik.values.title,
          })

        setvalues(
          await instance.get(`/configuration/${formik.values.selected}s`)
        )

        resetForm({
          values: {
            title: '',
            selected: formik.values.selected,
          },
        })

        setIsEdit(false)

        toast({
          // @ts-ignore
          title: 'Edit success',
          variant: 'left-accent',
          isClosable: true,
          status: 'success',
          position: 'bottom-left',
        })
      }
    },
  })

  const handleClick = (id: string) => {
    swal({
      title: 'Are you sure you want to delete?',
      icon: 'warning',
      //@ts-ignore
      buttons: true,
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        if (formik.values.selected === 'content') {
          //@ts-ignore
          await instance.delete('/configuration/content', { data: { id } })
        } else if (formik.values.selected === 'language')
          //@ts-ignore
          await instance.delete('/configuration/language', { data: { id } })
        //@ts-ignore
        else await instance.delete('/configuration/location', { data: { id } })

        setvalues(
          await instance.get(`/configuration/${formik.values.selected}s`)
        )

        toast({
          // @ts-ignore
          title: 'Deletion success',
          variant: 'left-accent',
          isClosable: true,
          status: 'success',
          position: 'bottom-left',
        })
        // formik.values.selected = 'content'
      }
    })
  }

  const handleEdit = (id: string, title: string) => {
    setIsEdit(true)
    //@ts-ignore
    formik.setFieldValue('title', title)
    setId(id)
  }

  useEffect(() => {
    async function fetchCategory() {
      formik.values.selected === 'content'
        ? setvalues(await instance.get('/configuration/contents'))
        : formik.values.selected === 'language'
        ? setvalues(await instance.get('/configuration/languages'))
        : setvalues(await instance.get('/configuration/locations'))
    }

    fetchCategory()
  }, [formik.values.selected])

  return (
    <SidebarWithHeader>
      <Head>
        <title>Configuration</title>
      </Head>
      <div className='flex flex-col gap-10 px-6 h-screen'>
        <p className=' text-primary text-[23.165px] font-bold'>
          Configurations
        </p>
        <form onSubmit={formik.handleSubmit}>
          {formik.touched.title && formik.errors.title ? (
            <div className='text-red-600 text-sm text-center'>
              {formik.errors.title}
            </div>
          ) : null}
          <div className='w-full flex justify-center items-center'>
            <div className='flex justify-center items-center gap-2 w-full md:w-[90%] lg:w-[80%]'>
              <Select
                width='56'
                value={formik.values.selected}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name='selected'
              >
                <option value='content'>Content</option>
                <option value='language'>Language</option>
                <option value='location'>Location</option>
              </Select>

              <Input
                type='text'
                className='w-full'
                borderColor='#4C230A'
                placeholder='Title'
                value={formik.values.title}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                _focus={{ border: 'none' }}
                name='title'
              />
              {isEdit ? (
                <button
                  className='flex bg-green-600 gap-2 px-6 py-2 mr-14 rounded-md cursor-pointer'
                  type='submit'
                >
                  <AiFillEdit className='text-white text-2xl xs:hidden md:block' />
                  <p className='text-white inline'>Edit</p>
                </button>
              ) : (
                <button
                  className='flex bg-primary gap-2 px-6 py-2 mr-14 rounded-md cursor-pointer'
                  type='submit'
                >
                  <p className='text-white inline'>Add</p>
                  <AiFillPlusCircle className='text-white text-2xl xs:hidden md:block' />
                </button>
              )}
            </div>
          </div>
        </form>
        <div className='w-full flex flex-col gap-2 justify-center items-center'>
          {values?.data.map((value) => (
            <div className='w-full md:w-[90%] lg:w-[80%] bg-white p-4 flex justify-between items-center rounded-md'>
              <p>{value.name}</p>
              <div className='flex justify-center items-center gap-2'>
                <button
                  type='button'
                  className='bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 border border-green-500 rounded'
                  onClick={() => handleEdit(value.id, value.name)}
                >
                  <FiEdit />
                </button>
                <button
                  type='button'
                  onClick={() => handleClick(value.id)}
                  className='bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded'
                >
                  <MdDeleteForever />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SidebarWithHeader>
  )
}

export default configuration
