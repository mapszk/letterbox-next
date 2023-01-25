import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import { withoutNavRoutes } from '@/utils/routes'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'

export default function App ({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const showNavbar = !withoutNavRoutes.includes(router.pathname)

  return (
    <>
      <Head>
        <title>Letterbox</title>
      </Head>
      {showNavbar && <Navbar />}
      <Component {...pageProps} />
    </>
  )
}
