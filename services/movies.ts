import { api } from './api'

const baseEndpoint : string = 'api/v1/movies'

export const getMovie = ({ slug, accessToken }: {slug: string, accessToken?: string}) =>
  api.get(`${baseEndpoint}/${slug}`, { headers: { Authorization: `Bearer ${accessToken}` } })

export const likeMovie = ({ slug, accessToken }: {slug: string, accessToken?: string}) =>
  api.post(`${baseEndpoint}/${slug}/like`, {}, { headers: { Authorization: `Bearer ${accessToken}` } })

export const dislikeMovie = ({ slug, accessToken }: {slug: string, accessToken?: string}) =>
  api.post(`${baseEndpoint}/${slug}/remove-like`, {}, { headers: { Authorization: `Bearer ${accessToken}` } })

export const addToWatchlist = ({ slug, accessToken }: {slug: string, accessToken?: string}) =>
  api.post(`${baseEndpoint}/${slug}/add-to-watchlist`, {}, { headers: { Authorization: `Bearer ${accessToken}` } })

export const removeFromWatchlist = ({ slug, accessToken }: {slug: string, accessToken?: string}) =>
  api.post(`${baseEndpoint}/${slug}/remove-from-watchlist`, {}, { headers: { Authorization: `Bearer ${accessToken}` } })
