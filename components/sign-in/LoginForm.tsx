import { signInProxy } from '@/services/auth'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { StatusCodes } from 'http-status-codes'
import Button from '../Button'
import TextInput from '../TextInput'

export default function LoginForm () {
  const router = useRouter()

  const [userName, setUserName] = useState<string>('')
  const editUserName = (userName: string) => setUserName(userName)

  const [password, setPassword] = useState<string>('')
  const editPassword = (password: string) => setPassword(password)

  const submit = async (event: React.SyntheticEvent) => {
    event.preventDefault()
    const res = await signInProxy({ userName, password }).catch(e => e.response)
    if (res.status === StatusCodes.OK) {
      router.push('/feed')
    }
  }

  return (
    <form className='flex flex-col w-full' onSubmit={submit}>
      <TextInput
        className='mb-4'
        label='Username'
        value={userName}
        onChange={editUserName}
      />
      <TextInput
        className='mb-6'
        label='Password'
        password
        value={password}
        onChange={editPassword}
      />
      <Button type='submit'>Sign in</Button>
    </form>
  )
}
