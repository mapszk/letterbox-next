import { signUp } from '@/services/auth'
import { StatusCodes } from 'http-status-codes'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Button from '../Button'
import TextInput from '../TextInput'

export default function LoginForm () {
  const router = useRouter()

  const [userName, setUserName] = useState<string>('')
  const editUserName = (userName: string) => setUserName(userName)

  const [email, setEmail] = useState<string>('')
  const editEmail = (email: string) => setEmail(email)

  const [password, setPassword] = useState<string>('')
  const editPassword = (password: string) => setPassword(password)

  const login = async (event: React.SyntheticEvent) => {
    event.preventDefault()
    const res = await signUp({ userName, password, email }).catch(e => e.response)
    if (res.status === StatusCodes.OK) router.push('/sign-in')
  }

  return (
    <form className='flex flex-col w-full' onSubmit={login}>
      <TextInput
        className='mb-4'
        label='Username'
        value={userName}
        onChange={editUserName}
      />
      <TextInput
        className='mb-4'
        label='Email'
        value={email}
        onChange={editEmail}
      />
      <TextInput
        className='mb-6'
        label='Password'
        password
        value={password}
        onChange={editPassword}
      />
      <Button type='submit'>Create account</Button>
    </form>
  )
}
