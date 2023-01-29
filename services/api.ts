import axios from 'axios'

const baseApiUrl: string | undefined = process.env.NEXT_PUBLIC_BASE_API_URL

export const api = axios.create({
  baseURL: baseApiUrl,
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true
})
