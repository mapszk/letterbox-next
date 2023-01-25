import Container from '@/components/Container'
import RegisterForm from '@/components/sign-up/RegisterForm'
import Head from 'next/head'
import Link from 'next/link'

export default function SignUp () {
  return (
    <>
      <Head>
        <title>Letterbox - Sign up</title>
      </Head>
      <Container>
        <div className='h-screen flex flex-col items-center'>
          <div className='h-screen w-full max-w-md flex flex-col justify-center items-center'>
            <h2 className='text-2xl font-bold text-white mb-6'>Sign up</h2>
            <RegisterForm />
          </div>
          <Link href='/'>
            <img className='w-24 mb-6' src='/logo.png' alt='Logo' />
          </Link>
        </div>
      </Container>
    </>
  )
}
