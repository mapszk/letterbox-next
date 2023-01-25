export interface MovieDetails {
  id: number,
  name: string,
  releaseYear: number,
  slug: string,
  description: string,
  cover: string,
  director: string,
  createdAt: string,
  updatedAt: string,
  likes: number,
  watchlist: number,
  reviews: number,
  isLiked: boolean,
  isInWatchlist: boolean
}
