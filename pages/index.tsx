import Button from '@/components/Button'
import Container from '@/components/Container'
import Head from 'next/head'
import Link from 'next/link'

export default function Index () {
  return (
    <>
      <Head>
        <title>Letterbox</title>
      </Head>
      <img src='/landing-bg.png' className='opacity-20 absolute w-screen h-screen object-cover -z-10' />
      <Container>
        <div className='flex flex-col justify-center items-center h-screen'>
          <div className='flex flex-col items-center mb-12'>
            <img src='/logo.png' alt='Logo' className='w-48 mb-4' />
            <h2 className='text-white text-2xl font-bold'>Letterbox</h2>
          </div>
          <div className='flex flex-col items-center'>
            <h4 className='text-3xl font-bold text-white text-center mb-9'>
              Track films you’ve watched. <br />
              Save those you want to see. <br />
              Tell your friends what’s good.
            </h4>
            <div className='flex flex-col gap-4 w-48'>
              <Link href='/sign-up'>
                <Button>Create account</Button>
              </Link>
              <Link href='/sign-in'>
                <Button secondary>Sign in</Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
