import { Button, Input } from '@chakra-ui/react'
import Head from 'next/head'
import UserNavbar from '../../components/UserNavbar'
import { MdEmail } from 'react-icons/md'
import PasswordInput from '../../components/PasswordInputLogin'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useState } from 'react'
import { useAuth } from '../../context/AuthContext'

const Changepassword = () => {
  const context = useAuth()
  const formik = useFormik({
    initialValues: {
      oldpassword: '',
      newpassword: '',
      retypepassword: '',
    },

    validationSchema: Yup.object({
      oldpassword: Yup.string()
        .min(8, 'Too Short!')
        .max(20, 'Too Long!')
        .required('password is required'),
      newpassword: Yup.string()
        .min(8, 'Too Short!')
        .max(20, 'Too Long!')
        .required('password is required'),
      retypepassword: Yup.string()
        .oneOf([Yup.ref('newpassword'), null], 'Passwords must match')
        .required('password is required'),
    }),

    onSubmit: async (values, { resetForm }) => {
      alert(JSON.stringify(values, null, 2))
      context.login(
        values.oldpassword,
        values.newpassword,
        values.retypepassword,
        resetForm
      )
    },
  })
  return (
    <div className='w-screen flex flex-col justify-between items-center'>
      <Head>
        <title>Change Password</title>
      </Head>
      <UserNavbar />
      <div className='w-[314.705px] py-[48.6px] mt-[6rem]'>
        <div className='w-full bg-white rounded-md'>
          <div className='px-6 py-1 flex flex-col gap-6'>
            <p className='font-light text-2xl text-center mt-6'>
              Change Password
            </p>
            <form
              onSubmit={formik.handleSubmit}
              className='flex flex-col justify-center items-center gap-4'
            >
              <div className='flex flex-col gap-2'>
                <Input
                  type='password'
                  name='oldpassword'
                  borderColor='#4C230A'
                  placeholder='old password'
                  _focus={{ border: 'none' }}
                  value={formik.values.oldpassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.oldpassword && formik.errors.oldpassword ? (
                  <div className='text-red-600 text-sm'>
                    {formik.errors.oldpassword}
                  </div>
                ) : null}
                <Input
                  type='password'
                  name='newpassword'
                  borderColor='#4C230A'
                  placeholder='new password'
                  _focus={{ border: 'none' }}
                  value={formik.values.newpassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.newpassword && formik.errors.newpassword ? (
                  <div className='text-red-600 text-sm'>
                    {formik.errors.newpassword}
                  </div>
                ) : null}
                <Input
                  type='password'
                  name='retypepassword'
                  borderColor='#4C230A'
                  placeholder='retype password'
                  _focus={{ border: 'none' }}
                  value={formik.values.retypepassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.retypepassword &&
                formik.errors.retypepassword ? (
                  <div className='text-red-600 text-sm'>
                    {formik.errors.retypepassword}
                  </div>
                ) : null}
              </div>

              <Button
                bg='#4C230A'
                _hover={{ bg: '#A53F2B' }}
                color='white'
                width='full'
                paddingY='5'
                marginBottom='2'
                type='submit'
              >
                Change Password
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Changepassword
