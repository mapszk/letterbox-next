import { signIn } from '@/services/auth'
import { serialize } from 'cookie'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function signInHandler (req: NextApiRequest, res: NextApiResponse) {
  const { userName, password } = req.body
  const response = await signIn({ userName, password }).catch(e => e.response)

  if (response.status === 200) {
    const serialized = serialize('accessToken', response.data.accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'none',
      maxAge: 1000 * 60 * 60 * 24,
      path: '/'
    })
    res.setHeader('Set-Cookie', serialized)
  }

  res.status(response.status).json(response.data)
}
