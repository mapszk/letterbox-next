import Link from 'next/link'
import Container from './Container'

export default function Navbar () {
  return (
    <header className='h-16 mb-6 flex flex-row items-center'>
      <Container>
        <Link className='inline-block' href='/'>
          <img src='/logo.png' className='w-16' />
        </Link>
        <Link href='/' />
      </Container>
    </header>
  )
}
