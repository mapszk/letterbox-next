import { signIn } from '@/services/auth'
import { serialize } from 'cookie'
import { StatusCodes } from 'http-status-codes'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function signInHandler (req: NextApiRequest, res: NextApiResponse) {
  const { userName, password } = req.body
  const response = await signIn({ userName, password }).catch(e => e.response)

  if (response.status === StatusCodes.OK) {
    res.setHeader('Set-Cookie', serialize('user', response.data, {
      httpOnly: true,
      secure: true,
      sameSite: 'none',
      maxAge: 1000 * 60 * 60 * 24,
      path: '/'
    }))
  }

  res.status(response.status).json(response.data)
}
