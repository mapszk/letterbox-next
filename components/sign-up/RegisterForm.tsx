// import { signIn } from '@/services/Auth'
import { useState } from 'react'
import Button from '../Button'
import TextInput from '../TextInput'

export default function LoginForm () {
  const [userName, setUserName] = useState<string>('')
  const editUserName = (userName: string) => setUserName(userName)

  const [password, setPassword] = useState<string>('')
  const editPassword = (password: string) => setPassword(password)

  const login = async (event: React.SyntheticEvent) => {
    // event.preventDefault()
    // const token = await signIn(userName, password)
    // console.log(token)
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
      <Button type='submit'>Create account</Button>
    </form>
  )
}
