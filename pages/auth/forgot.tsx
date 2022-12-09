import { Button, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import Head from 'next/head'
import UserNavbar from '../../components/UserNavbar'
import { MdEmail } from 'react-icons/md'

const forgot = () => {
  return (
    <div className='w-screen flex flex-col justify-between items-center'>
      <Head>
        <title>Forgot Password</title>
      </Head>
      <UserNavbar />
      <div className='w-[314.705px] py-[48.6px] mt-[6rem]'>
        <div className='w-full bg-white rounded-md h-[200px]'>
          <div className='px-6 py-1 flex flex-col gap-6'>
            <p className='font-light text-2xl text-center mt-6'>
              Forgot Password
            </p>
            <form className='flex flex-col justify-center items-center gap-4'>
              <InputGroup>
                <InputLeftElement
                  pointerEvents='none'
                  children={<MdEmail color='#4C230A' />}
                />
                <Input
                  type='email'
                  borderColor='#4C230A'
                  placeholder='Email'
                  _focus={{ border: 'none' }}
                />
              </InputGroup>
              <Button
                bg='#4C230A'
                _hover={{ bg: '#A53F2B' }}
                color='white'
                width='full'
                paddingY='5'
              >
                Reset
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default forgot
