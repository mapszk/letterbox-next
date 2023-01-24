import { api } from './api'

const baseEndpoint : string = 'api/v1/movies'

export const getMovie = ({ slug, accessToken }: {slug: string, accessToken?: string}) =>
  api.get(`${baseEndpoint}/${slug}`, { headers: { Authorization: `Bearer ${accessToken}` } })
