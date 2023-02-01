import { AxiosRequestConfig } from 'axios'
import { api } from './api'

const baseEndpoint : string = 'api/v1/movies'

export const getMovie = (slug: string, config?: AxiosRequestConfig) =>
  api.get(`${baseEndpoint}/${slug}`, config)

export const getHomeMovies = (config?: AxiosRequestConfig) =>
  api.get(`${baseEndpoint}/get-all-paginated`, { params: { pageSize: 5, pageNumber: 0 }, ...config })

interface PaginatedMovies {
  name?: string
  pageNumber?: number,
  pageSize?: number,
}
export const getMoviesPaginated = ({ name, pageNumber = 0, pageSize = 300 }: PaginatedMovies, config?: AxiosRequestConfig) =>
  api.get(`${baseEndpoint}/get-all-paginated`, { params: { pageSize, pageNumber, name }, ...config })

export const likeMovie = (slug: string, config?: AxiosRequestConfig) =>
  api.post(`${baseEndpoint}/${slug}/like`, {}, config)

export const dislikeMovie = (slug: string, config?: AxiosRequestConfig) =>
  api.post(`${baseEndpoint}/${slug}/remove-like`, {}, config)

export const addToWatchlist = (slug: string, config?: AxiosRequestConfig) =>
  api.post(`${baseEndpoint}/${slug}/add-to-watchlist`, {}, config)

export const removeFromWatchlist = (slug: string, config?: AxiosRequestConfig) =>
  api.post(`${baseEndpoint}/${slug}/remove-from-watchlist`, {}, config)

export const addReview = ({ slug, content }: {slug: string, content: string}, config?: AxiosRequestConfig) =>
  api.post(`${baseEndpoint}/${slug}/review`, { content }, config)
