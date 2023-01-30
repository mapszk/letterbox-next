import { AxiosRequestConfig } from 'axios'
import { api } from './api'

const baseEndpoint: string = 'api/v1/reviews'

interface PaginatedReviews {
  movieSlug: string
  content?: string,
  pageNumber?: number,
  pageSize?: number,
}
export const getReviews = (
  { content, movieSlug, pageNumber = 0, pageSize = 5 }: PaginatedReviews,
  config?: AxiosRequestConfig
) => api.get(`${baseEndpoint}/${movieSlug}`, { params: { content, pageNumber, pageSize }, ...config })
