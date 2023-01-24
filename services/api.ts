import axios from 'axios'

const baseApiUrl: string | undefined = process.env.BASE_API_URL

export const api = axios.create({
  baseURL: baseApiUrl,
  headers: {
    'Content-Type': 'application/json'
  }
})
