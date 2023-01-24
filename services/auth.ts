import axios from 'axios'
import { api } from './api'

const baseEndpoint: string = 'api/v1/auth'

export const signIn = ({ userName, password }: {userName: string, password: string}) =>
  api.post(`${baseEndpoint}/sign-in`, { userName, password })

export const signInProxy = ({ userName, password }: {userName: string, password: string}) =>
  axios.post('/api/auth/sign-in', { userName, password })
