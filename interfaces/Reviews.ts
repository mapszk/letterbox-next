import { MovieDetails } from './Movie'

export interface IReview {
  id: number,
  userInfo: {
    userId: string,
    userName: string,
    avatar: string,
  },
  movieInfo: MovieDetails,
  content: string,
  createdAt: string,
  updatedAt: string,
}
