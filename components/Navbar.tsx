import Link from 'next/link'
import React, { useState } from 'react'
import Container from './Container'

export default function Navbar () {
  const [search, setSearch] = useState<string>('')
  const changeSearch = (evt: React.ChangeEvent<HTMLInputElement>) => setSearch(evt.target.value)

  return (
    <header className='h-16 mb-5 flex flex-row items-center bg-gray-800 sticky top-0'>
      <Container>
        <nav className='w-full flex justify-between flex-row gap-4 items-center'>
          <Link className='inline-block w-16' href='/'>
            <img src='/logo.png' className='w-16' />
          </Link>
          <input className='flex h-8 rounded-full w-42 md:w-64 px-3 py-2' placeholder='Search' value={search} onChange={changeSearch} />
          <Link href='/' className='inline-block w-6'>
            <img className='w-6 h-6 rounded-full' src='/avatar_placeholder.png' alt='User avatar' />
          </Link>
        </nav>
      </Container>
    </header>
  )
}
